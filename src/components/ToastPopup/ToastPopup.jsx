import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import toastlogo from '../../assets/toastlogo.svg';

// ✅ 애니메이션 정의
const slideDown = keyframes`
  0% {
    transform: translateY(-100px); /* 화면 위에서 시작 */
    opacity: 0;
  }
  100% {
    transform: translateY(0); /* 원래 위치로 */
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px); /* 약간 위로 올라가면서 사라짐 */
  }
`;

export const Wrapper = styled.div`
  width: 393px;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: fixed;
  top: 30px;
  width: 343px;
  height: 78px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 1.892px 1.892px 0px rgba(0, 0, 0, 0.25);
  animation: ${(props) => (props.$isVisible ? slideDown : fadeOut)} 0.5s
    ease-in-out;

  .box {
    display: flex;
    flex-direction: row;
    gap: 22px;
    align-items: center;
    padding-left: 25px;
    box-sizing: border-box;
    padding-top: 15px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      .title {
        color: #000;
        font-family: Pretendard;
        font-size: 11.087px;
        font-style: normal;
        font-weight: 700;
      }
      .content {
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 10.394px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
`;

export default function ToastPopup({ isVisible, onClose }) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000); // 3초 후 자동 사라짐
    }
  }, [isVisible, onClose]);

  return (
    <Wrapper>
      {show && (
        <Container $isVisible={show}>
          <div className="box">
            <img src={toastlogo} alt="토스트 아이콘" />
            <div className="text">
              <div className="title">제목</div>
              <div className="content">내용내용내용내용내용내용내용내용</div>
            </div>
          </div>
        </Container>
      )}
    </Wrapper>
  );
}
