import React from 'react';
import { Wrapper, Button, Button2, Container } from './HamburgerMenu.styles';

export default function HamburgerMenu({ onClose }) {
  return (
    <>
      <Wrapper>
        <Container>
          <Button>삭제하기</Button>
          <Button2 onClick={onClose}>취소</Button2>
        </Container>
      </Wrapper>
    </>
  );
}
