import React from 'react';
import { Wrapper, Button, Button2, Container } from './HamburgerMenu.styles';
import { deleteReply } from '../../apis/deleteReply';

export default function HamburgerMenu2({
  onClose,
  commentId,
  fetchCommentsOnly,
}) {
  // ✅ 댓글 삭제 함수
  const handleDelete = async () => {
    try {
      if (commentId) {
        await deleteReply(commentId);
        await fetchCommentsOnly?.(); // ✅ 댓글 목록 새로 불러오기
      } else {
        return;
      }
      onClose(); // ✅ 메뉴 닫기
    } catch (error) {
      console.error('❌ 댓글 삭제 중 오류 발생:', error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Button onClick={handleDelete}>삭제하기</Button>
        <Button2 onClick={onClose}>취소</Button2>
      </Container>
    </Wrapper>
  );
}
