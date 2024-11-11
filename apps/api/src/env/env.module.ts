import { SecretsService } from '@app/nest-helpers/aws/secrets.service';
import { Global, Module } from '@nestjs/common';
import { z } from 'zod';

import { EnvSchema, EnvType } from './env.schema';
import { EnvService } from './env.service';

@Global()
@Module({
  providers: [
    SecretsService,
    {
      provide: EnvService,
      useFactory() {
        return new EnvService({} as EnvType);
      },
    },
    {
      provide: EnvService,
      useFactory: async (secrets: SecretsService) => {
        const appSecretsName = process.env.APP_SECRETS;
        const dbSecretsName = process.env.DB_SECRETS;
        const secretsValues: Record<string, unknown> = {};

        if (appSecretsName) {
          Object.assign(
            secretsValues,
            await secrets.loadSecret(appSecretsName, z.any())
          );
        }

        if (dbSecretsName) {
          const dbSecrets = await secrets.loadSecret(dbSecretsName, z.any());

          Object.assign(secretsValues, {
            dbUrl:
              'postgresql://' +
              dbSecrets.username +
              ':' +
              dbSecrets.password +
              '@' +
              dbSecrets.host +
              ':' +
              dbSecrets.port +
              '/' +
              dbSecrets.dbName +
              '?schema=public',
          });
        }

        return new EnvService(
          EnvSchema.parse({ ...secretsValues, ...process.env })
        );
      },
      inject: [SecretsService],
    },
  ],
  exports: [EnvService],
})
export class EnvModule {}
