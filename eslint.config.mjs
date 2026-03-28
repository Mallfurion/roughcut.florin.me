import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: [".astro/", "dist/", "node_modules/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
  },
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  eslintConfigPrettier,
];
