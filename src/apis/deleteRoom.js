import instance from './instance'; // Axios 인스턴스 가져오기

export const exitRoom = async (roomId) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    console.log(`📌 방 나가기 요청: DELETE /rooms/${roomId}/exit`);

    const response = await instance.delete(`/rooms/${roomId}/exit`);

    console.log('✅ 방 나가기 성공:', response.data);
    return response.data.message; // 서버 응답 메시지 반환
  } catch (error) {
    console.error('❌ 방 나가기 실패:', error);

    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message || '방 나가기 요청 중 오류가 발생했습니다.';

    // ✅ 에러 코드에 따른 경고 메시지 처리
    switch (errorCode) {
      case 8007:
        break;
      case 8001:
        break;
      case 5001:
        break;
      case 8005:
        break;
      default:
    }

    throw new Error(errorMessage);
  }
};
