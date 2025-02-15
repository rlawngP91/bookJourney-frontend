import React from 'react';
import { Wrapper, Button, Button2, Container } from './HamburgerMenu.styles';
import { deleteRecord } from '../../apis/deleteRecord';
import { deleteReply } from '../../apis/deleteReply';

export default function HamburgerMenu({
  onClose,
  recordId,
  commentId,
  onDeleteSuccess,
}) {
  // ✅ 삭제 함수 (commentId가 있으면 댓글 삭제, 없으면 기록 삭제)
  const handleDelete = async () => {
    try {
      if (commentId) {
        // ✅ commentId가 존재하면 댓글 삭제 실행
        await deleteReply(commentId);
        alert('✅ 댓글이 삭제되었습니다.');
      } else if (recordId) {
        // ✅ commentId가 없고, recordId가 존재하면 기록 삭제 실행
        await deleteRecord(recordId);
        alert('✅ 기록이 삭제되었습니다.');
      } else {
        alert('❌ 삭제할 대상이 없습니다.');
        return;
      }

      onClose(); // ✅ 메뉴 닫기
      onDeleteSuccess?.(); // ✅ 삭제 성공 후 UI 갱신
    } catch (error) {
      console.error('❌ 삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Button onClick={handleDelete}>삭제하기</Button>{' '}
          {/* ✅ 삭제 기능 추가 */}
          <Button2 onClick={onClose}>취소</Button2>
        </Container>
      </Wrapper>
    </>
  );
}
