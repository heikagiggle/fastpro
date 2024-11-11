import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { Constants } from '../constants';

export function getAuthTokens() {
  const ck = cookies();

  const access = ck.get(Constants.AUTH_ACCESS_TOKEN)?.value;
  const expiresIn = ck.get(Constants.AUTH_ACCESS_TTL)?.value;
  const refresh = ck.get(Constants.AUTH_REFRESH_TOKEN)?.value;

  if (!access) {
    if (refresh) {
      return redirect(
        `${Constants.REFRESH_AUTH_URL}?redirect_url=${headers().get(
          'next-path'
        )}`
      );
    }

    return redirect(Constants.LOGOUT_URL);
  }

  return { access, refresh, expiresIn };
}
