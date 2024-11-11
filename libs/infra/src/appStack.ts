import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { FullStackConstruct } from './full-stack-construct';
import { AppResourceType, AppType } from './full-stack-construct/types';

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const root = process.env['NX_WORKSPACE_ROOT'] ?? '';

    const app = new FullStackConstruct(this, 'FullStackApp', {
      appId: `${props.stackName}-fullstack`,
      storage: { retainOnDelete: process.env['ENVIRONMENT'] !== 'dev' },
      auth: { groups: ['SuperAdmin', 'Admin', 'Teacher', 'Student'] },
      database: true,
      apps: {
        web: {
          type: AppType.NEXT_APP_ROUTER,
          output: root + '/dist/apps/web',
          command: 'node apps/web/server.js',
        },
        api: {
          type: AppType.NEST_API,
          output: root + '/dist/apps/api',
          connections: {
            database: true,
            auth: true,
            storage: true,
          },
          command: 'node main.js',
        },
        event: {
          type: AppType.NEST,
          output: root + '/dist/apps/api-events',
          connections: {
            database: true,
            queue: { batchSize: 10 },
          },
          command: 'node main.js',
        },
      },
      cdn: {
        routes: {
          '/*': { $app: 'web' },
          '/api': { $app: 'api' },
          '/uploads': { $resource: AppResourceType.UPLOADS },
        },
      },
      events: {
        messages: [],
      },
      secrets: {
        redisPassword: process.env['redisPassword'],
        redisHost: process.env['redisHost'],
      },
    });
  }
}
