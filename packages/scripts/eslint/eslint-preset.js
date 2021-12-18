module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [require.resolve("./base")],
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint", "import", "unicorn", "prettier"],
      extends: [
        require.resolve("./base"),
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:react/jsx-runtime",
        "plugin:unicorn/recommended",
        "plugin:prettier/recommended",
        "prettier",
      ],
    },
    {
      files: ["*.d.ts"],
      rules: {
        "unicorn/filename-case": "off",
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
};
