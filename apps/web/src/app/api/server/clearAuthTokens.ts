'use server';

import { cookies } from 'next/headers';

import { Constants } from '../constants';

export async function clearCookieTokens() {
  const ck = cookies();

  ck.delete(Constants.AUTH_ACCESS_TOKEN);
  ck.delete(Constants.AUTH_REFRESH_TOKEN);
  ck.delete(Constants.AUTH_ACCESS_TTL);
}
