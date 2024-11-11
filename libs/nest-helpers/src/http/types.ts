import { DocumentBuilder } from '@nestjs/swagger';

export type HttpBootstrapOptions = {
  host?: string;
  module: unknown;
  globalPrefix?: string;
  docs?: (dn: DocumentBuilder) => DocumentBuilder;
};
