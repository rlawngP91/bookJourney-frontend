import React from 'react';
import styled from 'styled-components';
import backIcon from '../../../assets/leftarrow.svg';

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  left: 0;
  top: 0;
  align-items: center;
  background-color: #fff;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  margin-left: 26px;

  img {
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  margin: 0;
  white-space: nowrap;
`;

export default function CalendarHeader({ onBackClick }) {
  return (
    <HeaderWrapper>
      <BackButton onClick={onBackClick}>
        <img src={backIcon} alt="뒤로 가기" />
      </BackButton>
      <Title>독서 달력</Title>
    </HeaderWrapper>
  );
}
