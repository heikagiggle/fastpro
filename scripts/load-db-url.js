const { readFileSync } = require('fs');
const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');
const fs = require('fs');

exports.loadDbUrl = async function () {
  if (process.env.DATABASE_URL) return;

  const envLocation = `${process.env.NX_WORKSPACE_ROOT}/.env`;
  const config = JSON.parse(
    readFileSync(process.env['BACKEND_CONFIG'] ?? '', 'utf8') ?? '{}'
  );

  const secretName = config?.databaseSecretName;
  if (!secretName) throw new Error('secret name not found');

  const client = new SecretsManagerClient();
  const dataRes = await client.send(
    new GetSecretValueCommand({ SecretId: config?.databaseSecretName })
  );

  const secretString = dataRes?.SecretString;
  if (!secretString)
    throw new Error(`secret ${config?.databaseSecretName} not found`);

  const secrets = JSON.parse(secretString);
  const url =
    'postgresql://' +
    secrets.username +
    ':' +
    secrets.password +
    '@' +
    secrets.host +
    ':' +
    secrets.port +
    '/' +
    secrets.dbname +
    '?schema=public&connection_limit=10&pool_timeout=60';

  fs.appendFileSync(envLocation, `\nDATABASE_URL=${url}`);
};
