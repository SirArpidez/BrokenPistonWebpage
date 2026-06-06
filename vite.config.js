import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BrokenPistonWebpage/',
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
})
