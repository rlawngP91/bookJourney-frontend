import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  position: absolute;
  z-index: 10;
  width: 300px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  text-align: center;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;

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
  padding: 8px;
  cursor: pointer;
  border-radius: 25%;
  background: ${({ selected, inRange }) =>
    selected ? '#4F8BFF' : inRange ? '#A3C7FA' : 'transparent'};
  color: ${({ selected, disabled }) =>
    selected ? 'white' : disabled ? '#D1D5DB' : 'inherit'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ selected, disabled }) =>
      !selected && !disabled
        ? '#E5E7EB'
        : selected
          ? '#4F8BFF'
          : 'transparent'};
  }
`;

const ConfirmButton = styled.button`
  background: #4f8bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
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

  const isDateDisabled = (date) => {
    return date < startDate;
  };

  const handleConfirm = () => {
    if (tempEndDate) {
      onEndDateChange(tempEndDate);
      onClose();
    }
  };

  return (
    <DatePickerContainer>
      <CalendarHeader>
        <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
        <div>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </div>
        <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
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
  );
};

export default DatePicker;
