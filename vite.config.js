// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  test: {
    environment: 'jsdom', // Simulates the browser
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});