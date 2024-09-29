import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode, command }) => {
  // 获取当前的模式
  console.log('🚀🚀 ~ 当前阶段', command);
  console.log('🚀🚀 ~ 当前运行环境', mode);
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      svgLoader({ svgoConfig: {} }),
      compression({
        verbose: true, // 输出压缩日志
        disable: false, // 是否禁用压缩
        threshold: 10240, // 对超过10KB的文件进行压缩
        algorithm: 'gzip', // 使用gzip压缩
        ext: '.gz', // 压缩后文件的扩展名
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@v': path.resolve(__dirname, 'src/views'),
        '@c': path.resolve(__dirname, 'src/components'),
        '@u': path.resolve(__dirname, 'src/utils'),
      },
    },
    server: {
      proxy: {
        '/juejin_api/': {
          target: 'https://juejin.palxp.com/',
          changeOrigin: true,
          rewrite: (apiPath: string) => apiPath.replace(/^\/juejin_api/, ''),
        },
      },
    },
  };
});
