import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Practica-React-/',  // 👈 IMPORTANTE: debe coincidir EXACTO con el nombre del repo
})
