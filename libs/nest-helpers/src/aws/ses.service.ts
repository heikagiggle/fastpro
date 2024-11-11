import {
  SendEmailCommand,
  SendEmailCommandInput,
  SESClient,
} from '@aws-sdk/client-ses';
import { EmailBody, EmailTemplate } from './ses.types';

export class SesService extends SESClient {
  constructor(region?: string) {
    super({ region });
  }
  async sendEmail(body: EmailBody, template: EmailTemplate): Promise<void | {
    success: boolean;
    message: string;
  }> {
    const Charset = 'UTF-8';
    const { to, key, data } = body;

    const { subject, from, html } = template;
    const mailBody: SendEmailCommandInput = {
      Source: from,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: {
          Charset,
          Data: subject,
        },
        Body: {
          Html: {
            Charset,
            Data: html(data ?? {}),
          },
        },
      },
    };

    const command = new SendEmailCommand(mailBody);
    const res = await this.send(command);
    console.log('Send mail response: ', res);
  }
}
