import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

import { AuthStack } from './authStack';
import { DatabaseStack } from './databaseStack';
import { StorageStack } from './storageStack';
import { AppCapability } from './types';

interface Props extends cdk.NestedStackProps {
  appId: string;
  storage?: StorageStack;
  auth?: AuthStack;
  database?: DatabaseStack;
  capabilities?: AppCapability;
}

export class RoleStack extends cdk.NestedStack {
  private readonly appId: string;
  public readonly role: iam.Role | undefined;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    this.appId = props.appId;

    const lambdaManagedPolicy = iam.ManagedPolicy.fromManagedPolicyArn(
      this,
      'LambdaManagedPolicy',
      'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
    );

    const statements: iam.PolicyStatement[] = [];

    if (props.capabilities?.auth && props.auth) {
      statements.push(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['cognito-idp:*', 'cognito-identity:*'],
          resources: [props.auth.userPoolArn],
        })
      );
    }

    if (props.capabilities?.storage && props.storage) {
      statements.push(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:*'],
          resources: [`${props.storage.bucket.bucketArn}/*`],
        })
      );
    }

    if (props.capabilities?.database && props.database) {
      statements.push(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['rds-data:*'],
          resources: [props.database.db.clusterArn],
        }),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['secretsmanager:GetSecretValue'],
          resources: [props.database.secrets.secretArn],
        })
      );
    }

    if (statements.length) {
      this.role = new iam.Role(this, 'Role', {
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [lambdaManagedPolicy],
        inlinePolicies: {
          basePolicy: new iam.PolicyDocument({ statements }),
        },
      });
    }
  }
}
