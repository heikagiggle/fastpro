import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { AuthStack } from './authStack';
import { CdnStack } from './cdnStack';
import { DatabaseStack } from './databaseStack';
import { EventStack } from './eventStack';
import { NestApiStack } from './nestApiStack';
import { NestStack } from './nestStack';
import { NextAppRouterStack } from './nextAppRouterStack';
import { RoleStack } from './roleStack';
import { SecretsStack } from './secretsStack';
import { StorageStack } from './storageStack';
import { AppType, FullStackConstructProps } from './types';

const AppBuilds = {
  [AppType.NEXT_APP_ROUTER]: NextAppRouterStack,
  [AppType.NEST]: NestStack,
  [AppType.NEST_API]: NestApiStack,
};

export class FullStackConstruct extends Construct {
  public auth?: AuthStack;
  public storage?: StorageStack;
  public database?: DatabaseStack;
  public apps?: Record<string, NextAppRouterStack | NestStack>;
  public cdn?: CdnStack;

  constructor(scope: Construct, id: string, props: FullStackConstructProps) {
    super(scope, id);

    /* cognito user pool */
    let auth: AuthStack | undefined;
    if (props.auth) {
      auth = new AuthStack(this, 'AuthStack', {
        appId: props.appId,
        groups: props.auth.groups,
      });

      this.auth = auth;
    }

    /* s3 bucket for file uploads */
    let storage: StorageStack | undefined;
    if (props.storage) {
      storage = new StorageStack(this, 'StorageStack', {
        appId: `${props.appId}-storage`,
        storage: props.storage,
      });

      this.storage = storage;
    }

    /* create secrets for test or production environments */
    let database: DatabaseStack | undefined;
    if (props.database) {
      database = new DatabaseStack(this, 'DatabaseStack', {
        appId: `${props.appId}-db`,
      });

      new cdk.CfnOutput(this, 'Database Secrets', {
        key: 'dbSecrets',
        value: database.secrets.secretName,
      });
    }

    const apps: Record<string, NextAppRouterStack | NestStack> = {};
    if (props.apps) {
      Object.assign(
        apps,
        Object.fromEntries(
          Object.entries(props.apps).map(([key, app]) => {
            const role = new RoleStack(this, `${key}Role`, {
              appId: `${props.appId}-${key}-role`,
              capabilities: app.connections,
              auth,
              database,
              storage,
            }).role;

            return [
              key,
              new AppBuilds[app.type](this, `${key}App`, {
                appId: `${props.appId}-${key}`,
                role,
                queue: app.connections?.queue,
                output: app.output,
                buildPaths: AppBuilds[app.type].clean(
                  app.output,
                  key,
                  app.command
                ),
              }),
            ];
          })
        )
      );

      this.apps = apps;
    }

    let event: EventStack | undefined;
    if (props.events) {
      event = new EventStack(this, 'EventStack', {
        apps,
        appId: props.appId,
        events: props.events,
      });
    }

    const secret = new SecretsStack(this, 'SecretsStack', {
      apps,
      auth,
      database,
      storage,
      event,
      appId: props.appId,
      secrets: props.secrets,
    });

    if (props.cdn) {
      const cdn = new CdnStack(this, 'CDNStack', {
        appId: `${props.appId}-cdn`,
        routes: props.cdn.routes,
        apps,
        storage,
      });

      new cdk.CfnOutput(this, 'App Url', {
        key: 'appUrl',
        value: 'https://' + cdn.distribution.domainName,
      });

      this.cdn = cdn;
    }

    new cdk.CfnOutput(this, 'App Secrets', {
      key: 'appSecrets',
      value: secret.secrets.secretName,
    });
  }
}
