import React from 'react';
import { Wrapper, HeaderWrapper } from './RWHeader.styles';
import leftarrow from '../../assets/leftarrow.svg';

export default function RWHeader() {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <img src={leftarrow} alt="뒤로가기" />
          <div>같이읽기 방 만들기</div>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}
