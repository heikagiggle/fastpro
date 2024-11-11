import { Global, Module } from '@nestjs/common';

import { S3Service } from '@app/nest-helpers/aws/s3.service';
import { SesService } from '@app/nest-helpers/aws/ses.service';
import { EnvService } from '../env/env.service';
import { CognitoService } from '@app/nest-helpers/aws/cognito.service';

@Global()
@Module({
  providers: [
    {
      provide: CognitoService,
      useFactory(env: EnvService) {
        return new CognitoService({
          region: env.get('region'),
          clientId: env.get('userPoolClientId'),
          clientSecret: env.get('userPoolClientSecret'),
          userPoolId: env.get('userPoolId'),
        });
      },
      inject: [EnvService],
    },
    {
      provide: S3Service,
      useFactory: (env: EnvService) => {
        return new S3Service({
          bucketName: env.get('bucketName'),
          bucketDomain: env.get('bucketArn'),
        });
      },
      inject: [EnvService],
    },
    {
      provide: SesService,
      useFactory: (env: EnvService) => {
        return new SesService(env.get('region'));
      },
      inject: [EnvService],
    },
  ],
  exports: [CognitoService, S3Service, SesService],
})
export class LibrariesModule {}
