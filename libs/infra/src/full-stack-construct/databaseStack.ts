import * as cdk from 'aws-cdk-lib';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsManager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

interface Props extends cdk.NestedStackProps {
  appId: string;
}

export class DatabaseStack extends cdk.NestedStack {
  public secrets: secretsManager.Secret;
  public db: rds.IDatabaseCluster;
  public dbName: string;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const db = rds.DatabaseCluster.fromDatabaseClusterAttributes(
      this,
      'DatabaseCluster',
      { clusterIdentifier: 'dev-db-instance' }
    );

    this.dbName = `${props.appId}-db`

    const dbSecret = new rds.DatabaseSecret(this, 'DatabaseSecret', {
      username: props.appId,
      dbname: this.dbName,
    });

    dbSecret.attach(db);

    this.db = db;
    this.secrets = dbSecret;
  }
}
