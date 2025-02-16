import React from 'react';
import styled from 'styled-components';
import p0 from '../../assets/collectorpopup/p0.svg';

const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  z-index: 2000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
`;

const Box = styled.div`
  position: fixed;
  bottom: -469px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  //height: 383px;
  height: 852px;
  width: 393px;

  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  background: linear-gradient(180deg, #f6f7f9 0%, #a3c7fa 124.66%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .container {
    width: 393px;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    .back {
      width: 145px;
      height: 145px;
      background-color: #fff;
      border-radius: 50%;
      position: relative;
      margin: auto;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .a {
      color: #3c75c5;
      text-align: center;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      padding: 17px 0px;
    }

    .b {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }

    .c {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      padding-bottom: 73px;
    }
  }
`;

export default function CollectorPopup() {
  return (
    <>
      <Wrapper>
        <Box>
          <div className="container">
            <div className="back">
              <img src={p0} />
            </div>
            <div className="a">책산책 여정 시작</div>
            <div className="b">n번째 기록을 달성했어요!</div>
            <div className="c">책산책과 계속 기록을 남겨보아요</div>
          </div>
        </Box>
      </Wrapper>
    </>
  );
}
