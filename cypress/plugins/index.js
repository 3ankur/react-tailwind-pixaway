
const cucumber = require('cypress-cucumber-preprocessor').default;

const SAS_CYPRESS_ENV = process.env.SAS_CYPRESS_ENV || 'dev';
const envConfig = require(`../config/${SAS_CYPRESS_ENV}.json`);

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  // require('@cypress/code-coverage/task')(on, config);

  return Object.assign(config, envConfig);
};
