import React from 'react';
import { Wrapper, HeaderWrapper } from './RWHeader.styles';
import leftarrow from '../../assets/leftarrow.svg';
import { useNavigate } from 'react-router-dom';

export default function RWHeader() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <img
            src={leftarrow}
            alt="뒤로가기"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <div>방 생성하기</div>
        </HeaderWrapper>
      </Wrapper>
    </>
  );
}
