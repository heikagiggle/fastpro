import { HttpException, HttpStatus } from '@nestjs/common';

import {
  noPermissionError,
  unauthorizedError,
  unknownServerError,
} from '../utils/constants';

export class CustomException extends HttpException {
  constructor(
    status: HttpStatus = HttpStatus.OK,
    message: string[] | string = '',
    error?: unknown
  ) {
    super({ messages: Array.isArray(message) ? message : [message] }, status, {
      cause: error,
    });
  }

  static throw() {
    return CustomException.serverError();
  }

  static badRequest(message: string): CustomException {
    return new CustomException(HttpStatus.BAD_REQUEST, message);
  }

  static unauthorized(message = unauthorizedError): CustomException {
    return new CustomException(HttpStatus.UNAUTHORIZED, message);
  }

  static forbidden(message = noPermissionError): CustomException {
    return new CustomException(HttpStatus.FORBIDDEN, message);
  }

  static serverError(
    error?: unknown,
    message = unknownServerError
  ): CustomException {
    return new CustomException(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      error
    );
  }
}
