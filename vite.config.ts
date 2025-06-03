import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // dizemos ao Rollup/Vite que o ponto de entrada do site é o ficheiro index.html
      input: 'index.html'
    }
  }
})
