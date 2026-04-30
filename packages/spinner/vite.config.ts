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
        "src/**/*.stories.ts"
      ],
      rollupTypes: true,
      skipDiagnostics: false,
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
          }
        : {}),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AltrugenixSpinner",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-spinner.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: ["react/jsx-runtime", "react", "react-dom", "@altrugenix/core", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@altrugenix/core": "AltrugenixCore",
          "react/jsx-runtime": "jsxRuntime",
          "lucide-react": "Lucide",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
