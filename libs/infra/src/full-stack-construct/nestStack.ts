import * as child_process from 'node:child_process';
import * as fs from 'node:fs';

import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfrontOrigin from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaEventSource from 'aws-cdk-lib/aws-lambda-event-sources';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { AppProperties } from './types';

interface Props extends AppProperties, cdk.NestedStackProps {
  appId: string;
  webLayer?: boolean;
}

export class NestStack extends cdk.NestedStack {
  public function: lambda.Function;
  public queue: sqs.Queue | undefined;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const region = cdk.Stack.of(this).region;

    const { serverOutput } = props.buildPaths;
    if (!serverOutput) throw new Error('asset not found');

    const environment = {};

    Object.assign(environment, props.env);

    const layers: lambda.ILayerVersion[] = [];

    if (props.webLayer) {
      layers.push(
        lambda.LayerVersion.fromLayerVersionArn(
          this,
          'WebAdapterLayer',
          `arn:aws:lambda:${region}:753240598075:layer:LambdaAdapterLayerX86:16`
        )
      );

      Object.assign(environment, {
        AWS_LAMBDA_EXEC_WRAPPER: '/opt/bootstrap',
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        PORT: '8080',
      });
    }

    let role: iam.IRole | undefined;
    if (props.role?.roleArn) {
      role = iam.Role.fromRoleArn(this, 'AppRole', props.role?.roleArn);
    }

    this.function = new lambda.Function(this, `AppFunction`, {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 512,
      handler: props.webLayer ? 'run.sh' : 'main.handler',
      role,
      layers,
      timeout: cdk.Duration.seconds(30),
      code: lambda.Code.fromAsset(serverOutput),
      environment,
    });

    if (props.queue) {
      this.queue = new sqs.Queue(this, 'AppQueue', {
        visibilityTimeout: cdk.Duration.seconds(59),
      });

      this.function.addEventSource(
        new lambdaEventSource.SqsEventSource(this.queue, {
          batchSize: props.queue.batchSize,
        })
      );
    }
  }

  cloudfront(path: string, cdnConstruct: Construct) {
    const apiUrl = this.function.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    const apiBehavior = {
      origin: new cloudfrontOrigin.FunctionUrlOrigin(apiUrl),
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      compress: true,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      originRequestPolicy:
        cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
      responseHeadersPolicy:
        cloudfront.ResponseHeadersPolicy
          .CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT_AND_SECURITY_HEADERS,
    };

    return { [`${path}/*`]: apiBehavior };
  }

  static clean(output: string, name: string, command: string) {
    const destination = `./dist/${name}`;

    /* Delete previous cleaned files */
    fs.rmSync(destination, { recursive: true, force: true });

    /* Create server and static folders for deployment */
    fs.mkdirSync(destination, { recursive: true });

    /* copy compiled code to be deployed to the server */
    fs.cpSync(output, destination, { recursive: true });

    fs.writeFileSync(`${destination}/run.sh`, command);

    console.log(
      child_process
        .execSync(`npm ci`, {
          stdio: 'pipe',
          cwd: destination,
        })
        .toString()
    );

    return { serverOutput: destination };
  }
}
