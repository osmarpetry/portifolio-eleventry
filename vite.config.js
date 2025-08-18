import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all addresses, including LAN
    port: 5173,
  },
  build: {
    outDir: '_site',
  },
  publicDir: 'public',
});
