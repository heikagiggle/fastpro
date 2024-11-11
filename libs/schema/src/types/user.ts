import { z } from 'zod';

export const UserGroup = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  USER: 'user',
  AGENT: 'agent',
} as const;

export type UserGroup = (typeof UserGroup)[keyof typeof UserGroup];

export const UserSchema = z.object({
  username: z.string(),
  accessToken: z.string(),
  email: z.string().email(),
  groups: z.nativeEnum(UserGroup).array(),
});

export type UserData = z.infer<typeof UserSchema>;

export type IUser = {
  name: string;
};
