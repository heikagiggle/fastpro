'use client';

import { AuthToken } from '@app/schema/auth/auth.schema';
import { UserData } from '@app/types';
import { DateTime } from 'luxon';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type AuthContext = {
  access?: string;
  refresh?: string;
  expiresIn?: DateTime;
  setToken: (payload: AuthToken) => void;
  user?: UserData;
  setUser: Dispatch<SetStateAction<UserData | undefined>>;
};

export const AuthContext = createContext<AuthContext>({
  setToken: () => null,
  setUser: () => null,
});

export const useAuthContext = () => useContext(AuthContext);
