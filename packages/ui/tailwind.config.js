/* eslint-disable global-require */
module.exports = {
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
