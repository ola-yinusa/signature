import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'speed-insights.js',
      name: 'SpeedInsights',
      fileName: 'speed-insights',
      formats: ['iife']
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Don't hash the filename for easier reference in HTML
        entryFileNames: 'speed-insights.js'
      }
    }
  }
});
