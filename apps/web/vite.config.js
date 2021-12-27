import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import env from "vite-plugin-env-compatible";
import { visualizer } from "rollup-plugin-visualizer";

/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), visualizer(), env({ prefix: "KBY" })],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
