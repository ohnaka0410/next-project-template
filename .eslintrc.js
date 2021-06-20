/**
 * ESLint Configuration
 */
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  root: true,
  extends: ["next", "next/core-web-vitals"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  env: { browser: true, node: true, es6: true },
  rules: {
    // custom
  },
};

module.exports = config;
