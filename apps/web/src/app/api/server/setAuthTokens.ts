'use server';

import { DateTime } from 'luxon';
import { cookies } from 'next/headers';

import { Constants } from '../constants';
import { AuthToken } from '@app/schema/auth/auth.schema';

export async function setAuthTokens(tokens: AuthToken) {
  const ck = cookies();

  if (tokens?.access)
    ck.set(Constants.AUTH_ACCESS_TOKEN, tokens.access, {
      maxAge: tokens.expiresIn ?? 2592000,
    });

  if (tokens?.refresh)
    ck.set(Constants.AUTH_REFRESH_TOKEN, tokens.refresh, {
      maxAge: 2592000,
    });

  const expiration = DateTime.now()
    .plus({ second: (tokens.expiresIn ?? 2592000) - 1 })
    .toISO();

  console.log({ expiration });
  ck.set(Constants.AUTH_ACCESS_TTL, expiration, {
    maxAge: 2592000,
  });
}
