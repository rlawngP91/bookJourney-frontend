import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODkxOTQwNCwiZXhwIjoxNzM5NTI0MjA0fQ.MxRvVeY3ChrPulDS1uSYDH78fSTT2HafXuD5sWp1kN8';

/**
 * 페이지 기록 저장 API
 * @param {number} roomId - 방 ID
 * @param {number} [currentPage] - 페이지 번호 (선택값)
 * @param {string} content - 기록 내용
 * @param {string} [recordTitle] - 기록 제목 (선택값)
 * @returns {Promise<object>} - 성공 시 { recordId, recordTitle, recordPage, content } 반환
 */
export const postRecord = async (
  roomId,
  currentPage = null,
  content,
  recordTitle = ''
) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  if (!content.trim()) {
    throw new Error('❌ 기록 내용을 입력하세요.');
  }

  try {
    // ✅ 서버가 알아서 처리할 수 있도록 동적으로 데이터 구성
    const requestData = {
      recordType: '페이지 기록', // ✅ 기록 유형
      content, // ✅ 기록 내용
    };

    if (currentPage !== null) requestData.recordPage = currentPage; // ✅ 페이지 번호 추가 (선택)
    if (recordTitle) requestData.recordTitle = recordTitle; // ✅ 기록 제목 추가 (선택)

    console.log('📤 API 요청 데이터:', requestData); // ✅ 요청 데이터 확인용 로그

    const response = await instance.post(`/records/${roomId}`, requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // ✅ 헤더에 유저 토큰 추가
      },
    });

    if (response.data.code === 200) {
      console.log('✅ 페이지 기록 저장 성공:', response.data);
      return {
        recordId: response.data.data.recordId,
        recordTitle: response.data.data.recordTitle || null, // ✅ 응답 포함
        recordPage: response.data.data.recordPage || null, // ✅ 응답 포함
        content: response.data.data.content,
      };
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 페이지 기록 저장 실패:', error);
    throw new Error(error.response?.data?.message || '서버 오류 발생');
  }
};
