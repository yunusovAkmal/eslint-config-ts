// index.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    // your custom rules here
    "no-console": "warn",
  },
};
