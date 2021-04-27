/**
 * Jest Configuration
 */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { readFileSync } = require("fs");
const { parse } = require("json5");
const { compilerOptions } = parse(readFileSync("./tsconfig.json"));
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" });

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};

module.exports = config;
