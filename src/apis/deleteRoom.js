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
        alert('❌ 방장은 방에서 나갈 수 없습니다.');
        break;
      case 8001:
        alert('❌ 방을 찾을 수 없습니다.');
        break;
      case 5001:
        alert('❌ 유저를 찾을 수 없습니다.');
        break;
      case 8005:
        alert('❌ 사용자와 방의 관계가 없습니다.');
        break;
      default:
        alert(errorMessage);
    }

    throw new Error(errorMessage);
  }
};
