module.exports = {
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  plugins: ["import", "unicorn", "prettier"],
  extends: [
    "airbnb/base",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "no-debugger": "off",
    "no-console": 0,

    // import
    "import/prefer-default-export": "off",
    // "import/no-extraneous-dependencies": "off",

    // Unicorn
    "unicorn/prefer-module": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.+(test|spec).+(ts|tsx)"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "global-require": "off",
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-anonymous-default-export": "off",
      },
    },
    // {
    //   files: ["**/cypress/**/*.+(js|ts)", "**/*cy.spec.+(ts|tsx)"],
    //   plugins: ["eslint-plugin-cypress"],
    //   extends: ["plugin:cypress/recommended"],
    //   env: { "cypress/globals": true, mocha: true },
    //   rules: {
    //     "import/no-extraneous-dependencies": "off",
    //   },
    // },

    {
      files: ["*.js"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              "**/tailwind.config.js",
              "**/vite.config.js",
              "**/.eslintrc.js",
              "**/config/**",
              "**/scripts/**",
            ],
          },
        ],
      },
    },
  ],
};
