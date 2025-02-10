import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // vite.config.js 프록시 설정
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImlhdCI6MTczOTEyMDIzNywiZXhwIjoxNzM5NzI1MDM3fQ.dm4dzcdazMH9V53icP3Vr4vpY2nQtzWtYduWdBCXaU8',
  },
});

export default instance;
