const fs = require('fs');

const backendConfig = process.env.BACKEND_CONFIG;
const backendId = `${process.env.AWS_APP_ID}-backend`;

if (!backendConfig || !backendId)
  throw new Error(`Backend config requires backendId`);

const file = JSON.parse(fs.readFileSync(backendConfig, 'utf8'));
fs.writeFileSync(backendConfig, JSON.stringify(file[backendId], null, 2));
