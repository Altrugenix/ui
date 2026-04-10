import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
