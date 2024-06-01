import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.2.20', // Listen on all IP addresses
    port: 5173, // Specify the port number
    open: true, // Automatically open the app in the browser on server start
  },
})
