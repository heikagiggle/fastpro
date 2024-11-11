import { Module } from '@nestjs/common';
import { KyselyService } from '../../db/kysely.service';

@Module({
  providers: [KyselyService],
  exports: [ KyselyService ],
})
export class DBModule {}
