import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODkxOTQwNCwiZXhwIjoxNzM5NTI0MjA0fQ.MxRvVeY3ChrPulDS1uSYDH78fSTT2HafXuD5sWp1kN8';

/**
 * 댓글 작성 API
 * POST /comments
 *
 * @param {string} content - 댓글 내용
 * @param {string} userToken - 유저 인증 토큰 (기본값: 하드코딩된 토큰)
 * @returns {Promise<number>} - 성공 시 생성된 commentId 반환
 */
export const postReply = async (recordId, content) => {
  if (!recordId) {
    throw new Error('❌ recordId가 필요합니다.');
  }

  try {
    const response = await instance.post(
      `/comments/${recordId}`,
      { content },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, // ✅ 헤더에 유저 토큰 추가
        },
      }
    );

    if (response.data.code === 200) {
      console.log('✅ 댓글 작성 성공:', response.data);
      return response.data.data.commentId; // 성공 시 commentId 반환
    } else {
      throw new Error(response.data.message || '알 수 없는 오류 발생');
    }
  } catch (error) {
    console.error('❌ 댓글 작성 실패:', error);

    // ✅ 서버에서 반환한 에러 코드에 따른 처리
    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message || '댓글 작성 중 오류가 발생했습니다.';

    switch (errorCode) {
      case 5001:
        throw new Error('❌ 유저를 찾을 수 없습니다.');
      case 8005:
        throw new Error('❌ 방에 참여해있지 않습니다.');
      case 8009:
        throw new Error('❌ 기간이 지난 방에는 기록을 남길 수 없습니다.');
      default:
        throw new Error(errorMessage);
    }
  }
};
