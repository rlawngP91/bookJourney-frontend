import React from 'react';
import styled from 'styled-components';
import p0 from '../../assets/collectorpopup/p0.svg';
import p1 from '../../assets/collectorpopup/p1.svg';
import p2 from '../../assets/collectorpopup/p2.svg';
import p3 from '../../assets/collectorpopup/p3.svg';
import p4 from '../../assets/collectorpopup/p4.svg';
import p5 from '../../assets/collectorpopup/p5.svg';
import p6 from '../../assets/collectorpopup/p6.svg';
import p7 from '../../assets/collectorpopup/p7.svg';
import p8 from '../../assets/collectorpopup/p8.svg';
import p9 from '../../assets/collectorpopup/p9.svg';
import p10 from '../../assets/collectorpopup/p10.svg';
import p11 from '../../assets/collectorpopup/p11.svg';
import p12 from '../../assets/collectorpopup/p12.svg';

const recordImages = {
  0: p0,
  1: p1,
  5: p2,
  10: p3,
  20: p4,
  30: p5,
  40: p6,
  50: p7,
  60: p8,
  70: p9,
  80: p10,
  90: p11,
  100: p12,
};

const Wrapper = styled.div`
  width: 393px;
  height: 852px;
  z-index: 5000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  position: fixed;
  top: 0;
  left: 0;
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

export default function CollectorPopup({ recordCount }) {
  //if (recordCount === null) return null;
  return (
    <>
      <Wrapper>
        <Box>
          <div className="container">
            <div className="back">
              <img src={recordImages[recordCount]} alt="기록 이미지" />
            </div>
            <div className="a">책산책 여정 시작</div>
            <div className="b">{recordCount}번째 기록을 달성했어요!</div>
            <div className="c">책산책과 계속 기록을 남겨보아요</div>
          </div>
        </Box>
      </Wrapper>
    </>
  );
}
