import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para Vite
export default defineConfig({
  // 👇 Debe coincidir EXACTO con el nombre del repo
  base: '/Practica-React-/',
  plugins: [react()],
})
