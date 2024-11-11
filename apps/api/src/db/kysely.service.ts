import { Injectable } from '@nestjs/common';
import { Kysely, ParseJSONResultsPlugin } from 'kysely';
import { DataApiDialect } from 'kysely-data-api';
import { RDSData } from '@aws-sdk/client-rds-data';
import { DB } from './db.types';
import { EnvService } from '../env/env.service';

@Injectable()
export class KyselyService extends Kysely<DB> {
  constructor(private env: EnvService) {
    const dialect = new DataApiDialect({
      mode: 'postgres',
      driver: {
        client: new RDSData(),
        database: env.get('databaseName'),
        secretArn: env.get('databaseSecrets'),
        resourceArn: env.get('databaseArn'),
      },
    });

    super({ dialect, plugins: [new ParseJSONResultsPlugin()] });
  }
}
