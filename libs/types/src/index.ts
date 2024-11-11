export * from './types/api.schema';
export * from './types/file';
export * from "./types/auth"

export type Unpacked<T> = T extends Array<infer U> ? U : T;

export type ApiResponse<T> =
  | { success: false; error: string; code?: string }
  | { success: true; data: T };
