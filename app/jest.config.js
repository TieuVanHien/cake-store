module.exports = {
  // other Jest configurations ...
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
