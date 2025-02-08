import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODkxOTQwNCwiZXhwIjoxNzM5NTI0MjA0fQ.MxRvVeY3ChrPulDS1uSYDH78fSTT2HafXuD5sWp1kN8';

export const getEntireRecords = async (roomId, sortingType = '페이지순') => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/records/${roomId}/entire`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
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
