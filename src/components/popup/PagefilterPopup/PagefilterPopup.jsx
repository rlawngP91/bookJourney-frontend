import React from 'react';
import { Wrapper, Container } from './PagefilterPopup.styles';
import xbox from '../../../assets/xbox.svg';

export default function PagefilterPopup() {
  return (
    <>
      <Wrapper>
        <Container>
          <img src={xbox} />
          <div className="title">페이지 필터</div>
          <div className="scope">
            <div className="label">페이지 범위</div>
            <div>
              <div className="input">0</div>
              <div className="P">P</div>
            </div>
            <div className="P">~</div>
            <div>
              <div className="input">100</div>
              <div className="P">P</div>
            </div>
          </div>
          <div className="record">
            <div className="label">기록</div>
            <div>
              <div className="input">5</div>
              <div className="P">개</div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
