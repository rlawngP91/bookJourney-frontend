import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarHeader from './CalendarHeader';
import CalendarHandler from './CalendarHandler';
import CalendarContent from './CalendarContent';

import {
  ReadingCalendarContainer,
  CalendarHandlerWrapper,
  CalendarContentWrapper,
} from './ReadingCalendar.styles';

export default function ReadingCalendar() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login'); // 로그인 페이지로 리디렉트
      return;
    }
  });

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
    <ReadingCalendarContainer>
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
    </ReadingCalendarContainer>
  );
}
