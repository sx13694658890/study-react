import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({polyfills: ['es.promise.finally', 'es/map', 'es/set'],
  modernPolyfills: ['es.promise.finally']
})],
 
  publicDir:"public",
  base:"./",
  assetsInclude:"",
  logLevel:"info",
  clearScreen:true,
  resolve:{
    extensions:[".js",".jsx",".css"],
    alias:{
      "@c":resolve(__dirname,"src/component"),

    }
  },
 
})
