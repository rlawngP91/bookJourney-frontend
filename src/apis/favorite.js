import instance from './instance'; // Axios 인스턴스 가져오기

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1NjIwMDcsImV4cCI6MTczODU2NTYwN30.jwDe5klrfF_30C_3uBz3X57rLv59TdbgM1KcS-7JSwo';
const isbn = '9791141977726'; // ✅ 임시 하드코딩된 ISBN 값
// ✅ 즐겨찾기 추가 (POST)
export const addFavorite = async () => {
  try {
    const response = await instance.post(
      `/favorites/${isbn}`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    console.log(`✅ 즐겨찾기 추가 성공: ${JSON.stringify(response.data)}`);
    return response.data.data.favorite; // 서버 응답에서 favorite 상태 반환
  } catch (error) {
    console.error(`❌ 즐겨찾기 추가 실패:`, error);

    if (error.response) {
      const { status, data } = error.response;
      console.error(`❌ HTTP ${status} 오류 발생:`, data);

      if (status === 400) {
        if (data.code === 6002) {
          throw new Error('알라딘 API 호출에 실패했습니다.');
        } else if (data.code === 10001) {
          throw new Error('이미 즐겨찾기한 책입니다.');
        }
      }

      throw new Error(
        `서버 오류 (${status}): ${data.message || '잠시 후 다시 시도해주세요.'}`
      );
    } else {
      console.error(`❌ 서버에 연결할 수 없습니다:`, error);
      throw new Error('서버에 연결할 수 없습니다.');
    }
  }
};

// ✅ 즐겨찾기 삭제 (DELETE)
export const removeFavorite = async () => {
  try {
    const response = await instance.delete(`/favorites/${isbn}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log(`✅ 즐겨찾기 삭제 성공: ${JSON.stringify(response.data)}`);
    return response.data.data.favorite; // 서버 응답에서 favorite 상태 반환
  } catch (error) {
    console.error(`❌ 즐겨찾기 삭제 실패:`, error);
    throw new Error('즐겨찾기 삭제 실패: ' + error.message);
  }
};
