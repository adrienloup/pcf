import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Paperclip Factory',
        short_name: 'pcf',
        description: 'An addictive Idle/incremental/clicker game.',
        start_url: '/pcf',
        display: 'standalone',
        theme_color: '#866aff',
        background_color: '#252529',
        icons: [
          {
            src: '/pcf/pcf-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/pcf/pcf-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/pcf/pcf-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/pcf/pcf-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/pcf',
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  server: {
    port: 3030,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
