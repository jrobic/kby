const getJestConfig = require('@kby/scripts/jest/node');
const packageName = require('./package.json').name.replace(/@\w+\//, '');

module.exports = {
  ...getJestConfig(packageName, __dirname),
  rootDir: '.',
};
