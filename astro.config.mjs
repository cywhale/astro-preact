import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import { VitePWA } from 'vite-plugin-pwa';
import Unocss from 'unocss/vite';

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
    optimizeDeps: {
      //https://github.com/tmrp/f1kalender.nl
      include: ['preact/hooks', 'preact/compat', 'preact']
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    },
    plugins: [VitePWA(), Unocss()],
    resolve: {
      //extensions: ['.js', '.jsx', 'ts', 'tsx'],
      //mainFields: ['module'],
      alias: {
        //"@": resolve(__dirname, "src"),
        //"firebaseApp": "https://cdn.skypack.dev/firebase@9.15.0/app",
        //"firebaseAuth": "https://cdn.skypack.dev/firebase@9.15.0/auth",
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react/jsx-runtime": "preact/jsx-runtime"
      }
    }
  }
});
