import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Globale Variablen und Mixins verfügbar machen, ohne sie in jeder Datei einzubinden
        additionalData: `@use 'css/theme/template/settings.scss' as *;`
      }
    }
  }
});