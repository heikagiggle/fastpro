'use client';

import { DateTime } from 'luxon';
import { PropsWithChildren, useCallback, useState } from 'react';

import { setAuthTokens } from '../../api/server/setAuthTokens';
import { AuthContext } from './auth.context';
import { AuthToken } from '@app/schema/auth/auth.schema';
import { UserData } from '@app/types';

type Props = {
  access?: string;
  refresh?: string;
  expiresIn?: string;
  user?: UserData;
};

export function AuthProvider(props: PropsWithChildren<Props>) {
  const [user, setUser] = useState(props.user);
  const [access, setAccess] = useState(props.access);
  const [expiresIn, setExpiresIn] = useState(
    props.expiresIn ? DateTime.fromISO(props.expiresIn) : undefined
  );
  const [refresh, setRefresh] = useState(props.refresh);

  const updateToken = useCallback((token: AuthToken) => {
    console.log('token :: ', token);

    setAccess(token?.access);
    setRefresh(token?.refresh);
    setExpiresIn(
      props.expiresIn ? DateTime.fromISO(props.expiresIn) : undefined
    );

    void setAuthTokens(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        access,
        refresh,
        expiresIn,
        setUser,
        setToken: updateToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
