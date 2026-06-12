import { defineConfig } from 'vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import path from 'path'

const uni = uniPlugin.default || uniPlugin

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import']
      }
    }
  }
})