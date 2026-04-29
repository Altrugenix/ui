import fs from "fs";
import path from "path";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() +
  str.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const createPackage = (compName, sourceRelPath) => {
  const root = process.cwd();
  const pkgPath = path.join(root, "packages", compName);
  const srcPath = path.join(pkgPath, "src");

  if (fs.existsSync(pkgPath)) {
    console.log("Package " + compName + " already exists. Skipping.");
    return;
  }

  fs.mkdirSync(srcPath, { recursive: true });

  // 1. package.json
  const pkgJson = {
    name: `@altrugenix/${compName}`,
    version: "1.0.0-alpha.0",
    license: "MIT",
    type: "module",
    main: `./dist/altrugenix-${compName}.umd.cjs`,
    module: `./dist/altrugenix-${compName}.js`,
    types: "./dist/index.d.ts",
    files: ["dist"],
    exports: {
      ".": {
        types: "./dist/index.d.ts",
        import: `./dist/altrugenix-${compName}.js`,
        require: `./dist/altrugenix-${compName}.umd.cjs`,
      },
    },
    publishConfig: {
      access: "public",
    },
    scripts: {
      build: "vite build",
      lint: "eslint .",
      test: "vitest run",
      "test:watch": "vitest",
      "type-check": "tsc --noEmit",
    },
    dependencies: {
      "@altrugenix/core": "1.0.0-alpha.0",
      "class-variance-authority": "^0.7.1",
      "lucide-react": "^1.7.0",
    },
    devDependencies: {
      "@testing-library/jest-dom": "^6.9.1",
      "@testing-library/react": "^16.3.2",
      "@types/react": "^19.2.14",
      "@types/react-dom": "^19.2.3",
      jsdom: "^29.0.1",
      vitest: "^4.1.2",
    },
    peerDependencies: {
      "framer-motion": "^11.0.0 || ^12.0.0",
      react: "^18.0.0 || ^19.0.0",
      "react-dom": "^18.0.0 || ^19.0.0",
    },
  };
  fs.writeFileSync(
    path.join(pkgPath, "package.json"),
    JSON.stringify(pkgJson, null, 2)
  );

  // 2. tsconfig.json
  const tsconfig = `{\n  "extends": "../../tsconfig.json",\n  "include": ["src"]\n}\n`;
  fs.writeFileSync(path.join(pkgPath, "tsconfig.json"), tsconfig);

  // 3. vite.config.ts
  const viteConfig = `/// <reference types="vitest/config" />
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
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Altrugenix${capitalize(compName)}",
      formats: ["es", "umd"],
      fileName: (format) =>
        \`altrugenix-${compName}.\${format === "es" ? "js" : "umd.cjs"}\`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "lucide-react",
        "@altrugenix/core",
        "framer-motion",
        "class-variance-authority",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "Lucide",
          "@altrugenix/core": "AltrugenixCore",
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
`;
  fs.writeFileSync(path.join(pkgPath, "vite.config.ts"), viteConfig);

  // 4. eslint.config.js
  const eslintConfig = `import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.ts", "*.d.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ["**/vitest.shims.d.ts", "**/vite.config.ts"],
  },
]);
`;
  fs.writeFileSync(path.join(pkgPath, "eslint.config.js"), eslintConfig);

  // 5. Copy Source files
  const absoluteSourcePath = path.join(
    root,
    "packages/ui/src/components/ui",
    sourceRelPath
  );

  if (fs.existsSync(absoluteSourcePath)) {
    const stat = fs.statSync(absoluteSourcePath);
    if (stat.isDirectory()) {
      const files = fs.readdirSync(absoluteSourcePath);
      for (const file of files) {
        let content = fs.readFileSync(
          path.join(absoluteSourcePath, file),
          "utf-8"
        );
        content = content.replace(/~\/lib\/utils\/cn/g, "@altrugenix/core");
        content = content.replace(/~\/types\/polymorphic/g, "@altrugenix/core");
        fs.writeFileSync(path.join(srcPath, file), content);
      }
    } else {
      let content = fs.readFileSync(absoluteSourcePath, "utf-8");
      content = content.replace(/~\/lib\/utils\/cn/g, "@altrugenix/core");
      content = content.replace(/~\/types\/polymorphic/g, "@altrugenix/core");

      const filename = path.basename(absoluteSourcePath);
      fs.writeFileSync(path.join(srcPath, filename), content);
      fs.writeFileSync(
        path.join(srcPath, "index.ts"),
        'export * from "./' + filename.replace(".tsx", "") + '";\\n'
      );
    }
  } else {
    console.log("Source not found: " + absoluteSourcePath);
  }
};

const componentsToExtract = [
  { name: "text", path: "text" },
  { name: "image", path: "image" },
  { name: "tag", path: "tag" },
  { name: "input-otp", path: "input-otp" },
];

componentsToExtract.forEach((c) => createPackage(c.name, c.path));
console.log("Migration done!");
