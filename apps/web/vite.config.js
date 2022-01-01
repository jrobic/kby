import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import env from "vite-plugin-env-compatible";
import { visualizer } from "rollup-plugin-visualizer";
import istanbul from "vite-plugin-istanbul";

/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    visualizer(),
    env({ prefix: "KBY" }),
    istanbul({
      include: "src/*",
      exclude: ["node_modules", "src/**/*.(test|spec|e2e-spec).*"],
      extension: [".ts", ".tsx"],
      // requireEnv: true,
      cypress: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
