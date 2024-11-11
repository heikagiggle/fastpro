import { Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';

import { CustomException } from '../helpers/custom-exception';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException) {
    if (exception.getStatus() >= 500) {
      Logger.error(exception.stack);
    }

    throw new HttpException(exception.getResponse(), exception.getStatus());
  }
}
