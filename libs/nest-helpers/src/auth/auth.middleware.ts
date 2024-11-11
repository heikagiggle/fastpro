import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(
    request: FastifyRequest['raw'] & { user?: unknown; token?: string },
    res: FastifyReply['raw'],
    next: (error?: unknown) => void
  ) {
    try {
      request.token = request.headers.authorization?.split(' ')[1];
    } catch (e) {
      /* empty */
    }

    if (request.token) {
      try {
        request.user = await this.authService.fetchUser(request.token);
      } catch (e) {
        /* empty */
      }
    }

    next();
  }
}
