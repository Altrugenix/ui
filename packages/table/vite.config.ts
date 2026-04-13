/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@altrugenix/core": path.resolve(__dirname, "../core/src"),
      "@altrugenix/button": path.resolve(__dirname, "../button/src"),
      "@altrugenix/input": path.resolve(__dirname, "../input/src"),
      "@altrugenix/virtual-list": path.resolve(
        __dirname,
        "../virtual-list/src"
      ),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixTable",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-table.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: ["react/jsx-runtime", 
        "react",
        "react-dom",
        "lucide-react",
        "@tanstack/react-table",
        "@altrugenix/core",
        "@altrugenix/button",
        "@altrugenix/input",
        "@altrugenix/virtual-list",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "Lucide",
          "@tanstack/react-table": "ReactTable",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/button": "AltrugenixButton",
          "@altrugenix/input": "AltrugenixInput",
          "@altrugenix/virtual-list": "AltrugenixVirtualList",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
