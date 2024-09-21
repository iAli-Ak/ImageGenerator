import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to Express backend
      '/api': {
        target: 'http://localhost:5000', // Express backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
