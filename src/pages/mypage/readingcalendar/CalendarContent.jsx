import React from 'react';
import styled from 'styled-components';
import bookIcon from '../../../assets/bookexample.svg';

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

  // 예시 데이터: 날짜별 책 이미지
  const bookData = {
    7: bookIcon,
    13: bookIcon,
    14: bookIcon,
    16: bookIcon,
    21: bookIcon,
    30: bookIcon,
  };

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

  // 첫째 날의 요일 (0: 일요일, 6: 토요일)
  const firstDayOffset = firstDayOfMonth.getDay();

  // 해당 월의 총 일수
  const daysInMonth = lastDayOfMonth.getDate();

  // 날짜 배열 생성
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // 첫 날의 요일에 맞춰 빈 칸 추가
  const emptyDays = Array(firstDayOffset).fill(null);
  const allDays = [...emptyDays, ...dates];

  const handleDateClick = (date) => {
    if (bookData[date]) {
      console.log(
        `Clicked date: ${date}, Month: ${selectedDate.getMonth() + 1}, Year: ${selectedDate.getFullYear()}`
      );
    }
  };

  return (
    <CalendarGrid>
      {weekDays.map((day, index) => (
        <WeekDay key={index}>{day}</WeekDay>
      ))}

      {allDays.map((date, index) => (
        <DateCell
          key={index}
          $hasImage={bookData[date]}
          onClick={() => date && handleDateClick(date)}
        >
          {date && (
            <>
              <DateNumber>{date}</DateNumber>
              {bookData[date] && (
                <BookImage src={bookData[date]} alt={`Book on ${date}`} />
              )}
            </>
          )}
        </DateCell>
      ))}
    </CalendarGrid>
  );
};

export default CalendarContent;
