import { AppSecretSchema } from '@app/infra/schema';
import { z } from 'zod';

export const EnvSchema = AppSecretSchema.extend({
  redisHost: z.string().optional(),
  redisPort: z.coerce.number().optional(),
  redisPassword: z.string().optional(),
  dbUrl: z.string().optional(),
});

export type EnvType = z.infer<typeof EnvSchema>;
