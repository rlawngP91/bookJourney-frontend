import instance from './instance';

export const postCurrentPage = async (roomId, currentPage) => {
  if (!roomId) {
    throw new Error('❌ roomId가 필요합니다.');
  }

  if (!currentPage || isNaN(currentPage) || currentPage < 1) {
    throw new Error('❌ 유효한 페이지 번호를 입력하세요.');
  }

  try {
    const response = await instance.post(
      `/records/${roomId}/pages?currentPage=${currentPage}`,
      {}
    );

    if (response.data.code === 200) {
      console.log('✅ 페이지 업데이트 성공:', response.data);
      return response.data.data.currentPage;
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 페이지 업데이트 실패:', error);

    // ✅ 서버에서 반환한 에러 코드에 따른 처리
    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message ||
      '페이지 업데이트 중 오류가 발생했습니다.';

    switch (errorCode) {
      case 8001:
        throw new Error('❌ 방을 찾을 수 없습니다.');
      case 5001:
        throw new Error('❌ 유저를 찾을 수 없습니다.');
      case 8005:
        throw new Error('❌ 방에 참여해있지 않습니다.');
      case 8009:
        throw new Error('❌ 기간이 지난 방에는 페이지를 입력할 수 없습니다.');
      case 9002:
        throw new Error('❌ 유효하지 않은 페이지 범위입니다.');
      default:
        throw new Error(errorMessage);
    }
  }
};
