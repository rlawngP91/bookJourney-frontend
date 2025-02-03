import instance from './instance'; // Axios 인스턴스 가져오기

export const getBookInfo = async () => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1NjIwMDcsImV4cCI6MTczODU2NTYwN30.jwDe5klrfF_30C_3uBz3X57rLv59TdbgM1KcS-7JSwo';
  const isbn = '9791194374084'; // ✅ 임시 하드코딩된 ISBN 값

  try {
    const response = await instance.get(`/books/info/${isbn}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.data; // ✅ API 응답에서 data 부분만 반환
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        console.error(
          `❌ 400 Bad Request: 요청이 잘못되었습니다. (ISBN: ${isbn})`
        );
        throw new Error('잘못된 요청입니다. 책 정보를 찾을 수 없습니다.');
      } else if (status === 403) {
        console.error(`❌ 403 Forbidden: 인증 오류 (토큰 만료 또는 권한 없음)`);
        throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
      }
      // 📌 알라딘 API 오류 추가 처리
      else if (data.code === 6002) {
        console.error(`❌ 6002 알라딘 API 호출 실패: ${data.message}`);
        throw new Error(
          '알라딘 API 호출에 실패했습니다. 잠시 후 다시 시도해주세요.'
        );
      } else if (data.code === 6003) {
        console.error(`❌ 6003 알라딘 API 응답 파싱 실패: ${data.message}`);
        throw new Error('알라딘 API 응답 처리 중 오류가 발생했습니다.');
      }
      // 기타 서버 오류 처리
      else {
        console.error(`❌ HTTP ${status} 오류 발생:`, data);
        throw new Error(
          `서버 오류 (${status}): ${data.message || '잠시 후 다시 시도해주세요.'}`
        );
      }
    } else {
      console.error(`❌ 서버에 연결할 수 없습니다:`, error);
      throw new Error('서버에 연결할 수 없습니다. 인터넷 상태를 확인하세요.');
    }
  }
};
