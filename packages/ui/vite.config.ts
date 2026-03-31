/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

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
      ],
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "AltrugenixUI",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-ui.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "framer-motion",
        "lucide-react",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "Motion",
          "lucide-react": "Lucide",
          clsx: "Clsx",
          "tailwind-merge": "TailwindMerge",
          "class-variance-authority": "Cva",
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          globals: true,
          environment: "jsdom",
          setupFiles: ["./src/test/setup.ts"],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
