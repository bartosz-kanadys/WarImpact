import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: "/",
 plugins: [react()],
 server: {
  port: 80,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:80",
 },
});
