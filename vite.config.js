import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import PackageData from "./package.json";

/**
 * Verifies if an included module is external or internal. Used to exclude
 * imports from "node_modules".
 *
 * @param {string} id
 *     Module name/path
 * @returns
 */
const isModuleExternal = (id) => {
  return !id.startsWith(".") && !path.isAbsolute(id);
};

export default defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      fileName: (format) => `index.${format}.js`,
      name: PackageData.name,
    },
    sourcemap: false,
    rollupOptions: {
      external: isModuleExternal,
      plugins: [],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "lib"),
    },
  },
});
