import React from 'react';
import { Wrapper, HeaderWrapper } from './RWHeader.styles';
import leftarrow from '../../assets/leftarrow.svg';

export default function RWHeader() {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <img src={leftarrow} alt="뒤로가기" />
          <div>방 생성하기</div>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}
