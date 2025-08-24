import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para Vite
export default defineConfig({
  base: '/Practica-React-/',   // 👈 debe coincidir EXACTO con el nombre del repo en GitHub
  plugins: [react()],
})
