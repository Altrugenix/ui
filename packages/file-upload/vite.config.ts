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
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
            "@altrugenix/progress-bar": path.resolve(
              __dirname,
              "../progress-bar/src"
            ),
          }
        : {}),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixFileUpload",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-file-upload.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "lucide-react",
        "@altrugenix/core",
        "@altrugenix/button",
        "@altrugenix/progress-bar",
        "framer-motion",
        "class-variance-authority",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "Lucide",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/button": "AltrugenixButton",
          "@altrugenix/progress-bar": "AltrugenixProgressBar",
          "framer-motion": "Motion",
          "class-variance-authority": "Cva",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
