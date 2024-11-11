import type { ChallengeNameType } from '@aws-sdk/client-cognito-identity-provider';

export type CognitoConfiguration = {
  region: string;
  clientSecret: string;
  clientId: string;
  userPoolId: string;
};

export type CreateUserPayload = {
  username: string;
  password: string;
  changePassword?: boolean;
  attributes: Record<string, string | number | boolean | undefined>;
  group?: string;
  verified?: boolean;
};

export type ChangePasswordPayload = {
  accessToken: string;
  oldPassword: string;
  newPassword: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LogoutPayload = {
  accessToken: string;
};

export type RefreshTokenPayload = {
  refreshToken: string;
  username: string;
};

export type ForgotPasswordPayload = {
  username: string;
};

export type SetPasswordPayload = {
  password: string;
  username: string;
  session: string;
};

export type ResetPasswordPayload = {
  username: string;
  confirmationCode: string;
  password: string;
};

export type AuthResponse =
  | {
      nextStep: 'DONE';
      authToken: { access: string; refresh?: string; expiresIn?: number };
    }
  | {
      nextStep: ChallengeNameType;
      session?: string;
      parameters: Record<string, string>;
    };
