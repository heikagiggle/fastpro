import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CognitoService } from '../aws/cognito.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private cognitoService: CognitoService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      request.token = request.headers.authorization.split(' ')[1];
    } catch (e) {
      /* empty */
    }

    try {
      request.user = await this.cognitoService.fetchUser(request.token);
    } catch (e) {
      /* empty */
    }

    return true;
  }
}
