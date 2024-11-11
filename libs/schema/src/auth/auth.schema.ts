import { ChallengeNameType } from '@aws-sdk/client-cognito-identity-provider';
import { z } from 'zod';

export const LoginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const AuthTokenSchema = z.object({
  access: z.string(),
  refresh: z.string().optional(),
  expiresIn: z.coerce.number().optional(),
});

export type AuthToken = z.infer<typeof AuthTokenSchema>;

export const AuthTokenResponseSchema = z.object({
  nextStep: z.literal('DONE'),
  authToken: AuthTokenSchema,
});

export type AuthTokenResponse = z.infer<typeof AuthTokenResponseSchema>;

export const CompleteChallengeResponse = z.object({
  nextStep: z.nativeEnum(ChallengeNameType),
  session: z.string().optional(),
  parameters: z.record(z.string(), z.any()),
});

export const SetPasswordSchema = z.object({
  username: z.string(),
  session: z.string(),
  password: z.string(),
});

export type SetPasswordRequest = z.infer<typeof SetPasswordSchema>;

export const ForgotPasswordRequestSchema = z.object({
  username: z.string(),
});

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordRequestSchema>;

export const ResetPasswordRequestSchema = ForgotPasswordRequestSchema.extend({
  confirmationCode: z.string().min(1),
  password: z.string().min(1),
});

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;

export const ChangePasswordRequestSchema = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(1),
});

export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;

export const FetchUserResponse = z.object({
  sub: z.string(),
  email_verified: z.boolean(),
  email: z.string().email().optional(),
  username: z.string(),
  group: z.string().optional(),
});

export const LoginResponseSchema = z.union([
  AuthTokenResponseSchema.extend({ user: FetchUserResponse }),
  CompleteChallengeResponse,
]);

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const RefreshTokenSchema = z.object({
  refreshToken: z.string(),
  username: z.string(),
});

export type RefreshTokenRequest = z.infer<typeof RefreshTokenSchema>;
