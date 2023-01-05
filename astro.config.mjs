import { defineConfig } from 'astro/config'

// https://astro.build/config
import preact from "@astrojs/preact"
import { VitePWA } from 'vite-plugin-pwa';
import Unocss from 'unocss/vite'

// https://astro.build/config
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  })],
  //output: 'server',
  //adapter: node({ mode: 'middleware' })
  vite: {
    plugins: [VitePWA(), Unocss()],
  },
})
