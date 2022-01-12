const properties = require("known-css-properties").all

module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-no-unsupported-browser-features",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  rules: {
    "prettier/prettier": true,
    "order/properties-order": properties,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": true,
  },
  customSyntax: "postcss-jsx",
}
