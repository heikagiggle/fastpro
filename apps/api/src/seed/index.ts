import { NestFactory } from '@nestjs/core';

import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';

async function seed() {
  const app = await NestFactory.createApplicationContext(SeedModule);
  const tasksService = app.get(SeedService);

  return tasksService.seed();
}

seed().then(() => console.log('seed complete'));
