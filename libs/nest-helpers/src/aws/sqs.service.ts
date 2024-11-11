import {
  SendMessageBatchCommand,
  SendMessageCommand,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { Messaging } from '../microservice/messaging.service';

@Injectable()
export class SqsService implements Messaging {
  private readonly sqsClient: SQSClient;

  constructor(private region: string) {
    this.sqsClient = new SQSClient({ region });
  }

  async send(
    data: Array<unknown> | unknown,
    queueUrl = process.env['QUEUE_URL']
  ): Promise<void> {
    if (Array.isArray(data)) {
      await this.sqsClient.send(
        new SendMessageBatchCommand({
          Entries: data.map((i) => ({
            Id: v4(),
            MessageBody: JSON.stringify(i),
          })),
          QueueUrl: queueUrl,
        })
      );
    } else {
      await this.sqsClient.send(
        new SendMessageCommand({
          MessageBody: JSON.stringify(data),
          QueueUrl: queueUrl,
        })
      );
    }
  }
}
