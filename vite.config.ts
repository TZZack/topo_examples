import path from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import { copyFilePlugin } from './bundler/plugins/copyFile'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, 'src')
const apiUrl = 'http://localhost:3003'

export default defineConfig(async () => {

  return {
    base: './',
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 2022,
      proxy: {
        '/api': {
            target: apiUrl,
            secure: false,
            changeOrigin: true
        }
      }
    },
    plugins: [
      copyFilePlugin(),
      vue({
        reactivityTransform: `${pathSrc}/**/*`,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [IduxResolver()],
        dts: path.resolve(`${pathSrc}/types/dts`, 'components.d.ts'),
      }),
      Unocss({
        presets: [presetUno()],
      }),
      Inspect(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        // todo: 先开着，等环境变量引入后生产环境不开mock
        enable: true,
        watchFiles: false,
      })
    ],
  }
})
