// *@ts-check*
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImportX from "eslint-plugin-import-x";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintPluginImportX.flatConfigs.recommended,
      eslintPluginImportX.flatConfigs.typescript,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-x": reactX,
      "react-dom": reactDom,
      import: eslintPluginImportX,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      eqeqeq: "error",
      "no-var": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "import-x/order": [
        "error",
        {
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "{assets,components,hooks,pages,types,utils,src}/**",
              group: "internal",
            },
            {
              pattern: "{assets,components,hooks,pages,types,utils,src}",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./*.css",
              group: "parent",
              position: "before",
            },
            {
              pattern: "styles/**",
              group: "parent",
            },
          ],
          alphabetize: {
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "sibling",
            "index",
            "object",
            "unknown",
            "type",
            // The parent group cannot exist because parent imports
            // are not allowed. So we treat it as a special group to
            // put our css imports in
            "parent",
          ],
          warnOnUnassignedImports: true,
        },
      ],
      "import-x/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "import-x/newline-after-import": "error",
      "import-x/first": "error",
      "import-x/no-relative-parent-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }
);
