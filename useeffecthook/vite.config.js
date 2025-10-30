import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // optional: makes it work on LAN too
    port: 5173,      // or your preferred port
    hmr: true        // ensure HMR is enabled
  }
})
