import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://ec2-13-48-61-179.eu-north-1.compute.amazonaws.com', // API 서버 주소
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 제거하고 요청 보내기
      },
    },
  },
});
