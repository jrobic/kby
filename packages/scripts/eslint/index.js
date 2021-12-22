const commonRules = {
  "no-debugger": "off",

  "react/function-component-definition": "off",

  // import
  "import/prefer-default-export": "off",

  // Unicorn
  "unicorn/prefer-module": "off",
  "unicorn/better-regex": "error",
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
};

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
    "jest/globals": true,
  },
  extends: [
    "airbnb/base",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["import", "unicorn", "jest", "testing-library", "prettier"],
  rules: {
    ...commonRules,
    "no-console": 0,
  },
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-anonymous-default-export": "off",
      },
    },
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
              "**/jest.config.js",
              "**/.eslintrc.js",
              "**/config/**",
              "**/scripts/**",
            ],
          },
        ],
      },
    },
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: [
        "@typescript-eslint",
        "import",
        "unicorn",
        "jest",
        "testing-library",
        "prettier",
      ],
      extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        // "plugin:unicorn/recommended",
        // "plugin:react/jsx-runtime",
        "plugin:prettier/recommended",
        "prettier",
      ],
      rules: {
        ...commonRules,
      },
    },
    {
      files: ["**/*.+(test|spec).+(ts|tsx|js|jsx)"],
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
      files: ["*.d.ts"],
      rules: {
        "unicorn/filename-case": "off",
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
};
