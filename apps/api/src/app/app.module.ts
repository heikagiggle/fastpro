import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from '@app/nest-helpers/authorizers';
import { LibrariesModule } from '../libraries/libraries.module';
import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { AuthModule } from './auth/auth.module';
import { EnvModule } from '../env/env.module';

@Module({
  imports: [
    EnvModule,
    DBModule,
    AuthModule,
    LibrariesModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AuthenticatedGuard }],
})
export class AppModule {}
