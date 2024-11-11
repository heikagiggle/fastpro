import type { paths } from '@app/types';
import createClient from 'openapi-fetch';

export const client = createClient<paths>({
  baseUrl: process.env.NEXT_APP_BASE_URL,
});
