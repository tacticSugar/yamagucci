module.exports = {
  root: true,
  settings: {
        next: {
          rootDir: ["src"],
        },
      },
  parserOptions: {
    project: ['./tsconfig.json']
  },
  "env": { "browser": true, "es6": true, "node": true },
  "ignorePatterns": ["**/public/**", "next.config.js", "**/*.config.js", "**/*.json", "**/.eslintrc.js", "**/*.jsx", "**/jest-config/**", "icons.ts"],
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals",
    "standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:you-dont-need-lodash-underscore/all",
    "plugin:import/recommended",
    "plugin:storybook/recommended"
  ],
  "plugins": [
    "deprecate",
    "sort-keys-fix",
    "sort-destructure-keys",
    "@typescript-eslint",
    "jsdoc",
    "typescript-sort-keys",
    "no-relative-import-paths",
    "simple-import-sort"
  ],
  "rules": {
    "deprecate/import": ["error", {"nameRegExp": "^src", "use": "@/src"},],
    "arrow-body-style": ["error", "as-needed"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "no-console": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "any", prev: "export", next: "export" },
      { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "any", prev: "if", next: "if" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "for", next: "*" },
      { blankLine: "any", prev: "for", next: "for" },
      { blankLine: "always", prev: "*", next: "try" },
      { blankLine: "always", prev: "try", next: "*" },
      { blankLine: "any", prev: "try", next: "try" },
      { blankLine: "always", prev: "*", next: "switch" },
      { blankLine: "always", prev: "switch", next: "*" },
      { blankLine: "any", prev: "switch", next: "switch" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "any", prev: "block-like", next: "block-like" }
    ],
    "sort-destructure-keys/sort-destructure-keys": [2, {"caseSensitive": true}],
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
    "sort-keys-fix/sort-keys-fix": "error",
    "spaced-comment": "error",
    "capitalized-comments": ["error", "never"],
    "no-duplicate-imports": "off",
    "no-relative-import-paths/no-relative-import-paths": ["error", { "allowSameFolder": true, "prefix": "", prefix: "@" }],
    "import/namespace": "off",
    "import/no-anonymous-default-export": 0,
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "@next/next/no-img-element": 0,
    "no-unsafe-optional-chaining": "error",
    "no-use-before-define": "off",
    "jsdoc/multiline-blocks": ["error", {"minimumLengthForMultiline":75,"noMultilineBlocks":true}],
    "jsdoc/require-jsdoc": ["error", {
      "contexts":[
        "TSMethodSignature",
        "TSPropertySignature",
        "VariableDeclaration:not(ExportNamedDeclaration > VariableDeclaration)",
        "ExportNamedDeclaration:has(CallExpression)"
      ],
      "require": {
        "FunctionExpression": false,
        "FunctionDeclaration": false
      }
    }],
    "jsdoc/require-description": ["error", {"contexts": ["any"], "descriptionStyle":"body"}],
    'jsx-quotes': [2, 'prefer-single'],
    "react/display-name": "off",
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": ["error", { "ignore": ["gtm-label"] }],
    "react/no-unsafe": "error",
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-newline": ["error", { "multiline": "consistent", "singleline": "consistent" }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-handler-names": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": [2, 2, {"indentLogicalExpressions": true}],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-pascal-case": 0,
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "allow"
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": false
        },
        "multilineDetection": "brackets"
      }
    ]
  },
}
