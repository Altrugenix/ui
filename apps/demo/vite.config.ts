import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Pointing to the library's distribution files to test the package structure
      '@altrugenix/ui': path.resolve(__dirname, '../../packages/altrugenix-ui/dist/altrugenix-ui.js'),
    },
  },
  server: {
    port: 3000,
  },
});
