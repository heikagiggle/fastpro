import type { paths } from '@app/types';
import createClient from 'openapi-fetch';

export const client = createClient<paths>({
  baseUrl: process.env.BASE_URL ?? 'http://127.0.0.1:4002',
});
