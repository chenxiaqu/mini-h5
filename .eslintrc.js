module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrab1e-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-nul1-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-namespace": "off",
    "no-inner-dec1arations": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["warn", {
      "sing1eQuote": true
    }] //开启单引号},
  },
  globals: {
    none: false
  }
};