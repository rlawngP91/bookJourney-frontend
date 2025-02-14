import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://book-journey.click' // 배포 환경
    : '/api', // 개발 환경
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImlhdCI6MTczOTEyMDIzNywiZXhwIjoxNzM5NzI1MDM3fQ.dm4dzcdazMH9V53icP3Vr4vpY2nQtzWtYduWdBCXaU8',
  },
});

export default instance;
