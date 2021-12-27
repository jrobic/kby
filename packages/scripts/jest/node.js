const path = require("path");
const base = require("./base");

module.exports = (packageName = "node", directoryPath = __dirname) => ({
  ...base,
  setupFilesAfterEnv: [path.join(directoryPath, "/src/setupTests.ts")],
  snapshotSerializers: [],
  testRegex: `(${directoryPath}/.*/src/.*|\\.(test|spec|e2e-spec))\\.tsx?$`,
  testURL: "http://localhost/",

  moduleDirectories: ["node_modules"],
  modulePaths: [`${directoryPath}/src/`],
  name: packageName,
  displayName: packageName,
  roots: [directoryPath],
});
