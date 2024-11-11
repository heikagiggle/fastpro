export interface CoreAuthService {
  fetchUser: (token: string) => Promise<unknown>;
}

export class AuthService implements CoreAuthService {
  fetchUser(/* eslint-disable */ token: string): Promise<unknown> {
    throw new Error('not implemented ');
  }
}
