import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

import tailwindcss from "@tailwindcss/vite";

const packagesDir = path.resolve(__dirname, "../../packages");
const packages = fs
  .readdirSync(packagesDir)
  .filter((f) => fs.statSync(path.join(packagesDir, f)).isDirectory());

const packageAliases = packages.reduce(
  (acc, pkg) => {
    if (pkg !== "ui") {
      acc[`@altrugenix/${pkg}`] = path.resolve(
        __dirname,
        `../../packages/${pkg}/src`
      );
    }
    return acc;
  },
  {} as Record<string, string>
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Pointing to the library source for development to enable HMR and better debugging
      "@altrugenix/ui": path.resolve(
        __dirname,
        "../../packages/ui/src/index.ts"
      ),
      // The library's internal alias needs to be resolvable by the consumer when importing source
      "~": path.resolve(__dirname, "../../packages/ui/src"),
      ...packageAliases,
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
