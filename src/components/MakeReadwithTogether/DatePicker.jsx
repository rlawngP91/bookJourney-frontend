import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Wrapper = styled.div`
  height: 852px;
  width: 393px;
  background-color: rgba(0, 0, 0, 0.42);
  position: relative;
`;

const DatePickerContainer = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0px 16px;
  position: absolute;
  z-index: 10;
  width: 393px;
  height: 555px;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  padding-top: 60px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 45px;

  .title {
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 35px */
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7일 (일~토) */
  grid-template-rows: repeat(6, 1fr); /* ✅ 항상 6줄 유지 */
  gap: 8px;
  text-align: center;
  position: absolute;
  bottom: 130px;
  left: 15px;
  width: 362px;
  height: 300px; /* ✅ 높이 고정 */
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
    border-radius: 4px;
  }
`;

const WeekdayHeader = styled.div`
  color: #6b7280;
  font-size: 14px;
`;
const DateCell = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'inRange', // ✅ inRange 속성 제거
})`
  display: flex; /* ✅ Flexbox 사용 */
  align-items: center; /* ✅ 세로 정렬 */
  justify-content: center; /* ✅ 가로 정렬 */
  text-align: center; /* ✅ 텍스트 정렬 */
  width: 100%; /* ✅ 셀 크기 유지 */
  aspect-ratio: 1 / 1; /* ✅ 정사각형 유지 */

  padding: 0; /* ✅ 내부 여백 제거 */
  cursor: pointer;
  border-radius: 9px;
  background: ${({ selected, inRange }) =>
    selected
      ? '#6AA5F8'
      : inRange
        ? 'rgba(106, 165, 248, 0.24)'
        : 'transparent'};
  color: ${({ selected, disabled }) =>
    selected ? 'white' : disabled ? '#7D7D7D' : 'inherit'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ selected, disabled }) =>
      !selected && !disabled
        ? '#E5E7EB'
        : selected
          ? '#6AA5F8'
          : 'transparent'};
  }
`;

const ConfirmButton = styled.button`
  width: 351px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;
  position: absolute;
  bottom: 26px;
  left: 21px;

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  letter-spacing: 0.5px;

  outline: none; /* 기본 포커스 스타일 제거 */
  &:focus {
    outline: none; /* 포커스 상태에서도 기본 포커스 스타일 제거 */
  }
`;

const DatePicker = ({ onEndDateChange, onClose }) => {
  // ✅ 시작일을 오늘 날짜로 설정
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간 초기화
  const [startDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(new Date(today));
  const [tempEndDate, setTempEndDate] = useState(null);

  useEffect(() => {
    setCurrentMonth(new Date(startDate));
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    const firstDayOfWeek = firstDay.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleDateClick = (date) => {
    if (date > startDate) {
      setTempEndDate(date);
    }
  };
  const isDateSelected = (date) => {
    return (
      (startDate && date?.toDateString() === startDate.toDateString()) ||
      (tempEndDate && date?.toDateString() === tempEndDate?.toDateString())
    );
  };

  const isDateInRange = (date) => {
    return startDate && tempEndDate && date > startDate && date <= tempEndDate;
  };

  // ✅ 선택 가능 범위: 오늘 +7일 ~ 오늘 +90일
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 7); // 오늘 +7일

  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 90); // 오늘 +90일

  const isDateDisabled = (date) => {
    return !date || date < minSelectableDate || date > maxSelectableDate;
  };

  const handleConfirm = () => {
    if (tempEndDate) {
      onEndDateChange(tempEndDate);
      onClose();
    }
  };

  return (
    <Wrapper>
      <DatePickerContainer>
        <CalendarHeader>
          <ArrowButton onClick={handlePrevMonth}>
            <img src={left} />
          </ArrowButton>
          <div className="title">
            {currentMonth.getFullYear()}.
            {String(currentMonth.getMonth() + 1).padStart(2, '0')}
          </div>
          <ArrowButton onClick={handleNextMonth}>
            <img src={right} />
          </ArrowButton>
        </CalendarHeader>

        <CalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <WeekdayHeader key={day}>{day}</WeekdayHeader>
          ))}

          {getDaysInMonth(currentMonth).map((date, index) => (
            <DateCell
              key={index}
              selected={isDateSelected(date)}
              inRange={isDateInRange(date)}
              disabled={isDateDisabled(date)}
              onClick={() => date && handleDateClick(date)}
            >
              {date ? date.getDate() : ''}
            </DateCell>
          ))}
        </CalendarGrid>

        <ConfirmButton onClick={handleConfirm}>기간 선택 완료</ConfirmButton>
      </DatePickerContainer>
    </Wrapper>
  );
};

export default DatePicker;
