import apiClient from '../apis/instance/apiClient'; // axios 인스턴스 가져오기
import { logout } from './logoutApi';
//로그인 API 요청 처리
export const login = async (email, password) => {
  try {
    const response = await apiClient.post(
      '/auth/login',
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!response || !response.data) {
      throw new Error('서버 응답이 올바르지 않습니다.');
    }

    const responseData = response.data; // response.data 객체 추출

    const { accessToken, refreshToken, userId } = responseData.data;

    if (!accessToken || !refreshToken || !userId) {
      throw new Error('서버 응답에서 필요한 데이터가 없습니다.');
    }

    if (responseData.code === 200) {
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', userId);
      return responseData; // 성공 응답 반환
    }
  } catch (error) {
    console.error('[ERROR] 로그인 실패:', error);
    console.error('[ERROR] 응답 객체:', error.response);
    throw error;
  }
};

// AccessToken 재발급 API 요청 함수
export const reissueAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      handleLogout();
      throw new Error('RefreshToken이 존재하지 않습니다.');
    }

    const response = await apiClient.post(
      '/auth/reissue',
      { refreshToken },
      {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.data.code === 200) {
      const newAccessToken = response.data.data.accessToken;

      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('[ERROR] AccessToken 재발급 실패:', error);
    //이 아래것도 주석해도 되는지 확인해보자
    // refreshToken도 만료된 경우 (7006 응답을 받음)
    /*
    if (error.response?.data?.code === 7006) {
      console.warn('[WARNING] RefreshToken 만료됨. 로그아웃 처리.');
      handleLogout();
    }
      */

    throw error;
  }
};

const handleLogout = async () => {
  await logout();
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
  window.location.href = '/login';
};
