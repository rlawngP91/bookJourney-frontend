import instance from './index';
import { reissueAccessToken } from '../authApi';
import { logout } from '../logoutApi';

// accessToken 포함 및 인터셉터 설정 파일
const apiClient = instance;

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

// 요청 인터셉터 - accessToken 자동 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    console.log('[DEBUG] 요청 전송 전 - Authorization 헤더:', token);

    if (config.url === '/auth/reissue') {
      delete config.headers.Authorization;
    } else if (token) {
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
    console.error('[DEBUG] API 응답 에러 발생:', error);

    if (!error.response) {
      console.error('[ERROR] 응답이 없습니다. 네트워크 문제 가능.');
      return Promise.reject(error);
    }

    console.log('[DEBUG] 에러 응답 전체:', error.response?.data);

    const errorCode = error.response?.data?.code;
    console.log(`[DEBUG] errorCode : ${errorCode}`);

    // accessToken 만료 (7006)
    if (errorCode === 7006) {
      console.warn('[WARNING] AccessToken 만료감지! 재발급 시도');

      // 요청의 Body에 refreshToken이 포함되어 있으면 → RefreshToken도 만료된 경우 (즉, 재발급 실패)
      if (error.config.data && JSON.parse(error.config.data)?.refreshToken) {
        console.warn(
          '[WARNING] RefreshToken이 포함된 요청에서 7006 수신 → 로그아웃'
        );
        handleLogout();
        alert('토큰이 만료되어 로그아웃됩니다!');
        return Promise.reject(error);
      }

      console.log('[DEBUG] AccessToken 재발급 요청 시작');

      try {
        const newAccessToken = await reissueAccessToken();

        if (newAccessToken) {
          console.log('[DEBUG] 새 AccessToken 발급 성공:', newAccessToken);
          setAccessToken(newAccessToken);

          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient.request(error.config);
        }
      } catch (refreshError) {
        console.error('[ERROR] AccessToken 재발급 실패:', refreshError);

        // refreshToken도 만료된 경우 (7006 응답을 다시 받음)
        if (refreshError.response?.data?.code === 7006) {
          console.warn('[WARNING] RefreshToken도 만료됨. 로그아웃 처리.');
          handleLogout();
        }

        return Promise.reject(refreshError);
      }
    }

    // 유효하지 않은 토큰 (7005)
    if (errorCode === 7005) {
      console.warn('[WARNING] 유효하지 않은 토큰! 로그아웃 처리.');
      handleLogout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

const handleLogout = async () => {
  await logout();
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
  window.location.href = '/login';
};

export default apiClient;
