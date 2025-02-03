import instance from './instance'; // axios 인스턴스 경로 설정

export const createRoom = async (roomData) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1NjIwMDcsImV4cCI6MTczODU2NTYwN30.jwDe5klrfF_30C_3uBz3X57rLv59TdbgM1KcS-7JSwo';

  try {
    const response = await instance.post('/rooms', roomData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ 방 생성 성공:', response.data);
    return response.data.data; // roomId 반환
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        console.error(`❌ 400 Bad Request: 요청이 잘못되었습니다.`);
        throw new Error('잘못된 요청입니다. 입력값을 확인해주세요.');
      } else if (status === 401) {
        console.error(`❌ 401 Unauthorized: 인증 실패.`);
        throw new Error('로그인이 필요합니다. 다시 시도해주세요.');
      } else if (status === 403) {
        console.error(`❌ 403 Forbidden: 권한 없음.`);
        throw new Error('방을 생성할 권한이 없습니다.');
      } else {
        console.error(`❌ HTTP ${status} 오류 발생:`, data);
        throw new Error(
          `서버 오류 (${status}): ${data.message || '잠시 후 다시 시도해주세요.'}`
        );
      }
    } else {
      console.error(`❌ 서버에 연결할 수 없습니다:`, error);
      throw new Error('서버에 연결할 수 없습니다. 인터넷 상태를 확인하세요.');
    }
  }
};
