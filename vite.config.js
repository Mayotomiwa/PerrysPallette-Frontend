import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'bootstrap/dist/css/bootstrap.min.css': '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    },
  },
})
