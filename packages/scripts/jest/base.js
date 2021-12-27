module.exports = {
  roots: ["<rootDir>"],

  resetMocks: true,

  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    // "^.+\\.(js|jsx|ts|tsx)$": [
    //   "esbuild-jest",
    //   {
    //     sourcemap: true,
    //     loaders: {
    //       ".spec.ts": "tsx",
    //       ".e2e-spec.ts": "tsx",
    //       ".spec.js": "jsx",
    //     },
    //   },
    // ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // modulePathIgnorePatterns: [
  //   "<rootDir>/**/__fixtures__",
  //   "<rootDir>/**/node_modules",
  //   "<rootDir>/**/dist",
  // ],
  moduleDirectories: ["node_modules"],

  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
  ],
};
