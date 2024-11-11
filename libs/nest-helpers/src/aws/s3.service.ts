import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { SignedUrlAction } from '@app/types';
import { StreamingBlobPayloadInputTypes } from '@smithy/types';

import { GenerateSignedUrlPayload, S3Options } from './s3.types';

export class S3Service extends S3Client {
  constructor(private options?: S3Options) {
    super();
  }

  generateSignedUrl(payload: GenerateSignedUrlPayload) {
    const params = {
      Bucket: this.options?.bucketName,
      Key: payload.key,
      expires: payload.expiration ?? 600,
    };

    return getSignedUrl(
      this,
      payload.action === SignedUrlAction.UPLOAD
        ? new PutObjectCommand(params)
        : new GetObjectCommand(params),
      { expiresIn: 600 }
    );
  }

  async uploadStream(key: string, stream: StreamingBlobPayloadInputTypes) {
    const upload = new Upload({
      client: this,
      params: {
        Bucket: this.options?.bucketName,
        Key: key,
        Body: stream,
      },
    });

    const res = await upload.done();
    if (!res.Key) return;

    return `${this.options?.bucketDomain}/${res.Key}`;
  }
}
