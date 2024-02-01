import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'bootstrap/dist/css/bootstrap.min.css': '/node_modules/bootstrap/dist/css/bootstrap.min.css',
      '@fortawesome/free-brands-svg-icons': '/node_modules/@fortawesome/free-brands-svg-icons/index',
      '@fortawesome/free-solid-svg-icons' : '/node_modules/@fortawesome/free-solid-svg-icons/index',
      '@fortawesome/react-fontawesome': '/node_modules/@fortawesome/react-fontawesome/index',
    },
  },
})
