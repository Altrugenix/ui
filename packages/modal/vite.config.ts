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
      skipDiagnostics: false,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/button": path.resolve(__dirname, "../button/src"),
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
          }
        : {}),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixModal",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-modal.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "framer-motion",
        "lucide-react",
        "@altrugenix/core",
        "@altrugenix/button",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "lucide-react": "Lucide",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/button": "AltrugenixButton",
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
