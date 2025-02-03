import apiClient from '../apis/instance/apiClient'; // axios 인스턴스 가져오기
//로그인 API 요청 처리
export const login = async (email, password) => {
  try {
    console.log('[DEBUG] 로그인 요청 시작:', { email, password });

    const response = await apiClient.post(
      '/auth/login',
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    console.log('[DEBUG] 로그인 API 응답:', response); // 응답 전체 출력

    if (!response || !response.data) {
      throw new Error('서버 응답이 올바르지 않습니다.');
    }

    const responseData = response.data; // response.data 객체 추출
    console.log('[DEBUG] 반환할 responseData:', responseData);

    const { accessToken, refreshToken, userId } = responseData.data;

    if (!accessToken || !refreshToken || !userId) {
      throw new Error('서버 응답에서 필요한 데이터가 없습니다.');
    }

    console.log('[DEBUG] responseData.code:', responseData.code);

    if (responseData.code === 200) {
      console.log('[DEBUG] 응답 데이터 구조:', responseData.data);

      // ✅ accessToken을 API 요청 헤더에 추가 (자동 적용)
      //setAccessToken(accessToken);

      //accessToken을 localStorage 또는 sessionStorage에 저장
      //localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', userId);

      console.log('[DEBUG] refreshToken 저장 완료:', refreshToken);

      return responseData; // 성공 응답 반환
    }
  } catch (error) {
    console.error('[ERROR] 로그인 실패:', error);
    console.error('[ERROR] 응답 객체:', error.response);
    throw error;
  }
};
