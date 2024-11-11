import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { CustomExceptionFilter } from '../filters/custom-exception.filter';
import { ZodExceptionFilter } from '../filters/zod-exception.filter';
import { MicroserviceBootstrapOptions } from './types';

export async function microserviceBootstrap(
  options: MicroserviceBootstrapOptions
) {
  const strategy = new options.transport();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    options.module,
    { strategy }
  );

  app.useGlobalFilters(new CustomExceptionFilter(), new ZodExceptionFilter());
  await app.init();

  Logger.log('🚀 Message handler is listening');

  return strategy;
}
