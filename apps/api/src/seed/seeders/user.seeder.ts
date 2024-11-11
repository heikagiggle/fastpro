import { UserNotFoundException } from '@aws-sdk/client-cognito-identity-provider';
import { CognitoService } from '@app/nest-helpers/aws/cognito.service';
import { UserGroup } from '@app/types';
import { Injectable } from '@nestjs/common';

import { KyselyService } from '../../db/kysely.service';

@Injectable()
export class UserSeeder {
  constructor(private cognito: CognitoService, private db: KyselyService) {}

  async adminUser() {
    const username = process.env.ADMIN_USERNAME ?? '';
    const password = process.env.ADMIN_PASSWORD ?? '';

    try {
      const existingAdminUser = await this.cognito.fetchByUsername(username);
      if (existingAdminUser) return;
    } catch (e) {
      if (!(e instanceof UserNotFoundException)) {
        throw e;
      }
    }

    const adminUser = await this.cognito.createUser({
      username,
      password,
      attributes: {},
      group: UserGroup.SUPERADMIN,
      verified: true,
    });

    if (!adminUser.Username) throw new Error('unable to create admin user');
  }
}
