import React from 'react';
import { Wrapper, Container } from './RecordPopup.styles';
import xbox from '../../../assets/xbox.svg';

export default function RecordPopup() {
  return (
    <>
      <Wrapper>
        <Container>
          <img src={xbox} />
          <div className="title">책 제목</div>
          <div className="box">
            <div className="label">오늘은 어디까지 읽으셨나요?</div>
            <div className="page">
              <div className="nowpage">0P</div>
              <div className="slash">/</div>
              <div className="totalpage">100P</div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
