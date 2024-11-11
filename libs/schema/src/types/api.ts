export type ApiResponse<T> =
  | { success: false; error: string; code?: string }
  | { success: true; data: T };
