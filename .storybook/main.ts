import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";
import fs from "fs";
import path from "path";

const rootDir = dirname(fileURLToPath(import.meta.url));
const packagesDir = path.resolve(rootDir, "../packages");
const packages = fs
  .readdirSync(packagesDir)
  .filter((f) => fs.statSync(path.join(packagesDir, f)).isDirectory());

const packageAliases = packages.reduce(
  (acc, pkg) => {
    if (pkg !== "ui") {
      acc[`@altrugenix/${pkg}`] = path.resolve(
        rootDir,
        `../packages/${pkg}/src`
      );
    }
    return acc;
  },
  {} as Record<string, string>
);

const config: StorybookConfig = {
  stories: [
    "../packages/*/src/**/*.mdx",
    "../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          ...packageAliases,
          "~": path.resolve(rootDir, "../packages/ui/src"),
          "@altrugenix/ui": path.resolve(
            rootDir,
            "../packages/ui/src/index.ts"
          ),
        },
      },
      build: {
        chunkSizeWarningLimit: 2000,
        rolldownOptions: {
          checks: {
            pluginTimings: false,
          },
        },
      },
    } as any);
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
