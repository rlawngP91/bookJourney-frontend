import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODkxOTQwNCwiZXhwIjoxNzM5NTI0MjA0fQ.MxRvVeY3ChrPulDS1uSYDH78fSTT2HafXuD5sWp1kN8';

export const getCurrentPage = async (roomId) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/rooms/${roomId}/pages`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data.code === 200) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 페이지 정보 가져오기 실패:', error);

    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message ||
      '페이지 정보를 불러오는 중 오류가 발생했습니다.';

    switch (errorCode) {
      case 8001:
        throw new Error('❌ 방을 찾을 수 없습니다.');
      case 5001:
        throw new Error('❌ 유저를 찾을 수 없습니다.');
      default:
        throw new Error(errorMessage);
    }
  }
};
