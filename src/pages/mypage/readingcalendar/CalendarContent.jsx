import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarBookInfoPopup from './CalendarBookInfoPopup';
import bookIcon from '../../../assets/bookexample.svg';
import { mypageReadingCalendarAPI } from '../../../apis/mypageReadingCalendarAPI';

const CalendarGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
`;

const WeekDay = styled.div`
  text-align: center;
  color: #4b96f8;
  font-size: 14px;
  margin-top: 30px;
`;

const DateCell = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: ${(props) => (props.$hasImage ? 'pointer' : 'default')};
`;

const DateNumber = styled.span`
  color: #666;
  font-family: Pretendard;
  font-size: 17.531px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const BookImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

const CalendarContent = ({ selectedDate }) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const [calendarData, setCalendarData] = useState({});
  const [loading, setLoading] = useState(true);

  //mockData
  const bookDetailData = {
    7: [
      {
        image: bookIcon,
        author: '리처드 도킨스 저',
        title: '이기적 유전자',
        status: '혼자',
        period: '2024.12.30 ~ 2025.01.20',
      },
    ],
    14: [
      {
        image: bookIcon,
        author: '리처드도킨스 저',
        title: '이기적 유전자',
        status: '같이',
        period: '2024.12.30 ~ 2025.01.20',
      },
      {
        image: bookIcon,
        author: '리처드 도킨스 저',
        title: '이기적 유전자',
        status: '같이',
        period: '2024.12.30 ~ 2025.01.20',
      },
    ],
  };

  // 예시 데이터: 날짜별 책 이미지
  // const bookData = {
  //   7: bookIcon,
  //   13: bookIcon,
  //   14: bookIcon,
  //   16: bookIcon,
  //   21: bookIcon,
  //   30: bookIcon,
  // };
  useEffect(() => {
    setLoading(true);
    setCalendarData(mypageReadingCalendarAPI.fetchCalendarData(selectedDate));
    setLoading(false);
  }, [selectedDate]);

  // 선택된 월의 첫째 날과 마지막 날 계산
  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );

  const firstDayOffset = firstDayOfMonth.getDay();

  const daysInMonth = lastDayOfMonth.getDate();

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const emptyDays = Array(firstDayOffset).fill(null);
  const allDays = [...emptyDays, ...dates];

  const handleDateClick = (date) => {
    if (calendarData[date]) {
      setSelectedBooks(bookDetailData[date] || []);
      setIsPopupOpen(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CalendarGrid>
      {weekDays.map((day, index) => (
        <WeekDay key={index}>{day}</WeekDay>
      ))}

      {allDays.map((date, index) => (
        <DateCell
          key={index}
          $hasImage={calendarData[date]}
          onClick={() => date && handleDateClick(date)}
        >
          {date && (
            <>
              <DateNumber>{date}</DateNumber>
              {calendarData[date] && (
                <BookImage src={calendarData[date]} alt={`Book on ${date}`} />
              )}
            </>
          )}
        </DateCell>
      ))}
      <CalendarBookInfoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        books={selectedBooks}
      />
    </CalendarGrid>
  );
};

export default CalendarContent;
