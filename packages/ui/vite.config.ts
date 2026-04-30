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
    skipDiagnostics: false,  rollupTypes: true
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/accordion": path.resolve(__dirname, "../accordion/src"),
            "@altrugenix/aspect-ratio": path.resolve(__dirname, "../aspect-ratio/src"),
            "@altrugenix/autocomplete": path.resolve(__dirname, "../autocomplete/src"),
            "@altrugenix/avatar": path.resolve(__dirname, "../avatar/src"),
            "@altrugenix/backdrop": path.resolve(__dirname, "../backdrop/src"),
            "@altrugenix/badge": path.resolve(__dirname, "../badge/src"),
            "@altrugenix/breadcrumbs": path.resolve(__dirname, "../breadcrumbs/src"),
            "@altrugenix/button": path.resolve(__dirname, "../button/src"),
            "@altrugenix/calendar-view": path.resolve(__dirname, "../calendar-view/src"),
            "@altrugenix/card": path.resolve(__dirname, "../card/src"),
            "@altrugenix/carousel": path.resolve(__dirname, "../carousel/src"),
            "@altrugenix/charts": path.resolve(__dirname, "../charts/src"),
            "@altrugenix/checkbox": path.resolve(__dirname, "../checkbox/src"),
            "@altrugenix/chip": path.resolve(__dirname, "../chip/src"),
            "@altrugenix/circular-progress": path.resolve(__dirname, "../circular-progress/src"),
            "@altrugenix/color-picker": path.resolve(__dirname, "../color-picker/src"),
            "@altrugenix/command-palette": path.resolve(__dirname, "../command-palette/src"),
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
            "@altrugenix/css-baseline": path.resolve(__dirname, "../css-baseline/src"),
            "@altrugenix/date-picker": path.resolve(__dirname, "../date-picker/src"),
            "@altrugenix/divider": path.resolve(__dirname, "../divider/src"),
            "@altrugenix/drawer": path.resolve(__dirname, "../drawer/src"),
            "@altrugenix/effects": path.resolve(__dirname, "../effects/src"),
            "@altrugenix/feedback": path.resolve(__dirname, "../feedback/src"),
            "@altrugenix/file-upload": path.resolve(__dirname, "../file-upload/src"),
            "@altrugenix/heading": path.resolve(__dirname, "../heading/src"),
            "@altrugenix/icon": path.resolve(__dirname, "../icon/src"),
            "@altrugenix/image": path.resolve(__dirname, "../image/src"),
            "@altrugenix/image-list": path.resolve(__dirname, "../image-list/src"),
            "@altrugenix/image-viewer": path.resolve(__dirname, "../image-viewer/src"),
            "@altrugenix/input": path.resolve(__dirname, "../input/src"),
            "@altrugenix/input-otp": path.resolve(__dirname, "../input-otp/src"),
            "@altrugenix/kanban": path.resolve(__dirname, "../kanban/src"),
            "@altrugenix/link": path.resolve(__dirname, "../link/src"),
            "@altrugenix/list": path.resolve(__dirname, "../list/src"),
            "@altrugenix/metric-card": path.resolve(__dirname, "../metric-card/src"),
            "@altrugenix/modal": path.resolve(__dirname, "../modal/src"),
            "@altrugenix/popover": path.resolve(__dirname, "../popover/src"),
            "@altrugenix/progress-bar": path.resolve(__dirname, "../progress-bar/src"),
            "@altrugenix/radio": path.resolve(__dirname, "../radio/src"),
            "@altrugenix/rating": path.resolve(__dirname, "../rating/src"),
            "@altrugenix/rich-text-editor": path.resolve(__dirname, "../rich-text-editor/src"),
            "@altrugenix/select": path.resolve(__dirname, "../select/src"),
            "@altrugenix/skeleton": path.resolve(__dirname, "../skeleton/src"),
            "@altrugenix/slider": path.resolve(__dirname, "../slider/src"),
            "@altrugenix/snackbar": path.resolve(__dirname, "../snackbar/src"),
            "@altrugenix/speed-dial": path.resolve(__dirname, "../speed-dial/src"),
            "@altrugenix/stepper": path.resolve(__dirname, "../stepper/src"),
            "@altrugenix/switch": path.resolve(__dirname, "../switch/src"),
            "@altrugenix/table": path.resolve(__dirname, "../table/src"),
            "@altrugenix/tabs": path.resolve(__dirname, "../tabs/src"),
            "@altrugenix/tag": path.resolve(__dirname, "../tag/src"),
            "@altrugenix/text": path.resolve(__dirname, "../text/src"),
            "@altrugenix/textarea": path.resolve(__dirname, "../textarea/src"),
            "@altrugenix/timeline": path.resolve(__dirname, "../timeline/src"),
            "@altrugenix/toast": path.resolve(__dirname, "../toast/src"),
            "@altrugenix/toggle": path.resolve(__dirname, "../toggle/src"),
            "@altrugenix/transfer-list": path.resolve(__dirname, "../transfer-list/src"),
            "@altrugenix/typography": path.resolve(__dirname, "../typography/src"),
            "@altrugenix/utilities": path.resolve(__dirname, "../utilities/src"),
            "@altrugenix/video-player": path.resolve(__dirname, "../video-player/src"),
            "@altrugenix/virtual-list": path.resolve(__dirname, "../virtual-list/src"),
          }
        : {}),
    }
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
