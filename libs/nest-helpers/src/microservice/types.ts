import { CustomTransportStrategy } from '@nestjs/microservices';

export type MicroserviceBootstrapOptions = {
  module: unknown;
  transport: new (...args: unknown[]) => CustomTransportStrategy;
};
