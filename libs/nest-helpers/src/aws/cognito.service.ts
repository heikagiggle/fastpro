import {
  AdminAddUserToGroupCommand,
  AdminCreateUserCommand,
  AdminInitiateAuthCommand,
  AdminInitiateAuthResponse,
  AdminListGroupsForUserCommand,
  AdminRespondToAuthChallengeCommand,
  AdminRespondToAuthChallengeResponse,
  AdminSetUserPasswordCommand,
  AdminUpdateUserAttributesCommand,
  AttributeType,
  AuthFlowType,
  ChallengeNameType,
  ChangePasswordCommand,
  CognitoIdentityProviderClient,
  ConfirmForgotPasswordCommand,
  ForgotPasswordCommand,
  GetUserCommand,
  GlobalSignOutCommand,
  AdminGetUserCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { createHmac } from 'crypto';

import { CoreAuthService } from '../auth/auth.service';
import { CustomException } from '../helpers/custom-exception';
import {
  AuthResponse,
  ChangePasswordPayload,
  CognitoConfiguration,
  CreateUserPayload,
  ForgotPasswordPayload,
  LoginPayload,
  LogoutPayload,
  RefreshTokenPayload,
  ResetPasswordPayload,
  SetPasswordPayload,
} from './cognito.types';

export class CognitoService
  extends CognitoIdentityProviderClient
  implements CoreAuthService
{
  constructor(private options?: CognitoConfiguration) {
    super({ region: options?.region });
  }

  async fetchByUsername(username: string) {
    const res = await this.send(
      new AdminGetUserCommand({
        UserPoolId: this.options?.userPoolId,
        Username: username,
      })
    );

    return res.Username;
  }

  async createUser(payload: CreateUserPayload) {
    const attributes: AttributeType[] = [];

    for (const key in payload.attributes) {
      attributes.push({
        Name: key,
        Value: payload.attributes[key]?.toString(),
      });
    }

    const res = await this.send(
      new AdminCreateUserCommand({
        UserPoolId: this.options?.userPoolId,
        Username: payload.username,
        UserAttributes: attributes,
        TemporaryPassword: payload.password,
      })
    );

    if (!res.User?.Username)
      throw CustomException.serverError(null, 'Unable to create user');

    await this.send(
      new AdminSetUserPasswordCommand({
        UserPoolId: this.options?.userPoolId,
        Username: payload.username,
        Password: payload.password,
        Permanent: !payload.changePassword,
      })
    );

    if (payload.verified && payload.attributes['email']) {
      try {
        await this.send(
          new AdminUpdateUserAttributesCommand({
            UserAttributes: [{ Name: 'email_verified', Value: 'true' }],
            UserPoolId: this.options?.userPoolId,
            Username: payload.username,
          })
        );
      } catch (e) {
        console.error(`unable to mark user as verified`, e);
      }
    }

    if (payload.group) {
      try {
        await this.send(
          new AdminAddUserToGroupCommand({
            GroupName: payload.group,
            UserPoolId: this.options?.userPoolId,
            Username: payload.username,
          })
        );
      } catch (e) {
        console.error(`unable to add user to group ${payload.group}`, e);
      }
    }

    return res.User;
  }

  async login(payload: LoginPayload) {
    const res = await this.send(
      new AdminInitiateAuthCommand({
        AuthFlow: AuthFlowType.ADMIN_USER_PASSWORD_AUTH,
        ClientId: this.options?.clientId,
        UserPoolId: this.options?.userPoolId,
        AuthParameters: {
          SECRET_HASH: this.createHash(payload.username),
          USERNAME: payload.username,
          PASSWORD: payload.password,
        },
      })
    );

    return this.sendAuthResponse(res);
  }

  async setPassword(payload: SetPasswordPayload) {
    const res = await this.send(
      new AdminRespondToAuthChallengeCommand({
        ChallengeName: ChallengeNameType.NEW_PASSWORD_REQUIRED,
        ClientId: this.options?.clientId,
        UserPoolId: this.options?.userPoolId,
        Session: payload.session,
        ChallengeResponses: {
          USERNAME: payload.username,
          NEW_PASSWORD: payload.password,
          SECRET_HASH: this.createHash(payload.username),
        },
      })
    );

    return this.sendAuthResponse(res);
  }

  async changePassword(payload: ChangePasswordPayload) {
    await this.send(
      new ChangePasswordCommand({
        AccessToken: payload.accessToken,
        PreviousPassword: payload.oldPassword,
        ProposedPassword: payload.newPassword,
      })
    );

    return;
  }

  async logout(payload: LogoutPayload) {
    await this.send(
      new GlobalSignOutCommand({
        AccessToken: payload.accessToken,
      })
    );
  }

  async refreshToken(payload: RefreshTokenPayload) {
    const res = await this.send(
      new AdminInitiateAuthCommand({
        AuthFlow: AuthFlowType.REFRESH_TOKEN_AUTH,
        ClientId: this.options?.clientId,
        UserPoolId: this.options?.userPoolId,
        AuthParameters: {
          REFRESH_TOKEN: payload.refreshToken,
          SECRET_HASH: this.createHash(payload.username),
        },
      })
    );

    return this.sendAuthResponse(res);
  }

  async forgotPassword(payload: ForgotPasswordPayload) {
    const res = await this.send(
      new ForgotPasswordCommand({
        ClientId: this.options?.clientId,
        Username: payload.username,
        SecretHash: this.createHash(payload.username),
      })
    );

    if (!res.CodeDeliveryDetails?.AttributeName)
      throw CustomException.serverError(null, 'error sending reset code');

    return;
  }

  async resetPassword(payload: ResetPasswordPayload) {
    await this.send(
      new ConfirmForgotPasswordCommand({
        ClientId: this.options?.clientId,
        Username: payload.username,
        ConfirmationCode: payload.confirmationCode,
        Password: payload.password,
        SecretHash: this.createHash(payload.username),
      })
    );

    return;
  }

  async fetchUser(accessToken: string) {
    const userAttributes = await this.send(
      new GetUserCommand({
        AccessToken: accessToken,
      })
    );

    if (!userAttributes.Username)
      throw CustomException.unauthorized('User not found');

    const attributes: Record<string, string | undefined> = {};

    if (userAttributes.UserAttributes?.length) {
      for (const attribute of userAttributes.UserAttributes) {
        attributes[attribute.Name ?? ''] = attribute.Value;
      }
    }

    const groupsRes = await this.send(
      new AdminListGroupsForUserCommand({
        UserPoolId: this.options?.userPoolId,
        Username: userAttributes.Username,
      })
    );

    const groups = groupsRes.Groups?.map((group) => group.GroupName) ?? [];

    return {
      ...attributes,
      username: userAttributes.Username,
      group: groups[0],
    };
  }

  createHash(username: string) {
    return createHmac('sha256', this.options?.clientSecret ?? '')
      .update(`${username}${this.options?.clientId}`)
      .digest('base64');
  }

  sendAuthResponse(
    res: AdminInitiateAuthResponse | AdminRespondToAuthChallengeResponse
  ): AuthResponse {
    if (res.AuthenticationResult?.AccessToken) {
      return {
        nextStep: 'DONE',
        authToken: {
          access: res.AuthenticationResult.AccessToken,
          refresh: res.AuthenticationResult.RefreshToken,
          expiresIn: res.AuthenticationResult.ExpiresIn,
        },
      };
    }

    if (!res.ChallengeName) throw CustomException.serverError();

    return {
      nextStep: res.ChallengeName,
      session: res.Session,
      parameters: res.ChallengeParameters ?? {},
    };
  }
}
