import instance from './instance'; // Axios 인스턴스 가져오기

export const getInnerRoomInfo = async (roomId) => {
  if (!roomId) {
    console.error('❌ roomId가 제공되지 않았습니다.');
    throw new Error('roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/rooms/${roomId}/info`);

    return response.data.data;
  } catch (error) {
    if (error.response) {
      const { code, message } = error.response.data;

      if (code === 3000) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      }
    }

    console.error(`❌ 서버 오류 발생`);
    throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
};
