import {
  BinaryLike,
  createCipheriv,
  createDecipheriv,
  createHash,
  createHmac,
} from 'crypto';

export class Encryption {
  constructor(private encryptionKey: string, private encryptionIv: string) {}

  hash(data: BinaryLike) {
    return createHmac('sha512', this.encryptionKey).update(data).digest('hex');
  }

  encrypt(data: unknown) {
    const key = createHash('sha512')
      .update(this.encryptionKey)
      .digest('hex')
      .substring(0, 32);

    const iv = createHash('sha512')
      .update(this.encryptionIv)
      .digest('hex')
      .substring(0, 16);

    const cipher = createCipheriv('aes-256-cbc', key, iv);

    return Buffer.from(
      cipher.update(JSON.stringify(data), 'utf8', 'hex') + cipher.final('hex')
    ).toString();
  }

  decrypt<T>(encrypted: Buffer): T {
    const key = createHash('sha512')
      .update(this.encryptionKey)
      .digest('hex')
      .substring(0, 32);

    const iv = createHash('sha512')
      .update(this.encryptionIv)
      .digest('hex')
      .substring(0, 16);

    const decipher = createDecipheriv('aes-256-cbc', key, iv);

    return JSON.parse(
      decipher.update(encrypted.toString(), 'hex', 'utf8') +
        decipher.final('utf8')
    ) as T;
  }
}
