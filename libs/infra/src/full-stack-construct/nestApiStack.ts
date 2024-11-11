import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { NestStack } from './nestStack';
import { AppProperties } from './types';

interface Props extends AppProperties, cdk.NestedStackProps {
  appId: string;
}

export class NestApiStack extends NestStack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, { ...props, webLayer: true });
  }
}
