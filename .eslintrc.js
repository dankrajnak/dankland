module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "react-app",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "react-hooks", "import"],
  parser: `@typescript-eslint/parser`,
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "arrow-body-style": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "typescript/no-unused-expression": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/react-in-jsx-scope": 0,
    "import/order": "warn",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: { "@typescript-eslint/explicit-module-boundary-types": 0 },
    },
  ],
};
