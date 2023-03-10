import { defineConfig } from 'vite'

import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
//
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: { 
    outDir: '../dist' 
  },
  plugins: [
    preact(), tsconfigPaths(),
    VitePWA({
      mode: 'development',
      base: '/',
      scope: '/',
      includeAssets: ['/favicon.svg'],
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
          name: 'Seven PWA',
          short_name: 'Seven PWA',
          theme_color: '#080808',
          icons: [
              {
                  src: './assets/images/pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
              },
              {
                  src: './assets/images/pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
              },
              {
                  src: './assets/images/pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
              },
          ],
      },
      workbox: {
          globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,jsx,tsx}'],
      },
    })
  ],
})
