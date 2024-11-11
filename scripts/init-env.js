const fs = require('fs');
const userInfo = require('os').userInfo;

/**
 * @param {number} length
 *
 * */
function generateID(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  let counter = 0;
  let result = '';

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

/**
 * @param {string} appName
 *
 * */
exports.init = function (appName) {
  const envLocation = `${process.env.NX_WORKSPACE_ROOT}/.env`;
  const configLocation = `${process.env.NX_WORKSPACE_ROOT}/libs/infra/backendconfiguration.json`;

  let appId = process.env.AWS_APP_ID;
  let backendConfig = process.env.BACKEND_CONFIG;

  if (!appId) {
    appId = `${appName}-${userInfo().username.toLowerCase()}-${generateID(6)}`;
    fs.appendFileSync(envLocation, `\nAWS_APP_ID=${appId}`);
  }

  if (!backendConfig)
    fs.appendFileSync(envLocation, `\nBACKEND_CONFIG=${configLocation}`);
};
