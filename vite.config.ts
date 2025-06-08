import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './plugins'
import { createViteProxy } from './src/configs/proxy'
import { serviceConfig } from './src/configs/service.config'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env file based on `mode` in current working directory
  const env = loadEnv(mode, __dirname, '') as ImportMetaEnv
  const envConfig = serviceConfig[mode as ServiceEnvType]
  return {
    // base: env.VITE_BASE_URL,
    plugins: createVitePlugins(env),
    // plugins: [
    //   vue(),
    //   electron({
    //     main: {
    //       // Shortcut of `build.lib.entry`.
    //       entry: 'electron/main.ts',
    //     },
    //     preload: {
    //       // Shortcut of `build.rollupOptions.input`.
    //       // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
    //       input: path.join(__dirname, 'electron/preload.ts'),
    //     },
    //     // Ployfill the Electron and Node.js API for Renderer process.
    //     // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
    //     // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
    //     renderer: process.env.NODE_ENV === 'test'
    //       // https://github.com/electron-vite/vite-plugin-electron-renderer/issues/78#issuecomment-2053600808
    //       ? undefined
    //       : {}
    //   })
    // ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      proxy:
        env.VITE_HTTP_PROXY === 'Y' ? createViteProxy(envConfig) : undefined,
    },
    build: {
      target: 'esnext',
      reportCompressedSize: false, // Enable/disable gzip compressed size reporting
    },
    optimizeDeps: {
      include: ['echarts', 'md-editor-v3', 'quill'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    }
  }
})
