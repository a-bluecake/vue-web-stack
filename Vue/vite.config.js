import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base:"./",
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {       // 只要请求路径以/api开头
        target: 'http://localhost:5771', // 就转发到这个后端地址
        changeOrigin: true
      }
    }
  },
})

