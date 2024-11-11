import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Handler, SQSEvent } from 'aws-lambda';
import { firstValueFrom, ReplaySubject } from 'rxjs';

import { EventModule } from './event.module';
import { AwsTransporter } from './event.transporter';

async function bootstrap() {
  const strategy = new AwsTransporter();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EventModule,
    { strategy }
  );

  await app.init();
  Logger.log('app is running');

  return strategy;
}

const microserviceSubject = new ReplaySubject<AwsTransporter>();
bootstrap().then((transporter) => microserviceSubject.next(transporter));

export const handler: Handler<SQSEvent> = async (event, context, cb) => {
  const transporter = await firstValueFrom(microserviceSubject);

  for (const record of event.Records) {
    const message = JSON.parse(record.body);
    Logger.log(message, 'event');

    const handler = transporter.getHandlerByPattern(message.pattern);
    await handler?.(message.data, context);
  }
};
