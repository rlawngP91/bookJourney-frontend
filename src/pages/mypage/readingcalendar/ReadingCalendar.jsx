import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarHeader from './CalendarHeader';
import CalendarHandler from './CalendarHandler';
import CalendarContent from './CalendarContent';

import {
  ReadinCalendarContainer,
  CalendarHandlerWrapper,
  CalendarContentWrapper,
} from './ReadingCalendar.styles';

export default function ReadingCalendar() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <ReadinCalendarContainer>
      <CalendarHeader onBackClick={() => navigate(-1)} />
      <CalendarHandlerWrapper>
        <CalendarHandler
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      </CalendarHandlerWrapper>
      <CalendarContentWrapper>
        <CalendarContent selectedDate={currentDate} />
      </CalendarContentWrapper>
    </ReadinCalendarContainer>
  );
}
