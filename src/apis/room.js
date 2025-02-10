import instance from './instance'; // axios 인스턴스 경로 설정

export const createRoom = async (roomData) => {
  try {
    const response = await instance.post('/rooms', roomData);

    console.log('✅ 방 생성 성공:', response.data);
    return response.data.data; // roomId 반환
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        switch (data.code) {
          case 6002:
            console.error(`❌ 6002: 알라딘 API 호출 실패.`);
            throw new Error(
              '도서 정보를 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.'
            );

          case 6003:
            console.error(`❌ 6003: 알라딘 API 응답 파싱 실패.`);
            throw new Error(
              '도서 정보 응답을 처리하는 데 문제가 발생했습니다. 관리자에게 문의해주세요.'
            );

          case 8009:
            console.error(`❌ 8009: 기간은 필수 입력값입니다.`);
            throw new Error(
              '같이 읽기 방을 생성하려면 기간을 반드시 입력해야 합니다.'
            );

          case 8010:
            console.error(`❌ 8010: 비공개 방 비밀번호 누락.`);
            throw new Error(
              '비공개 방을 생성하려면 비밀번호를 입력해야 합니다.'
            );

          case 8011:
            console.error(`❌ 8011: 이미 존재하는 혼자 읽기 방.`);
            throw new Error(
              '해당 책으로 생성된 혼자 읽기 방이 이미 존재합니다.'
            );

          default:
            console.error(`❌ 알 수 없는 오류 발생 (코드: ${data.code})`, data);
            throw new Error(
              `서버 오류 (${data.code}): ${data.message || '잠시 후 다시 시도해주세요.'}`
            );
        }
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
