import {
  PublishBatchCommand,
  PublishCommand,
  SNSClient,
} from '@aws-sdk/client-sns';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { Messaging } from '../microservice/messaging.service';

@Injectable()
export class SnsService implements Messaging {
  private sns: SNSClient;

  constructor() {
    this.sns = new SNSClient({});
  }

  async send(data: Array<unknown> | unknown): Promise<void> {
    if (Array.isArray(data)) {
      await this.sns.send(
        new PublishBatchCommand({
          PublishBatchRequestEntries: data.map((i) => ({
            Id: v4(),
            Message: JSON.stringify(i),
          })),
          TopicArn: process.env['SNS_TOPIC'],
        })
      );
    } else {
      await this.sns.send(
        new PublishCommand({
          Message: JSON.stringify(data),
          TopicArn: process.env['SNS_TOPIC'],
        })
      );
    }
  }
}
