import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Practica-React-/',   // 👈 debe coincidir con el nombre EXACTO del repo
  plugins: [react(), tailwindcss()],
})
