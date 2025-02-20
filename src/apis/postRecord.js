import instance from './instance';

export const postRecord = async (roomId, recordPage, content, recordTitle) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  if (!content.trim()) {
    throw new Error('내용을 입력해주세요');
  }

  // ✅ 기록 유형 및 요청 데이터 동적 생성
  let requestData = { content };

  if (recordPage) {
    requestData = {
      ...requestData,
      recordType: '페이지 기록',
      recordPage,
    };
  } else if (recordTitle) {
    requestData = {
      ...requestData,
      recordType: '전체 기록',
      recordTitle,
    };
  } else {
    throw new Error('❌ recordPage 또는 recordTitle 중 하나가 필요합니다.');
  }

  try {
    const response = await instance.post(`/records/${roomId}`, requestData, {});

    if (response.data.code === 200) {
      console.log('✅ 기록 저장 성공:', response.data);
      return response.data.data;
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 기록 저장 실패:', error);
    throw new Error(error.response?.data?.message || '서버 오류 발생');
  }
};
