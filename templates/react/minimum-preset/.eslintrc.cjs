module.exports = {
  extends: ["productsway"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
};
