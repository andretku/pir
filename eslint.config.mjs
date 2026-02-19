import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import pluginBoundaries from "eslint-plugin-boundaries";
import pluginUnicorn from "eslint-plugin-unicorn";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default defineConfig([
  ...compat.config({
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  }),
  {
    ignores: ["node_modules", "dist", "*.config.js", "public"],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11Y,
      prettier: prettierPlugin,
      "@stylistic": stylistic,
      boundaries: pluginBoundaries,
      unicorn: pluginUnicorn,
      "@tanstack/query": tanstackQuery.configs["flat/recommended"],
    },
    settings: {
      // Алиас '@/'
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // Основные
      "no-param-reassign": "warn",
      "no-await-in-loop": "error",
      "no-bitwise": ["error", { allow: ["~"] }],
      "no-duplicate-imports": "error",
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "object-curly-spacing": ["warn", "always"],
      indent: "off", // Отключено, так как prettier отвечает за форматирование

      // React
      "react-refresh/only-export-components": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      // eslint.config.ts – в rules
      "@typescript-eslint/no-unused-vars": "warn",

      // JSX A11y
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // Stylistic
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/max-len": [
        "warn",
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreUrls: true,
        },
      ],
      "@stylistic/block-spacing": "error",
      "@stylistic/comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      // Prettier
      "prettier/prettier": ["warn", { endOfLine: "auto" }], // * автоисправление ошибок: Quick Fix --> Fix all autofixable problems
    },
  },
]);
