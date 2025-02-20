import instance from './index'; // 기본 axios 인스턴스 가져오기
import { reissueAccessToken } from '../authApi'; // AccessToken 재발급 함수 가져오기
import { logout } from '../logoutApi';
//accessToken 포함 및 인터셉터 설정 파일

const apiClient = instance; // 기존 instance.js를 사용

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

// 응답 인터셉터 - 7006 인증 실패 시 AccessToken 재발급 처리
apiClient.interceptors.response.use(
  (response) => {
    console.log('[DEBUG] 응답 인터셉터 실행 - 정상 응답:', response);
    return response;
  },
  async (error) => {
    console.error('[DEBUG] API 응답 에러 발생:', error); // 여기 찍혀야 함

    if (!error.response) {
      console.error('[ERROR] 응답이 없습니다. 네트워크 문제 가능.');
      return Promise.reject(error);
    }

    console.log('[DEBUG] 에러 응답 전체:', error.response?.data); // 여기 찍혀야 함

    const errorCode = error.response?.data?.code; // 백엔드 응답 코드 확인
    console.log(`[DEBUG] errorCode : ${errorCode}`); // 여기 찍혀야 함

    // 최대 재시도 횟수 설정 (ex: 2번)
    //error.config._retryCount = error.config._retryCount || 0;

    if (errorCode === 7006 /* && error.config._retryCount < 1*/) {
      console.warn('[WARNING] AccessToken 만료! 재발급 시도');
      console.log('[DEBUG] AccessToken 재발급 요청 시작'); // 여기 찍혀야 함
      const refreshToken = localStorage.getItem('refreshToken');

      //error.config._retryCount += 1; // 재시도 횟수 증가

      if (!refreshToken) {
        console.warn('[WARNING] RefreshToken이 존재하지 않음. 로그아웃 처리.');
        await logout();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const newAccessToken = await reissueAccessToken(); // 새 AccessTo ken 요청

        if (newAccessToken) {
          console.log('[DEBUG] 새 AccessToken 발급 성공:', newAccessToken);
          // 새 AccessToken을 기존 요청에 추가하여 재시도
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient.request(error.config); // 기존 요청 다시 보내기
        }
      } catch (refreshError) {
        console.error(
          '[ERROR] AccessToken 재발급 실패 - 재로그인 필요:',
          refreshError
        );
        await logout();
        localStorage.removeItem('accessToken'); // 기존 AccessToken 삭제
        localStorage.removeItem('refreshToken'); // RefreshToken도 삭제
        localStorage.removeItem('userId');
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    if (errorCode === 7005) {
      console.warn('[WARNING] 유효하지 않은 토큰! 로그아웃 처리.');
      await logout();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      window.location.href = '/login';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
