import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Make sure to update changes in tsconfig and .eslintrc as well
      api: path.resolve(__dirname, "./src/api"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      constant: path.resolve(__dirname, "./src/constants"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      styles: path.resolve(__dirname, "./src/styles"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
