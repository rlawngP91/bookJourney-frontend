import React from 'react';
import { Wrapper, Button, Button2, Container } from './HamburgerMenu.styles';
import { deleteRecord } from '../../apis/deleteRecord';

export default function HamburgerMenu({ onClose, recordId, fetchRecords }) {
  const handleDelete = async () => {
    try {
      if (recordId) {
        await deleteRecord(recordId);
        onClose(); // ✅ 메뉴 닫기
        await fetchRecords?.(); // ✅ 전체 기록 다시 불러오기
      } else {
        alert('❌ 삭제할 대상이 없습니다.');
        return;
      }
    } catch (error) {
      console.error('❌ 삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Button onClick={handleDelete}>삭제하기</Button>
          <Button2 onClick={onClose}>취소</Button2>
        </Container>
      </Wrapper>
    </>
  );
}
