import instance from './index'; // 기본 axios 인스턴스 가져오기
//accessToken 포함 및 인터셉터 설정 파일

const apiClient = instance; // 기존 instance.js를 사용

//const accessToken =
//  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQsImlhdCI6MTczODU1MDgwOCwiZXhwIjoxNzM4NTU0NDA4fQ.1zPjVYpRywLtNUSjm06p-wDvwkovOC1VEbu_qsJ96kE';

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token); // 토큰을 localStorage에도 저장
};

// 요청 인터셉터 - accessToken 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // 최신 토큰 가져오기
    console.log('[DEBUG] 요청 전송 전 - Authorization 헤더:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 - 인증 실패 시 로그아웃 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('토큰 만료 또는 인증 오류 발생! 로그아웃 처리.');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      window.location.href = '/login'; // 로그인 페이지로 이동
    }
    return Promise.reject(error);
  }
);

export default apiClient;
