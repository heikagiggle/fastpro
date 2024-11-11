export type UserData = {
  username: string;
  groups: string[];
};

export const UserGroup = {
  SUPERADMIN: 'SuperAdmin',
  ADMIN: 'Admin',
  TEACHER: 'Teacher',
  STUDENT: 'Student',
} as const;

export type UserGroup = typeof UserGroup[keyof typeof UserGroup];
