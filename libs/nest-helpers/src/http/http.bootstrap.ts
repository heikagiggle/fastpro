import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { CustomExceptionFilter } from '../filters/custom-exception.filter';
import { ZodExceptionFilter } from '../filters/zod-exception.filter';
import { DefaultInterceptor } from '../interceptors/default.interceptor';
import type { HttpBootstrapOptions } from './types';

export async function httpBootstrap({
  host,
  module,
  globalPrefix,
  docs,
}: HttpBootstrapOptions) {
  const app = await NestFactory.create<NestFastifyApplication>(
    module,
    new FastifyAdapter()
  );

  if (globalPrefix) app.setGlobalPrefix(globalPrefix);

  const config = docs?.(new DocumentBuilder()).addBearerAuth().build();
  if (config) {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(
      globalPrefix ? `${globalPrefix}/docs` : 'docs',
      app,
      document
    );
  }

  app.useGlobalFilters(new CustomExceptionFilter(), new ZodExceptionFilter());
  app.useGlobalInterceptors(new DefaultInterceptor());

  await app.init();

  Logger.log(
    `🚀 Application is running on: ${host ?? 'http://localhost'}/${
      globalPrefix ?? ''
    }`
  );

  app.enableCors();
  return app;
}
