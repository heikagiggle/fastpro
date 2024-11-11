import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import { Injectable } from '@nestjs/common';
import { z, ZodSchema } from 'zod';

@Injectable()
export class SecretsService extends SecretsManagerClient {
  constructor() {
    super();
  }

  async loadSecret<T extends ZodSchema>(
    secretName: string,
    schema: T
  ): Promise<z.infer<typeof schema>> {
    const secretsRes = await this.send(
      new GetSecretValueCommand({ SecretId: secretName })
    );

    return schema.parse(JSON.parse(secretsRes.SecretString ?? '{}'));
  }

  async loadSecrets<T extends ZodSchema>(
    secretNames: (string | undefined)[],
    schema: T
  ): Promise<z.infer<typeof schema>> {
    const parsedSecrets = {};
    const secretsPromise: Promise<unknown>[] = [];

    for (const secret in secretNames) {
      if (!secretNames[secret]) continue;

      secretsPromise.push(
        this.send(
          new GetSecretValueCommand({ SecretId: secretNames[secret] })
        ).then((res) => JSON.parse(res.SecretString ?? '{}'))
      );
    }

    const fetchedSecretsRes = await Promise.allSettled(secretsPromise);
    for (const secretRes of fetchedSecretsRes) {
      if (secretRes.status === 'fulfilled')
        Object.assign(parsedSecrets, secretRes.value);
    }

    return schema.parse(parsedSecrets);
  }
}
