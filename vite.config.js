import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    include: ['@fullcalendar/common'],
  },
  resolve: {
    dedupe: ['@fullcalendar/common'],
    alias: {
      $components: path.resolve('./src/lib/components'),
      $utils: path.resolve('./src/utils'),
      $assets: path.resolve('./src/assets')
    }
  }
})
