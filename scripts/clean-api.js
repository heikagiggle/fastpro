const fs = require('fs');
const archiver = require('archiver');

/**
 * @param {string} destination
 * @param {string} source
 * */
async function zipCode(destination, source) {
  return new Promise((resolve, reject) => {
    const code_output = fs.createWriteStream(destination);
    const code_archive = archiver('zip', {});

    code_archive.pipe(code_output);
    code_archive.directory(source, false);

    code_output.on('close', () => resolve());
    code_archive.finalize();
  });
}

/**
 * @param {string} app
 * */
exports.cleanApi = async function (app) {
  const source = `./dist/apps/${app}`;
  const destination = `./dist/deploy/${app}`;

  /* Delete previous cleaned files */
  fs.rmSync(destination, { recursive: true, force: true });

  /* Create server and static folders for deployment */
  fs.mkdirSync(destination, { recursive: true });

  /* Copy config file from infra folder */
  fs.cpSync(process.env.BACKEND_CONFIG, source + '/config.json');

  /* zip compiled code to be deployed to the server */
  await zipCode(`${destination}/code.zip`, source);
};
