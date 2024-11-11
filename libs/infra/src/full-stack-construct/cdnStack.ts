import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';

import { NestStack } from './nestStack';
import { NextAppRouterStack } from './nextAppRouterStack';
import { StorageStack } from './storageStack';
import { AppRef, AppResourceType, ResourceRef } from './types';

interface Props extends cdk.NestedStackProps {
  appId: string;
  apps: Record<string, NextAppRouterStack | NestStack>;
  routes: Record<string, AppRef | ResourceRef>;
  storage?: StorageStack;
}

export class CdnStack extends cdk.NestedStack {
  public distribution: cloudfront.Distribution;
  private readonly appId: string;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    this.appId = props.appId;
    const routes: Record<string, NextAppRouterStack | NestStack> = {};

    Object.assign(
      routes,
      Object.fromEntries(
        Object.entries(props.routes).map(([key, val]) => {
          if ('$app' in val) {
            const app = props.apps[val.$app];
            if (!app) throw new Error(`"${val.$app}" app not found`);

            app.function.addEnvironment('BASE_PATH', key);
            return [key, app];
          } else {
            if (val.$resource === AppResourceType.UPLOADS) {
              if (!props.storage) throw new Error('uploads must be enabled');
              return [key, props.storage];
            }
          }

          throw new Error(`${JSON.stringify(val)} not found`);
        })
      )
    );

    const { '/*': base, ...otherRoutes } = routes;
    if (!base) throw new Error('no base route');

    const { '/*': defaultBehavior, ...additionalBehaviors } = base.cloudfront(
      '',
      this
    );

    if (!defaultBehavior) throw new Error('no default behaviour');

    for (const i in otherRoutes) {
      Object.assign(additionalBehaviors, otherRoutes[i]?.cloudfront(i, this));
    }

    this.distribution = new cloudfront.Distribution(this, 'CDN', {
      defaultBehavior,
      additionalBehaviors,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
    });

    /*if (props.storage && uploadEnabled) {
      props.storage.bucket.addToResourcePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
          resources: ['arn:aws:s3:::' + props.storage.bucket.bucketName + '/!*'],
          conditions: {
            StringEquals: {
              'AWS:SourceArn':
                'arn:aws:cloudfront::' +
                account +
                ':distribution/' +
                this.distribution.distributionId,
            },
          },
        })
      );
    }*/
  }
}
