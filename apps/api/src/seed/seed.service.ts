import { Injectable } from '@nestjs/common';

import { UserSeeder } from './seeders/user.seeder';

@Injectable()
export class SeedService {
  constructor(private user: UserSeeder) {}

  async seed() {
    await this.user.adminUser();
  }
}
