import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import { formatEnv } from './src/utils/formatEnv';
// vite.config.ts
// import Components from 'unplugin-vue-components/vite'
// import ViteComponents, {
//   AntDesignVueResolver,
// } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
// console.log(process);
export interface ENVTYPE{
  VITE_PORT?: number,
  VITE_PROXY_URL?: string
}
export default defineConfig(({command, mode}) => {
  const root = process.cwd();
  const ENV = loadEnv(mode, root);
  const viteEnv = formatEnv<ENVTYPE>(ENV);
  console.log(viteEnv);
  return {
    server: {
      port: viteEnv.VITE_PORT,
      proxy: {
        // 选项写法 
        '/api/': {
          // target: 'https://www.fastmock.site',
          target: 'https://theme.orvillex.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
          // rewrite: (path) => path
        },
        '/mock/': {
          // target: 'https://www.fastmock.site',
          target: viteEnv.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mock/, '')
          // rewrite: (path) => path
        },
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          lessOptions: {
            // additionalData: '@import "./src/styles/green-theme.less"'
  
          },
          modifyVars: {
            hack: `true;@import "${path.resolve('./src/styles/green-theme.less')}";`,
            // additionalData:  `@import "${path.resolve('./src/styles/green-theme.less')}";`
          },
        }
      }
    },
    plugins: [
      vue(),
      viteCompression()
      // your plugin installation
      // Components({
      //   resolvers: [
      //     AntDesignVueResolver({
      //       importStyle: 'less'
      //     }),
      //   ],
      //   dts: true,
      //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      // })
    ],
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@/hooks": path.resolve("src/hooks"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // manualChunks: {
          //   lodash: ['lodash']
          // },
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        }
      }
    }
  }
})
