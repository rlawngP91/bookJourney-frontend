import React from 'react';
import styled from 'styled-components';
import prevIcon from '../../../assets/whiteleftarrow.svg';
import nextIcon from '../../../assets/whiterightarrow.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  height: 44px;
  flex-shrink: 0;
`;

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6aa5f8;
  border-radius: 22px;
  gap: 22.48px;
  padding: 10px 10px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &:focus {
    width: 25.517px;
    height: 25.517px;
    outline: none;
  }
`;

const MonthText = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 18.429px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.681px; /* 123.077% */
  letter-spacing: 0.709px;
`;

export function CalendarHandler({ currentDate, onPrevMonth, onNextMonth }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  return (
    <HeaderContainer>
      <MonthSelector>
        <ArrowButton onClick={onPrevMonth}>
          <img src={prevIcon} alt="이전달로 이동" />
        </ArrowButton>
        <MonthText>
          {year}년 {month}월
        </MonthText>
        <ArrowButton onClick={onNextMonth}>
          <img src={nextIcon} alt="다음달로 이동" />
        </ArrowButton>
      </MonthSelector>
    </HeaderContainer>
  );
}

export default CalendarHandler;
