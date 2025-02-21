import apiClient from '../apis/instance/apiClient'; // axios 인스턴스 가져오기

export const logout = async () => {
  try {
    const response = await apiClient.post('/auth/logout');

    if (response.data.code === 200) {
      // localStorage에서 사용자 정보 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');

      return true;
    } else {
      console.warn('[WARNING] 로그아웃 응답 코드:', response.data.code);
      return false;
    }
  } catch (error) {
    console.error('[ERROR] 로그아웃 실패:', error);
    return false;
  }
};
