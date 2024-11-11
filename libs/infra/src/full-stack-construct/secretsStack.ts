import * as cdk from 'aws-cdk-lib';
import * as secretsManager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

import { AuthStack } from './authStack';
import { DatabaseStack } from './databaseStack';
import { EventStack } from './eventStack';
import { NestStack } from './nestStack';
import { NextAppRouterStack } from './nextAppRouterStack';
import { StorageStack } from './storageStack';

interface Props extends cdk.NestedStackProps {
  appId: string;
  auth?: AuthStack;
  database?: DatabaseStack;
  event?: EventStack;
  storage?: StorageStack;
  apps: Record<string, NextAppRouterStack | NestStack>;
  secrets?: Record<string, string | undefined>;
}

export class SecretsStack extends cdk.NestedStack {
  public readonly secrets: secretsManager.Secret;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
    const secretObjectValue: Record<string, cdk.SecretValue> = {
      region: cdk.SecretValue.unsafePlainText(cdk.Stack.of(this).region),
    };

    if (props.auth) {
      Object.assign(secretObjectValue, {
        userPoolArn: cdk.SecretValue.unsafePlainText(props.auth?.userPoolArn),
        userPoolId: cdk.SecretValue.unsafePlainText(props.auth?.userPoolId),
        userPoolDomain: cdk.SecretValue.unsafePlainText(
          props.auth.userPoolDomain
        ),
        userPoolClientId: cdk.SecretValue.unsafePlainText(
          props.auth?.userPoolClientId
        ),
        userPoolClientSecret: props.auth?.userPoolClientSecret,
      });
    }

    if (props.event) {
      Object.assign(secretObjectValue, {
        topic: cdk.SecretValue.unsafePlainText(props.event.topic.topicArn),
      });
    }

    if (props.storage) {
      Object.assign(secretObjectValue, {
        bucketName: cdk.SecretValue.unsafePlainText(
          props.storage.bucket.bucketName
        ),
        bucketArn: cdk.SecretValue.unsafePlainText(
          props.storage.bucket.bucketArn
        ),
      });
    }

    if (props.secrets) {
      Object.assign(
        secretObjectValue,
        Object.fromEntries(
          Object.entries(props.secrets).map(([key, val]) => [
            key,
            cdk.SecretValue.unsafePlainText(val ?? ''),
          ])
        )
      );
    }

    if (props.database) {
      Object.assign(secretObjectValue, {
        databaseArn: cdk.SecretValue.unsafePlainText(props.database.db.clusterArn),
        databaseName: cdk.SecretValue.unsafePlainText(props.database.dbName),
        databaseSecrets: cdk.SecretValue.unsafePlainText(props.database.secrets.secretArn)
      })
    }

    this.secrets = new secretsManager.Secret(this, 'AppSecrets', {
      secretObjectValue,
    });

    for (const i in props.apps) {
      const app = props.apps[i];
      if (!app) continue;

      app.function.addEnvironment('APP_SECRETS', this.secrets.secretName);
      this.secrets.grantRead(app.function);

      if (props.database)
        app.function.addEnvironment(
          'DB_SECRETS',
          props.database.secrets.secretName
        );
    }
  }
}
