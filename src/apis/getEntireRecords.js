import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODg1MzMxMSwiZXhwIjoxNzM5NDU4MTExfQ.-_RKG4l1VjnNU-L1gjzBe-zcjlCLq7YK1A4IXpG2ocU';

export const getEntireRecords = async (roomId, sortingType = '최신 등록순') => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    console.log('📌 API 요청: ', {
      url: `/records/${roomId}/entire`,
      sortingType: sortingType,
    });

    const response = await instance.get(`/records/${roomId}/entire`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ API 응답 데이터:', response.data);
    return response.data.data.recordList;
  } catch (error) {
    console.error('❌ 전체 기록 호출 실패:', error);
    console.error('❌ API 응답 오류:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message ||
        '전체 기록을 불러오는 중 오류가 발생했습니다.'
    );
  }
};
