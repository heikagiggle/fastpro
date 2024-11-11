#!/usr/bin/env node
import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';

import { AppStack } from './appStack';

const app = new cdk.App();

const appId = process.env['AWS_APP_ID'];
if (!appId) throw new Error('App ID is missing');

const env = {
  account: process.env['CDK_DEFAULT_ACCOUNT'],
  region: process.env['CDK_DEFAULT_REGION'],
};

new AppStack(app, 'app', { env, stackName: appId });
