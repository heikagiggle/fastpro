import { z } from 'zod';

export const DBSecretSchema = z.object({
  dbName: z.string().default('erudyte'),
  password: z.string().default(''),
  port: z.coerce.number().default(5432),
  host: z.string().default('localhost'),
  username: z.string().default('festusagboma'),
});

export const AppSecretSchema = z.object({
  region: z.string(),
  userPoolId: z.string(),
  userPoolDomain: z.string(),
  userPoolClientId: z.string(),
  userPoolClientSecret: z.string(),
  bucketArn: z.string(),
  bucketName: z.string(),
  topic: z.string(),
  databaseArn: z.string(),
  databaseName: z.string(),
  databaseSecrets: z.string(),
});
