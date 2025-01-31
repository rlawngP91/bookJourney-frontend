import React, { useState } from 'react';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  margin: 16px 0;
`;

const DatePickerLabel = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: var(--sds-typography-body-size-small);
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  margin-bottom: 8px;
`;

const DateInputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const DateInput = styled.div`
  padding: 12px 16px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#FFF' : '#000')};
  background-color: ${(props) => (props.selected ? '#A3C7FA' : 'white')};
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
    props.right &&
    `
    right: 0;
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
  background: ${(props) => (props.selected ? '#4F8BFF' : 'transparent')};
  color: ${(props) =>
    props.selected ? 'white' : props.disabled ? '#D1D5DB' : 'inherit'};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background: ${(props) =>
      !props.selected && !props.disabled
        ? '#E5E7EB'
        : props.selected
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
}) => {
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

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

  const handleStartDateClick = (date) => {
    if (onStartDateChange) {
      onStartDateChange(date);
    }
    setShowStartCalendar(false);
  };

  const handleEndDateClick = (date) => {
    if (onEndDateChange) {
      onEndDateChange(date);
    }
    setShowEndCalendar(false);
  };

  const isDateSelected = (date, selectedDate) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <DatePickerContainer>
      <DatePickerLabel>{label}</DatePickerLabel>
      <DateInputsContainer>
        <DateInput
          hasValue={startDate}
          selected={showStartCalendar}
          onClick={() => {
            setShowStartCalendar(!showStartCalendar);
            setShowEndCalendar(false);
          }}
        >
          {formatDate(startDate)}
        </DateInput>
        <RangeSeparator>~</RangeSeparator>
        <DateInput
          hasValue={endDate}
          selected={showEndCalendar}
          onClick={() => {
            setShowEndCalendar(!showEndCalendar);
            setShowStartCalendar(false);
          }}
        >
          {formatDate(endDate)}
        </DateInput>
      </DateInputsContainer>

      {showStartCalendar && (
        <Calendar>
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
                selected={isDateSelected(date, startDate)}
                disabled={isDateDisabled(date)}
                onClick={() => date && handleStartDateClick(date)}
              >
                {date ? date.getDate() : ''}
              </DateCell>
            ))}
          </CalendarGrid>
        </Calendar>
      )}

      {showEndCalendar && (
        <Calendar right="true">
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
                selected={isDateSelected(date, endDate)}
                disabled={
                  isDateDisabled(date) || (startDate && date < startDate)
                }
                onClick={() => date && handleEndDateClick(date)}
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
