module.exports = {
  extends: ["productsway/react"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
};
