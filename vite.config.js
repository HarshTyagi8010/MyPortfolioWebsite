import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite config
 *
 * PERFORMANCE DECISIONS:
 * - React plugin uses Fast Refresh in dev (HMR without full reload)
 * - Build outputs to 'dist/' — Vercel auto-detects this
 * - CSS modules enabled by default via *.module.css convention
 */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching:
        // vendor chunk (React) changes rarely → long cache life
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
