import instance from './instance';

export const getEntireRecords = async (
  roomId,
  sortingType = '최신 등록 순'
) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/records/${roomId}/entire`, {
      params: {
        sortingType: sortingType,
      },
    });

    return response.data.data.recordList;
  } catch (error) {
    console.error('❌ 전체 기록 호출 실패:', error);
    throw new Error(
      error.response?.data?.message ||
        '전체 기록을 불러오는 중 오류가 발생했습니다.'
    );
  }
};
