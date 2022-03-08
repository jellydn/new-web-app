module.exports = {
  extends: ["productsway"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
