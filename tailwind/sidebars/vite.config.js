import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    hot: true, // ensures HMR is enabled
    watch: {
      usePolling: true, // helpful in WSL, Docker, or networked filesystems
    },
  },
})
