/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const packagesDir = path.resolve(dirname, "..");
const packages = fs
  .readdirSync(packagesDir)
  .filter((f) => fs.statSync(path.join(packagesDir, f)).isDirectory());

const packageAliases = packages.reduce(
  (acc, pkg) => {
    if (pkg !== "ui") {
      acc[`@altrugenix/${pkg}`] = path.resolve(dirname, `../${pkg}/src`);
    }
    return acc;
  },
  {} as Record<string, string>
);

const packageExternals = packages
  .filter((pkg) => pkg !== "ui")
  .map((pkg) => `@altrugenix/${pkg}`);

const packageGlobals = packages.reduce(
  (acc, pkg) => {
    if (pkg !== "ui") {
      const camelCase = pkg
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
      acc[`@altrugenix/${pkg}`] = `Altrugenix${camelCase}`;
    }
    return acc;
  },
  {} as Record<string, string>
);

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
      ...(process.env.VITEST ? packageAliases : {}),
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
        "react/jsx-runtime",
        "react",
        "react-dom",
        "framer-motion",
        "lucide-react",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
        /^@altrugenix\//, // Match all @altrugenix/ imports to ensure they are externalized
        ...packageExternals,
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
          ...packageGlobals,
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
