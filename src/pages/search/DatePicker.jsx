import React, { useState } from 'react';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  margin: 16px 0;
  /* position: absolute; */
`;

const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 8px;
`;

const DatePickerLabel = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
`;

// const DatePickerReset = styled.button`
//   display: inline-flex;
//   padding: 4px 12px;
//   height: 21px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100px;
//   background-color: #6aa5f8;
//   color: #fff;
//   margin-top: 8px;
//   margin-right: 8px;
//   font-family: Pretendard;
//   font-size: 9.624px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 139.895%;
//   letter-spacing: 0.096px;
//   border: none;
//   cursor: pointer;
// `;

const DateInputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const DateInput = styled.div`
  padding: 12px 16px;
  border-radius: 8.361px;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? '#FFF' : '#000')};
  background-color: ${(props) =>
    props.$isSelected ? '#A3C7FA' : 'rgba(171, 171, 171, 0.12)'};
  flex: 1;
`;

const RangeSeparator = styled.span`
  color: #6b7280;
`;

const Calendar = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  position: absolute;
  z-index: 1;
  ${(props) =>
    props.$right &&
    `
    right: 25px;
  `}
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:hover {
    background-color: #f3f4f6;
    border-radius: 4px;
  }
`;

const WeekdayHeader = styled.div`
  color: #6b7280;
  font-size: 14px;
`;

const DateCell = styled.div`
  padding: 8px;
  cursor: pointer;
  border-radius: 25%;
  background: ${(props) => (props.$isSelected ? '#4F8BFF' : 'transparent')};
  color: ${(props) =>
    props.$isSelected ? 'white' : props.disabled ? '#D1D5DB' : 'inherit'};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background: ${(props) =>
      !props.$isSelected && !props.disabled
        ? '#E5E7EB'
        : props.$isSelected
          ? '#4F8BFF'
          : 'transparent'};
  }
`;

const DatePicker = ({
  label,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  isCalendarOpen,
  onCalendarOpen,
  onCalendarClose,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isStartDateActive, setIsStartDateActive] = useState(true);

  const formatDate = (date) => {
    if (!date) return 'yyyy.mm.dd';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

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
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const isDateSelected = (date, selectedDate) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    // const today = new Date();
    // today.setHours(0, 0, 0, 0);
    // return date < today;
  };

  // const handleReset = () => {
  //   if (onStartDateChange) onStartDateChange(null);
  //   if (onEndDateChange) onEndDateChange(null);
  // };

  const handleStartDateClick = (date) => {
    if (onStartDateChange) {
      onStartDateChange(date);
    }
    onCalendarClose();
  };

  const handleEndDateClick = (date) => {
    if (onEndDateChange) {
      onEndDateChange(date);
    }
    onCalendarClose();
  };

  const handleDateInputClick = (isStart) => {
    // 이미 해당 입력 필드의 캘린더가 열려있는 경우 닫기
    if (isCalendarOpen && isStartDateActive === isStart) {
      onCalendarClose();
    } else {
      // 다른 캘린더가 열려있거나 캘린더가 닫혀있는 경우 새로 열기
      setIsStartDateActive(isStart);
      onCalendarOpen();
    }
  };

  // const handleReset = () => {
  //   if (onStartDateChange) onStartDateChange(null);
  //   if (onEndDateChange) onEndDateChange(null);
  //   onCalendarClose();
  // };

  return (
    <DatePickerContainer>
      <DatePickerHeader>
        <DatePickerLabel>{label}</DatePickerLabel>
        {/* <DatePickerReset onClick={handleReset}>reset</DatePickerReset> */}
      </DatePickerHeader>
      <DateInputsContainer>
        <DateInput
          $date-has-value={startDate}
          $isSelected={isCalendarOpen && isStartDateActive}
          onClick={() => {
            setIsStartDateActive(true);
            onCalendarOpen();
            handleDateInputClick(true);
          }}
        >
          {formatDate(startDate)}
        </DateInput>
        <RangeSeparator>~</RangeSeparator>
        <DateInput
          $date-has-value={endDate}
          $isSelected={isCalendarOpen && !isStartDateActive}
          onClick={() => {
            setIsStartDateActive(false);
            onCalendarOpen();
            handleDateInputClick(false);
          }}
        >
          {formatDate(endDate)}
        </DateInput>
      </DateInputsContainer>

      {isCalendarOpen && (
        <Calendar $right={!isStartDateActive}>
          <CalendarHeader>
            <ArrowButton onClick={handlePrevMonth}>&lt;</ArrowButton>
            <div>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </div>
            <ArrowButton onClick={handleNextMonth}>&gt;</ArrowButton>
          </CalendarHeader>

          <CalendarGrid>
            {WEEKDAYS.map((day) => (
              <WeekdayHeader key={day}>{day}</WeekdayHeader>
            ))}

            {getDaysInMonth(currentDate).map((date, index) => (
              <DateCell
                key={index}
                $isSelected={isDateSelected(
                  date,
                  isStartDateActive ? startDate : endDate
                )}
                disabled={
                  isDateDisabled(date) ||
                  (!isStartDateActive && startDate && date < startDate) || // EndDate 선택 시 StartDate 이전 날짜 제한
                  (isStartDateActive && endDate && date > endDate) // StartDate 선택 시 EndDate 이후 날짜 제한
                }
                onClick={() =>
                  date &&
                  (isStartDateActive
                    ? handleStartDateClick(date)
                    : handleEndDateClick(date))
                }
              >
                {date ? date.getDate() : ''}
              </DateCell>
            ))}
          </CalendarGrid>
        </Calendar>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;
