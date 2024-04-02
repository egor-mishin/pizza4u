module.exports = {
  plugins: ["prettier", "react", "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        useTabs: true,
        semi: true,
        trailingComma: "all",
        bracketSpacing: true,
        printWidth: 100,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
