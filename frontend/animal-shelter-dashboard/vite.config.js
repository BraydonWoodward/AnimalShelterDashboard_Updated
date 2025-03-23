import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration to set up React with a custom dev server port
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
  }
});
