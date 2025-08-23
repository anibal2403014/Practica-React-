# Práctica React: Componente Button (variants + rounded)

Práctica con **Vite + React + TypeScript + Tailwind**.  
Se construye un botón reutilizable con `variant` (`primary | outline | destructive`) y
una prop opcional `rounded` (borde redondeado).

## Tecnologías
- Vite (React + TS)
- Tailwind vía plugin `@tailwindcss/vite`

## Requisitos
- Node 18+ y npm

## Correr en local
```bash
npm install
npm run dev

Abre http://localhost:5173.

Estructura rápida

src/
  Button.tsx   <- componente reutilizable
  App.tsx      <- ejemplos de uso
  index.css    <- Tailwind (@import "tailwindcss")
  main.tsx
