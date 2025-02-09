import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // vite.config.js 프록시 설정
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczOTA4Nzc4MCwiZXhwIjoxNzM5NjkyNTgwfQ.JIYHIBYGnKVhoRwTNUPI6ymx3GyXkoF-zTb1mnoAyjI',
  },
});

export default instance;
