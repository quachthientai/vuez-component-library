import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { hash } from './src/utils/functions.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.ts`,
        chunkFileNames: `[name]` + hash + `.ts`,
        assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  }
})
