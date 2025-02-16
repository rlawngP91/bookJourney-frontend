import React from 'react';
import { Wrapper, Button } from './RWFooter.styles';

export default function RWFooter({ onCreateRoom, isDisabled }) {
  return (
    <Wrapper>
      <Button onClick={onCreateRoom} disabled={isDisabled}>
        <div>방 생성하기</div>
      </Button>
    </Wrapper>
  );
}
