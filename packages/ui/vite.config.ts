/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

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
      "@altrugenix/core": path.resolve(dirname, "../core/src"),
      "@altrugenix/accordion": path.resolve(dirname, "../accordion/src"),
      "@altrugenix/button": path.resolve(dirname, "../button/src"),
      "@altrugenix/carousel": path.resolve(dirname, "../carousel/src"),
      "@altrugenix/checkbox": path.resolve(dirname, "../checkbox/src"),
      "@altrugenix/dialog": path.resolve(dirname, "../dialog/src"),
      "@altrugenix/icon": path.resolve(dirname, "../icon/src"),
      "@altrugenix/input": path.resolve(dirname, "../input/src"),
      "@altrugenix/kanban": path.resolve(dirname, "../kanban/src"),
      "@altrugenix/label": path.resolve(dirname, "../label/src"),
      "@altrugenix/menu": path.resolve(dirname, "../menu/src"),
      "@altrugenix/popover": path.resolve(dirname, "../popover/src"),
      "@altrugenix/progress": path.resolve(dirname, "../progress/src"),
      "@altrugenix/radio": path.resolve(dirname, "../radio/src"),
      "@altrugenix/select": path.resolve(dirname, "../select/src"),
      "@altrugenix/slider": path.resolve(dirname, "../slider/src"),
      "@altrugenix/snackbar": path.resolve(dirname, "../snackbar/src"),
      "@altrugenix/switch": path.resolve(dirname, "../switch/src"),
      "@altrugenix/table": path.resolve(dirname, "../table/src"),
      "@altrugenix/textarea": path.resolve(dirname, "../textarea/src"),
      "@altrugenix/toast": path.resolve(dirname, "../toast/src"),
      "@altrugenix/virtual-list": path.resolve(dirname, "../virtual-list/src"),
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
        "react/jsx-runtime",
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
