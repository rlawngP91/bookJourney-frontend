import React from 'react';
import { Wrapper, Button } from './RWFooter.styles';

export default function RWFooter({ onCreateRoom }) {
  return (
    <Wrapper>
      <Button onClick={onCreateRoom}>
        <div>방 생성하기</div>
      </Button>
    </Wrapper>
  );
}
