module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
};
