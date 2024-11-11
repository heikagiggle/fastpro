import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    try {
      const ctx = context.switchToHttp();
      const res = ctx.getResponse();

      return next.handle().pipe(
        map((data: unknown) => {
          res.statusCode = 200;
          return data;
        })
      );
    } catch (e) {
      Logger.error('cache interceptor error :: ', e);
    }

    return next.handle();
  }
}
