import instance from './instance';

export const getPasswordInfo = async (roomId) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    const response = await instance.get(`/rooms/search/${roomId}`);

    console.log('✅ 방 정보 가져오기 성공:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('❌ 방 정보 가져오기 실패:', error);

    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message ||
      '방 정보를 가져오는 중 오류가 발생했습니다.';

    // ✅ 에러 코드에 따른 경고 메시지 처리
    switch (errorCode) {
      case 8001:
        alert('❌ 방을 찾을 수 없습니다.');
        break;
      case 8012:
        if (errorMessage.includes('호스트를 찾을 수 없습니다.')) {
          alert('❌ 호스트를 찾을 수 없습니다.');
        } else if (errorMessage.includes('공개 방입니다.')) {
          alert('✅ 이 방은 공개 방입니다. 비밀번호가 필요하지 않습니다.');
        } else if (errorMessage.includes('혼자읽기 방입니다.')) {
          alert('✅ 이 방은 혼자 읽기 방입니다.');
        }
        break;
      default:
        alert(errorMessage);
    }

    throw new Error(errorMessage);
  }
};
