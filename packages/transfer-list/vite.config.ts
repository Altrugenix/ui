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
      exclude: [
        "src/test",
        "src/**/*.test.ts",
        "src/**/*.test.tsx",
        "src/App.tsx",
        "src/main.tsx",
        "src/**/*.stories.tsx",
        "src/**/*.stories.ts",
      ],
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/button": path.resolve(__dirname, "../button/src"),
            "@altrugenix/card": path.resolve(__dirname, "../card/src"),
            "@altrugenix/checkbox": path.resolve(__dirname, "../checkbox/src"),
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
            "@altrugenix/list": path.resolve(__dirname, "../list/src"),
          }
        : {}),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixTransferList",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-transfer-list.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "lucide-react",
        "@altrugenix/core",
        "@altrugenix/button",
        "@altrugenix/card",
        "@altrugenix/checkbox",
        "@altrugenix/list",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "Lucide",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/button": "AltrugenixButton",
          "@altrugenix/card": "AltrugenixCard",
          "@altrugenix/checkbox": "AltrugenixCheckbox",
          "@altrugenix/list": "AltrugenixList",
          "react/jsx-runtime": "jsxRuntime",
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
