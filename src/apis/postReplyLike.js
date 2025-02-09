import instance from './instance';

/**
 * 댓글 좋아요 API
 * POST /comments/{commentId}/likes
 *
 * @param {number} commentId - 좋아요를 누를 댓글 ID
 * @returns {Promise<boolean>} - 성공 시 true (liked), 실패 시 false 반환
 */
export const postReplyLike = async (commentId) => {
  if (!commentId) throw new Error('❌ commentId가 필요합니다.');

  try {
    const response = await instance.post(`/comments/${commentId}/likes`);
    return response.data.data.liked; // true 또는 false 반환
  } catch (error) {
    console.error('❌ 좋아요 요청 실패:', error);
    throw new Error(
      error.response?.data?.message || '좋아요 요청 중 오류가 발생했습니다.'
    );
  }
};
