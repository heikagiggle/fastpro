import {
  CACHE_KEY_METADATA,
  CACHE_MANAGER,
  CACHE_TTL_METADATA,
} from '@nestjs/cache-manager';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { map, Observable, of } from 'rxjs';

import { CustomException } from '../helpers/custom-exception';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<unknown>> {
    try {
      const cacheKey = Reflect.getMetadata(
        CACHE_KEY_METADATA,
        context.getHandler()
      ) as string;

      if (cacheKey) {
        const cachedData = await this.cache.get(cacheKey);
        if (cachedData) return of(cachedData);
      }

      return next.handle().pipe(
        map(async (data: unknown) => {
          const method = context.switchToHttp().getRequest().method;

          if (cacheKey && method === 'GET') {
            const cacheTTL: number =
              Reflect.getMetadata(CACHE_TTL_METADATA, context.getHandler()) ??
              Reflect.getMetadata(CACHE_TTL_METADATA, context.getClass()) ??
              60000;

            await this.cache.set(cacheKey, data, cacheTTL);
          }

          return data;
        })
      );
    } catch (e) {
      throw CustomException.serverError(e);
    }
  }
}
