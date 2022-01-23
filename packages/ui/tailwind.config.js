/* eslint-disable global-require */
module.exports = {
  mode: undefined,
  content: ["./src/**/*.+(js|ts|tsx|mdx|md)"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
