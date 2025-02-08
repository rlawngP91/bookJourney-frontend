import instance from './instance'; // Axios 인스턴스 가져오기

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1NjIwMDcsImV4cCI6MTczODU2NTYwN30.jwDe5klrfF_30C_3uBz3X57rLv59TdbgM1KcS-7JSwo';

// ✅ 즐겨찾기 추가 (POST)
export const addFavorite = async (isbn) => {
  if (!isbn) {
    throw new Error('❌ ISBN이 필요합니다.');
  }

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

/**
 * 즐겨찾기에서 특정 책을 삭제하는 API
 * DELETE /favorites/{isbn}
 *
 * @param {string} isbn - 삭제할 책의 ISBN 코드
 * @param {Array<number>} favoriteIds - 삭제할 favoriteId 배열
 * @returns {Promise<string>} - 성공 메시지 반환
 */
export const deleteFavorite = async (isbn, favoriteIds) => {
  if (!isbn || typeof isbn !== 'string') {
    throw new Error('❌ 유효한 ISBN 코드를 입력하세요.');
  }

  if (!favoriteIds || !Array.isArray(favoriteIds) || favoriteIds.length === 0) {
    throw new Error('❌ 삭제할 favoriteId 목록이 필요합니다.');
  }

  try {
    const response = await instance.delete(`/favorites/${isbn}`, {
      data: {
        favoriteIds, // 요청 바디에 삭제할 favoriteId 목록 포함
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data.code === 200) {
      console.log('✅ 즐겨찾기 삭제 성공:', response.data);
      return response.data.message; // 성공 메시지 반환
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 즐겨찾기 삭제 실패:', error);

    // ✅ 서버에서 반환한 에러 코드에 따른 처리
    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message || '즐겨찾기 삭제 중 오류가 발생했습니다.';

    switch (errorCode) {
      case 11003:
        throw new Error('❌ 즐겨찾기를 삭제할 수 없습니다.');
      case 6002:
        throw new Error('❌ 유효하지 않은 ISBN 코드입니다.');
      default:
        throw new Error(errorMessage);
    }
  }
};
