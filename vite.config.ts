import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import generateSitemap from 'vite-ssg-sitemap'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  let base = '/'

  console.log(mode)

  if (command === 'build' && mode === 'staging') {
    base = '/waikato-drilling/'
  }

  return {
    base,
    ssgOptions: {
      onFinished() {
        generateSitemap({ hostname: 'https://www.waikatodrilling.co.nz' })
      },
    },
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
