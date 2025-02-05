import instance from './instance';
//import { SortingType } from './sortingTypes'; // ✅ Enum 가져오기

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1NjIwMDcsImV4cCI6MTczODU2NTYwN30.jwDe5klrfF_30C_3uBz3X57rLv59TdbgM1KcS-7JSwo';

/**
 * 유저의 기록(Record) 데이터 가져오기
 * @param {number} roomId - 방 ID
 * @param {number} userId - 유저 ID
 * @param {string} sortingType - 정렬 방식 (SortingType Enum 값 사용)
 * @returns {Promise<Array>} - 유저 기록 리스트 반환
 */
export const getUserRecords = async (roomId, userId) => {
  if (!roomId || !userId) {
    console.error('❌ roomId 또는 userId가 제공되지 않았습니다.');
    throw new Error('roomId와 userId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/records/${roomId}/entire/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.data.recordList; // ✅ 기록 리스트 반환
  } catch (error) {
    if (error.response) {
      const { code, message } = error.response.data;

      if (code === 5001) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      } else if (code === 9001) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      } else if (code === 9003) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      }
    }

    console.error(`❌ 서버 오류 발생`);
    throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
};
