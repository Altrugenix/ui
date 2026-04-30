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
      "@altrugenix/input": path.resolve(__dirname, "../input/src"),
      "@altrugenix/popover": path.resolve(__dirname, "../popover/src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixColorPicker",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-color-picker.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "lucide-react",
        "@altrugenix/core",
        "@altrugenix/input",
        "@altrugenix/popover",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "Lucide",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/input": "AltrugenixInput",
          "@altrugenix/popover": "AltrugenixPopover",
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
