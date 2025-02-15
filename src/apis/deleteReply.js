import instance from './instance'; // Axios 인스턴스 가져오기

export const deleteReply = async (commentId) => {
  if (!commentId) {
    throw new Error('❌ commentId가 필요합니다.');
  }

  try {
    console.log(`📌 댓글 삭제 요청: DELETE /comments/${commentId}`);

    const response = await instance.delete(`/comments/${commentId}`);

    console.log('✅ 댓글 삭제 성공:', response.data);
    return response.data.message; // 서버 응답 메시지 반환
  } catch (error) {
    console.error('❌ 댓글 삭제 실패:', error);

    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message || '댓글 삭제 요청 중 오류가 발생했습니다.';

    // ✅ 에러 코드에 따른 경고 메시지 처리
    switch (errorCode) {
      case 9004:
        alert('❌ 기록 작성자가 아닌 경우 삭제할 수 없습니다.');
        break;
      default:
        alert(errorMessage);
    }

    throw new Error(errorMessage);
  }
};
