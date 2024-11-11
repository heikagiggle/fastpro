import { Logger, PipeTransform } from '@nestjs/common';
import { ZodType } from 'zod';

import { CustomException } from '../helpers/custom-exception';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown) {
    const res = this.schema.safeParse(value);
    if (res.success) return res.data;

    Logger.log(res.error.errors);
    throw CustomException.badRequest(
      res.error.errors
        .map((error) => `${error.path}: ${error.message}`)
        .join('; ')
    );
  }
}
