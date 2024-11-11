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
    code_archive.directory(`${source}/.next/standalone/`, false);
    code_archive.file('./scripts/run.sh', { name: 'run.sh' });

    code_output.on('close', () => resolve());
    code_archive.finalize();
  });
}

/**
 * @param {string} app
 * */
exports.cleanBuild = async function (app) {
  const source = `./dist/apps/${app}`;
  const destination = `./dist/deploy/${app}`;

  /* Delete previous cleaned files */
  fs.rmSync(destination, { recursive: true, force: true });

  /* Create server and static folders for deployment */
  fs.mkdirSync(`${destination}/server`, { recursive: true });
  fs.mkdirSync(`${destination}/static/_next`, { recursive: true });

  /* zip compiled code to be deployed to the server */
  await zipCode(`${destination}/server/code.zip`, source);

  /* Copy public and static files to static folder */
  fs.cpSync(`${source}/public`, `${destination}/static`, {
    recursive: true,
  });

  fs.cpSync(`${source}/.next/static`, `${destination}/static/_next/static`, {
    recursive: true,
  });
};
