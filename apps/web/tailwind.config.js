/* eslint-disable global-require */
const config = require("@kby/ui/tailwind.config");

module.exports = {
  ...config,
  content: [...config.content, "./src/**/*.+(js|ts|tsx|mdx|md)"],
};
