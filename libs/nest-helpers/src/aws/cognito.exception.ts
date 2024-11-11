import {
  CognitoIdentityProviderServiceException,
  NotAuthorizedException,
  UserNotFoundException,
} from '@aws-sdk/client-cognito-identity-provider';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch(CognitoIdentityProviderServiceException)
export class CognitoException implements ExceptionFilter {
  catch(exception: NotAuthorizedException | unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    if (exception instanceof NotAuthorizedException) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .send({ messages: [exception.message] });
    } else if (exception instanceof UserNotFoundException) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .send({ messages: [exception.message] });
    } else {
      Logger.error(exception);

      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ messages: ['unknown server error'] });
    }
  }
}
