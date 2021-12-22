const path = require("path");
const base = require("./base");

module.exports = (packageName = "node", directoryPath = __dirname) => ({
  ...base,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [path.join(directoryPath, "src/setupTests.ts")],
  snapshotSerializers: [],
  testRegex: `(${directoryPath}/.*/src/.*|\\.(test|spec|e2e))\\.tsx?$`,
  testURL: "http://localhost/",
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^react-native$": "react-native-web",
  },
  transform: {
    ...base.transform,
    "^.+\\.css$": require.resolve("./cssTransform.js"),
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      require.resolve("./fileTransform.js"),
  },
  moduleDirectories: ["node_modules"],
  modulePaths: [`${directoryPath}/src/`],
  name: packageName,
  displayName: packageName,
  roots: [directoryPath],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
});
