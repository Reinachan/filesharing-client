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

const { createNodeResolver } = eslintPluginImportX;

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
        project: [
          "tsconfig.json",
          "./tsconfig.node.json",
          "./tsconfig.app.json",
        ],
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
    settings: {
      "import-x/resolver-next": [
        createNodeResolver({
          extensions: [".ts", ".tsx"],
          conditionNames: ["import", "require", "default"],
          mainFields: ["module", "main"],

          tsconfig: {
            configFile: "tsconfig.json",
            references: ["tsconfig.app.json", "tsconfig.node.json"],
          },
          alias: {
            assets: ["./src/assets"],
            components: ["./src/components"],
            hooks: ["./src/hooks"],
            pages: ["./src/pages"],
            styles: ["./src/styles"],
            utils: ["src/utils"],
            types: ["./src/types"],

            // import files inside the folders
            "assets/*": ["./src/assets/*"],
            "components/*": ["./src/components/*"],
            "hooks/*": ["./src/hooks/*"],
            "pages/*": ["./src/pages/*"],
            "styles/*": ["./src/styles/*"],
            "utils/*": ["src/utils/*"],
            "types/*": ["./src/types/*"],
          },
        }),
      ],
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
              group: "unknown",
              position: "before",
            },
            {
              pattern: "styles/**",
              group: "unknown",
            },
          ],
          alphabetize: {
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "unknown",
            "type",
          ],
          warnOnUnassignedImports: true,
        },
      ],
      "import-x/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "import-x/newline-after-import": "error",
      "import-x/first": "error",
      // TODO: Re-enable whenever the bug that causes this to error on path aliases is fixed
      // "import-x/no-relative-parent-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }
);
