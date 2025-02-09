import instance from './instance';

export const getPageRecords = async (
  roomId,
  sortingType = '페이지순',
  pageStart,
  pageEnd
) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/records/${roomId}/page`, {
      params: {
        sortingType: sortingType,
        ...(pageStart !== undefined && { pageStart }),
        ...(pageEnd !== undefined && { pageEnd }),
      },
    });

    return response.data.data.recordList;
  } catch (error) {
    console.error('roomId:', roomId);
    console.error('❌ 페이지별 기록 호출 실패:', error);
    console.error('❌ API 응답 오류:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message ||
        '페이지별 기록을 불러오는 중 오류가 발생했습니다.'
    );
  }
};
