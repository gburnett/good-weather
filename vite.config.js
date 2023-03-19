import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      'types': fileURLToPath(new URL('./src/js/types', import.meta.url)),
      'utils': fileURLToPath(new URL('./src/js/utils', import.meta.url)),
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  build: {
    minify: true,
    manifest: true,
    target: 'es2015'
  }
});
