import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Site utilisateur GitHub Pages (gillesaurel.github.io) -> servi a la racine, base '/' est correct.
// Si le depot est renomme en site "projet", ajouter base: '/nom-du-depot/'.
export default defineConfig({
  plugins: [react()],
})
