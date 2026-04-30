import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

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
      "@altrugenix/core": path.resolve(__dirname, "../../packages/core/src"),
      "@altrugenix/accordion": path.resolve(
        __dirname,
        "../../packages/accordion/src"
      ),
      "@altrugenix/aspect-ratio": path.resolve(
        __dirname,
        "../../packages/aspect-ratio/src"
      ),
      "@altrugenix/avatar": path.resolve(
        __dirname,
        "../../packages/avatar/src"
      ),
      "@altrugenix/badge": path.resolve(__dirname, "../../packages/badge/src"),
      "@altrugenix/button": path.resolve(
        __dirname,
        "../../packages/button/src"
      ),
      "@altrugenix/calendar": path.resolve(
        __dirname,
        "../../packages/calendar/src"
      ),
      "@altrugenix/carousel": path.resolve(
        __dirname,
        "../../packages/carousel/src"
      ),
      "@altrugenix/checkbox": path.resolve(
        __dirname,
        "../../packages/checkbox/src"
      ),
      "@altrugenix/dialog": path.resolve(
        __dirname,
        "../../packages/dialog/src"
      ),
      "@altrugenix/icon": path.resolve(__dirname, "../../packages/icon/src"),
      "@altrugenix/input": path.resolve(__dirname, "../../packages/input/src"),
      "@altrugenix/kanban": path.resolve(
        __dirname,
        "../../packages/kanban/src"
      ),
      "@altrugenix/label": path.resolve(__dirname, "../../packages/label/src"),
      "@altrugenix/menu": path.resolve(__dirname, "../../packages/menu/src"),
      "@altrugenix/popover": path.resolve(
        __dirname,
        "../../packages/popover/src"
      ),
      "@altrugenix/progress": path.resolve(
        __dirname,
        "../../packages/progress/src"
      ),
      "@altrugenix/radio": path.resolve(__dirname, "../../packages/radio/src"),
      "@altrugenix/select": path.resolve(
        __dirname,
        "../../packages/select/src"
      ),
      "@altrugenix/slider": path.resolve(
        __dirname,
        "../../packages/slider/src"
      ),
      "@altrugenix/snackbar": path.resolve(
        __dirname,
        "../../packages/snackbar/src"
      ),
      "@altrugenix/switch": path.resolve(
        __dirname,
        "../../packages/switch/src"
      ),
      "@altrugenix/table": path.resolve(__dirname, "../../packages/table/src"),
      "@altrugenix/textarea": path.resolve(
        __dirname,
        "../../packages/textarea/src"
      ),
      "@altrugenix/toast": path.resolve(__dirname, "../../packages/toast/src"),
      "@altrugenix/virtual-list": path.resolve(
        __dirname,
        "../../packages/virtual-list/src"
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
