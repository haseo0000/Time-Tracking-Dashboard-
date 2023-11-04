/** @type {import('ts-jest').JestConfigWithTsJest} */
const module = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: ["^.+\\.js$"],
};

export default module;
