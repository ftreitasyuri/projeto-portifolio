import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
// container:{
//       padding:{
//         // default: '1rem',
//         // sm: '2rem',
//         // lg: '4rem',
//         // xl: '5rem',
//         // '2xl': '6rem',
//       },
//       screens:{
//         sm: '100%',    // Para telas pequenas, largura 100%
//         md: '720px',   // Para telas médias, largura 720px
//         lg: '1960px',   // Para telas grandes, largura 960px
//         xl: '1140px',  //
//       }
//     },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
