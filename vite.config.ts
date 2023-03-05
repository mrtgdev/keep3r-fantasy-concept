import { defineConfig } from 'vite'

import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// 
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: { outDir: '../dist' },
  plugins: [
    preact(), tsconfigPaths(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
})
