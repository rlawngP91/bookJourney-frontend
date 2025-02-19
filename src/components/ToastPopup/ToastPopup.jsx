import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import toastlogo from '../../assets/toastlogo.svg';

const slideDown = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
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
    transform: translateY(50px);
  }
`;

export const Wrapper = styled.div`
  width: 393px;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  z-index: 5000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: fixed;
  top: 30px;
  width: 343px;
  height: 78px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 1.892px 1.892px 0px rgba(0, 0, 0, 0.25);
  opacity: 0;

  // ✅ show 상태에 따라 애니메이션 적용
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${slideDown} 1s ease-out forwards;
        `
      : css`
          animation: ${fadeOut} 1 ease-in forwards;
        `}

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

export default function ToastPopup({ title, message, onClose }) {
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTitle, setToastTitle] = useState(null);

  useEffect(() => {
    if (message) {
      setToastTitle(title);
      setToastMessage(message);
      setShow(true);
      console.log('🔥 ToastPopup 등장:', message);

      const timer = setTimeout(() => {
        setShow(false);
        console.log('🛑 ToastPopup 사라짐');
        setTimeout(onClose, 500); // 🔥 애니메이션이 끝난 후 onClose 실행
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, title]);

  return (
    show && (
      <Wrapper>
        <Container $isVisible={show}>
          <div className="box">
            <img src={toastlogo} alt="토스트 아이콘" />
            <div className="text">
              <div className="title">{toastTitle || 'Error'}</div>
              <div className="content">{toastMessage}</div>
            </div>
          </div>
        </Container>
      </Wrapper>
    )
  );
}
