export interface Messaging {
  send(data: unknown): Promise<void>;
}

export class MessagingService implements Messaging {
  send(/* eslint-disable */ data: unknown): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
