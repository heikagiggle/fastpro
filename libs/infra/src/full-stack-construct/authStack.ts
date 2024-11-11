import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

interface Props extends cdk.NestedStackProps {
  appId: string;
  groups?: string[];
}

export class AuthStack extends cdk.NestedStack {
  public userPoolId: string;
  public userPoolArn: string;
  public userPoolClientId: string;
  public userPoolClientSecret: cdk.SecretValue;
  public userPoolDomain: string;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, 'UserPool', {
      deletionProtection: true,
      selfSignUpEnabled: true,
      signInCaseSensitive: false,
    });

    const domain = new cognito.UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      cognitoDomain: { domainPrefix: props.appId },
    });

    const webClient = new cognito.UserPoolClient(this, 'WebClient', {
      userPool,
      authFlows: {
        userPassword: true,
        userSrp: true,
        adminUserPassword: true,
      },
      accessTokenValidity: cdk.Duration.days(1),
      generateSecret: true,
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID],
        callbackUrls: ['https://erudyte.app/login'],
        logoutUrls: ['https://erudyte.app/logout'],
      },
    });

    if (props.groups?.length) {
      for (const i in props.groups) {
        new cognito.CfnUserPoolGroup(this, `${props.groups[i]}Group`, {
          userPoolId: userPool.userPoolId,
          precedence: Number(i) + 1,
          groupName: props.groups[i],
        });
      }
    }

    this.userPoolId = userPool.userPoolId;
    this.userPoolArn = userPool.userPoolArn;
    this.userPoolDomain = domain.baseUrl();
    this.userPoolClientId = webClient.userPoolClientId;
    this.userPoolClientSecret = webClient.userPoolClientSecret;
  }
}
