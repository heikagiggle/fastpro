import { CognitoService } from '@app/nest-helpers/aws/cognito.service';
import { Global, Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';
import { SeedService } from './seed.service';
import { UserSeeder } from './seeders/user.seeder';

@Global()
@Module({
  imports: [DBModule, EnvModule],
  providers: [
    SeedService,
    UserSeeder,
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
  ],
  exports: [CognitoService],
})
export class SeedModule {}
