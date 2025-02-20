import instance from './instance';

export const postEnterRoom = async (roomId, password = null) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  try {
    console.log(
      `📌 방 입장 요청: POST /rooms/${roomId} ${password ? `?password=${password}` : ''}`
    );

    const endpoint = password
      ? `/rooms/${roomId}?password=${password}`
      : `/rooms/${roomId}`;
    const response = await instance.post(endpoint);

    console.log('✅ 방 입장 성공:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('❌ 방 입장 실패:', error);

    if (error.response) {
      const { code, status, message } = error.response.data;

      console.log(
        `🚨 에러 코드: ${code} | 상태 코드: ${status} | 메시지: ${message}`
      );

      switch (message) {
        case '모집 기간이 지난 방입니다.':
          throw new Error('모집기간이 종료되어 입장할 수 없습니다');
        case '모집 인원이 초과된 방입니다.':
          throw new Error('모집인원이 초과된 방입니다');
        case '이미 참여한 방입니다.':
          throw new Error('이미 참여한 방입니다');
        case '비밀번호 인증에 실패했습니다.':
          throw new Error('비밀번호가 올바르지 않습니다. 다시 시도해주세요.');
        default:
          throw new Error(
            message || '방 입장 요청 중 알 수 없는 오류가 발생했습니다.'
          );
      }
    }

    throw new Error('⛔ 네트워크 오류가 발생했습니다. 다시 시도해주세요.');
  }
};
