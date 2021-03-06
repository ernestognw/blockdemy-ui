const path = require('path');

module.exports = ({ config }) => {
  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = Object.assign(config.resolve.alias, {
    'blockdemy-ui': path.resolve(__dirname, '../packages/core/src')
  });
  return config;
};
