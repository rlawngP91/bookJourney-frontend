import apiClient from '../apis/instance/apiClient'; // Axios 인스턴스 가져오기

// 회원가입 API 요청
export const signUp = async (
  email,
  password,
  nickName,
  imageUrl,
  favoriteGenres
) => {
  try {
    const requestBody = {
      email,
      password,
      nickName,
      imageUrl,
      favoriteGenres: favoriteGenres.map((genre) => ({
        genreName: genre.genreName,
      })), // genre 배열을 API 형식에 맞게 변환
    };

    console.log(
      '[DEBUG] 회원가입 요청 데이터:',
      JSON.stringify(requestBody, null, 2)
    ); // JSON 형식으로 보기 쉽게 출력

    const response = await apiClient.post('/users/signup', requestBody, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('[DEBUG] 회원가입 API 응답:', response);

    if (!response || !response.data) {
      throw new Error('서버 응답이 올바르지 않습니다.');
    }

    const responseData = response.data;

    if (responseData.code === 200) {
      console.log('[DEBUG] 회원가입 성공:', responseData.data);
      return responseData.data; // userId, accessToken, refreshToken 반환
    } else {
      throw new Error(responseData.message || '회원가입 실패');
    }
  } catch (error) {
    console.error('[ERROR] 회원가입 실패:', error);
    throw new Error(error.response?.data?.message || '회원가입 중 오류 발생');
  }
};
