const { cleanBuild } = require('./clean-build');
const { cleanApi } = require('./clean-api');
const { init } = require('./init-env');
const { loadDbUrl } = require('./load-db-url');
const { program } = require('commander');

program.name('Erudyte cli scripts');

program
  .command('clean-build')
  .description(
    'Clean next.js application build output to prepare it for deployment to server environment and CDN'
  )
  .requiredOption('-a, --app <string>', 'Next.js application name')
  .action(async (params) => {
    await cleanBuild(params.app);
  });

program
  .command('clean-api')
  .description(
    'Clean nest.js application build output to prepare it for deployment to server'
  )
  .requiredOption('-a, --app <string>', 'Nest.js application name')
  .action((params) => cleanApi(params.app));

program
  .command('init')
  .description('Initialize application')
  .requiredOption(
    '-n --name <string>',
    'Application Name',
    process.env.APP_NAME
  )
  .action((params) => init(params.name));

program
  .command('load-db-url')
  .description('Extract db url from secrets to .env file')
  .action(loadDbUrl);

program.parse();
