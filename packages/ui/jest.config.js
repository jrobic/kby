const getJestConfig = require("@kby/scripts/jest/react");
const packageName = require("./package.json").name.replace(/@\w+\//, "");

module.exports = {
  ...getJestConfig(packageName, __dirname),
};
