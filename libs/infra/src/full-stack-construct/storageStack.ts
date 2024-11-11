import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfrontOrigin from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import { FullStackConstructProps } from './types';

interface Props extends cdk.NestedStackProps {
  appId: string;
  storage: FullStackConstructProps['storage'];
}

export class StorageStack extends cdk.NestedStack {
  public bucket: s3.Bucket;
  private readonly appId: string;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const bucketProps: s3.BucketProps = {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    };

    Object.assign(
      bucketProps,
      props.storage?.retainOnDelete
        ? { removalPolicy: cdk.RemovalPolicy.RETAIN }
        : { removalPolicy: cdk.RemovalPolicy.DESTROY, autoDeleteObjects: true }
    );

    this.appId = props.appId;
    this.bucket = new s3.Bucket(this, 'Bucket', bucketProps);
  }

  cloudfront(path: string, cdnConstruct: Construct) {
    const bucket = s3.Bucket.fromBucketArn(
      cdnConstruct,
      `${this.appId}StorageBucket`,
      this.bucket.bucketArn
    );

    const storageAccessControl = new cloudfront.S3OriginAccessControl(
      cdnConstruct,
      `${this.appId}StorageOriginAccessControl`
    );

    const storageOrigin =
      cloudfrontOrigin.S3BucketOrigin.withOriginAccessControl(bucket, {
        originAccessControl: storageAccessControl,
      });

    const storageBehavior: cloudfront.BehaviorOptions = {
      compress: true,
      origin: storageOrigin,
      cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
      cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    return { [`${path}/*`]: storageBehavior };
  }
}
