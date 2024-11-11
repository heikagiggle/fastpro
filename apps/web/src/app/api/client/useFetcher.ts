import { paths } from '@app/types';
import { InitParam, MaybeOptionalInit } from 'openapi-fetch';
import type { PathsWithMethod } from 'openapi-typescript-helpers';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { useAuthContext } from '../../state/auth/auth.context';
import { client } from './client';

export function useFetcher<T extends PathsWithMethod<paths, 'get'>>(
  [path, ...keys]: [T, ...(string | number)[]],
  ...params: InitParam<MaybeOptionalInit<paths[T], 'get'>>
) {
  const { access, expiresIn } = useAuthContext();
  const [validated, setValidated] = useState(false);

  const { data, isLoading, isValidating, mutate } = useSWR(
    [path, ...keys],
    () =>
      client.GET(
        path,
        ...([
          ...params,
          { headers: { Authorization: `Bearer ${access}` } },
        ] as unknown as InitParam<MaybeOptionalInit<paths[T], 'get'>>)
      ),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateIfStale: false,
    }
  );

  useEffect(() => {
    console.log('useFetcher :: ', expiresIn);
  }, [expiresIn]);

  return {
    mutate,
    isLoading,
    isValidating,
    data: data?.data,
    error: data?.error,
  };
}
