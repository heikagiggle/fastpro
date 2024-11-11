import type { SignedUrlAction } from '@app/types';

export type S3Options = {
  bucketName: string;
  bucketDomain: string;
};

export type GenerateSignedUrlPayload = {
  key: string;
  expiration?: number;
  action: SignedUrlAction;
};
