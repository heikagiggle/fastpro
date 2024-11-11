import { paths } from '@app/types';
import { DateTime } from 'luxon';
import { useRouter } from 'next/navigation';
import { FetchResponse, InitParam, MaybeOptionalInit } from 'openapi-fetch';
import { HttpMethod, PathsWithMethod } from 'openapi-typescript-helpers';
import { useCallback, useState } from 'react';

import { useAuthContext } from '../../state/auth/auth.context';
import { Constants } from '../constants';
import { client } from './client';

export function useClient<
  M extends HttpMethod,
  Path extends PathsWithMethod<paths, M>
>(
  method: M,
  path: Path,
  onComplete?: (
    res: FetchResponse<
    NonNullable<paths[Path][M]>,  // Ensures `paths[Path][M]` is not null
    MaybeOptionalInit<paths[Path], M>,
    `${string}/${string}`
  >
  ) => void
) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { access, refresh, expiresIn } = useAuthContext();

  const call = useCallback(
    (...params: InitParam<MaybeOptionalInit<paths[Path], M>>) => {
      setLoading(true);
      if (expiresIn && DateTime.now() >= expiresIn) {
        return router.push(Constants.REFRESH_AUTH_URL);
      }

      (method === 'post'
        ? client.POST
        : method === 'patch'
        ? client.PATCH
        : method === 'patch'
        ? client.PUT
        : // @ts-expect-error invalid params
          client.DELETE)?.(path, ...params)
        // eslint-disable-next-line
        // @ts-ignore @ts-expect-error invalid params
        .then(onComplete)
        .finally(() => setLoading(false));
    },
    []
  );

  return { loading, call };
}
