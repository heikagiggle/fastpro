import { Env } from '@app/nest-helpers/helpers/env';
import { Injectable } from '@nestjs/common';

import { EnvType } from './env.schema';

@Injectable()
export class EnvService extends Env<EnvType> {
  constructor(secrets: EnvType) {
    super(secrets);
  }
}
