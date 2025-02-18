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

      //accessToken을 API 요청 헤더에 추가 (자동 적용)
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

// AccessToken 재발급 API 요청 함수
export const reissueAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken'); // 로컬 스토리지에서 refreshToken 가져오기
    console.log('[DEBUG] 저장된 refreshToken:', refreshToken);
    if (!refreshToken) {
      console.warn('[WARNING] RefreshToken이 없습니다. 다시 로그인하세요.');
      throw new Error('RefreshToken이 존재하지 않습니다.');
    }

    console.log(
      '[DEBUG] 보내는 요청 데이터:',
      JSON.stringify({ refreshToken })
    );

    const response = await apiClient.post(
      '/auth/reissue',
      { refreshToken },
      {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    console.log('[DEBUG] AccessToken 재발급 API 응답:', response);

    console.log(
      `[DEBUG] response.data.accessToken = ${response.data.data.accessToken}`
    );
    console.log(`[DEBUG] response.data.status = ${response.data.status}`);
    console.log(`[DEBUG] response.data.code = ${response.data.code}`);

    if (response.data.code === 200) {
      const newAccessToken = response.data.data.accessToken; // 백엔드 명세서에 맞게 필드명 확인
      console.log('[DEBUG] 새로운 AccessToken:', newAccessToken);

      localStorage.setItem('accessToken', newAccessToken); // 새 AccessToken 저장

      return newAccessToken; // 새 AccessToken 반환
    } else {
      console.warn('[WARNING] AccessToken 재발급 실패:', response.data.message);
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('[ERROR] AccessToken 재발급 실패:', error);
    throw error;
  }
};
