import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // vite.config.js 프록시 설정
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUsImlhdCI6MTczODY0NjE3MSwiZXhwIjoxNzM4NjQ5NzcxfQ.JY4oEUGgolZn8IEvNo9ILg99lnSGo6702JeQNcvK9Zg',
  },
});

export default instance;
