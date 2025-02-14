import instance from './instance';

export const postEnterRoom = async (roomId, password) => {
  if (!roomId || !password) {
    throw new Error('❌ roomId와 password가 필요합니다.');
  }

  try {
    console.log(`📌 방 입장 요청: POST /rooms/${roomId}?password=${password}`);

    const response = await instance.post(
      `/rooms/${roomId}?password=${password}`
    );

    console.log('✅ 방 입장 성공:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('❌ 방 입장 실패:', error);

    // ✅ 서버에서 받은 에러 메시지를 그대로 던지기
    const errorMessage =
      error.response?.data?.message || '방 입장 요청 중 오류가 발생했습니다.';

    throw new Error(errorMessage); // ❌ 여기서 메시지를 그대로 전달
  }
};
