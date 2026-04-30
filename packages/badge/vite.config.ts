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
    skipDiagnostics: false,  rollupTypes: true
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
          }
        : {}),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixBadge",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-badge.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "@altrugenix/core",
        "class-variance-authority",
        "framer-motion",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@altrugenix/core": "AltrugenixCore",
          "class-variance-authority": "Cva",
          "framer-motion": "Motion",
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
