import {
  AuthTokenResponseSchema,
  ChangePasswordRequest,
  ChangePasswordRequestSchema,
  FetchUserResponse,
  ForgotPasswordRequest,
  ForgotPasswordRequestSchema,
  LoginRequest,
  LoginRequestSchema,
  LoginResponseSchema,
  RefreshTokenRequest,
  RefreshTokenSchema,
  ResetPasswordRequest,
  ResetPasswordRequestSchema,
  SetPasswordRequest,
  SetPasswordSchema,
} from '@app/schema/auth/auth.schema';
import { CognitoService } from '@app/nest-helpers/aws/cognito.service';
import { CognitoException } from '@app/nest-helpers/aws/cognito.exception';
import { Controller, Get, Post, UseFilters } from '@nestjs/common';
import { Token } from '@app/nest-helpers/auth/auth.decorators';
import { z } from 'zod';
import { Body, ErrorSchemas, Query, Schema } from '@app/nest-helpers/http/route.decorator';

@Controller('auth')
@UseFilters(CognitoException)
@ErrorSchemas
export class AuthController {
  constructor(private cognito: CognitoService) {}

  @Schema({ body: LoginRequestSchema, response: LoginResponseSchema })
  @Post('login')
  async login(@Body() body: LoginRequest) {
    const res = await this.cognito.login(body);
    console.log(res);
    if (res.nextStep !== 'DONE') return res;
    return { ...res, user: await this.cognito.fetchUser(res.authToken.access) };
  }

  @Schema({ body: ForgotPasswordRequestSchema })
  @Post('forgot-password')
  forgotPassword(@Body() body: ForgotPasswordRequest) {
    return this.cognito.forgotPassword(body);
  }

  @Schema({ body: ResetPasswordRequestSchema })
  @Post('reset-password')
  resetPassword(@Body() body: ResetPasswordRequest) {
    return this.cognito.resetPassword(body);
  }

  @Schema({ body: ChangePasswordRequestSchema, authorized: true })
  @Post('change-password')
  changePassword(@Body() body: ChangePasswordRequest, @Token() token: string) {
    return this.cognito.changePassword({
      accessToken: token,
      oldPassword: body.oldPassword,
      newPassword: body.newPassword,
    });
  }

  @Schema({ body: SetPasswordSchema, response: LoginResponseSchema })
  @Post('set-password')
  async setPassword(@Body() body: SetPasswordRequest) {
    const res = await this.cognito.setPassword(body);
    if (res.nextStep !== 'DONE') return res;
    return { ...res, user: await this.cognito.fetchUser(res.authToken.access) };
  }

  @Schema({
    query: z.object({ token: z.string() }),
    response: FetchUserResponse,
    authorized: true,
  })
  @Get()
  getProfile(@Query() token: { token: string }) {
    return this.cognito.fetchUser(token.token);
  }

  @Schema({ body: RefreshTokenSchema, response: AuthTokenResponseSchema })
  @Post('refresh-token')
  refreshToken(@Body() body: RefreshTokenRequest) {
    return this.cognito.refreshToken(body);
  }
}
