import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logoIcon from '../../../assets/loadingbook.svg';
import CalendarBookInfoPopup from './CalendarBookInfoPopup';
import { mypageReadingCalendarAPI } from '../../../apis/mypageReadingCalendarAPI';

const CalendarGrid = styled.div`
  display: grid;
  /* width: 100%; */
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  padding: 0 14px;
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
  color: rgba(0, 0, 0, 0.33);
  font-family: Pretendard;
  font-size: 17.531px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const BookImagesContainer = styled.div`
  position: relative;
  width: 45.35px;
  height: 66.52px;
  object-fit: cover;
`;

const StyledBookImage = styled.img`
  position: absolute;
  left: 0;
  width: 45.35px;
  height: 66.52px;
  object-fit: cover;
  transition: all 0.3s ease;

  &:nth-child(3) {
    bottom: 17.24px;
    z-index: 1;
  }

  &:nth-child(2) {
    bottom: 8.62px;
    z-index: 2;
  }

  &:nth-child(1) {
    bottom: 0;
    z-index: 3;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const LoadingContent = styled.div`
  color: #4b96f8;
  font-style: normal;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    animation: ${float} 2s ease-in-out infinite;
    animation-delay: ${(props) => props.$delay}s;
  }
`;

const CalendarContent = ({ selectedDate }) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const [calendarData, setCalendarData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendarData = async () => {
      setLoading(true);
      try {
        const data =
          await mypageReadingCalendarAPI.fetchCalendarData(selectedDate);
        setCalendarData(data);
      } catch (error) {
        console.error('Failed to fetch calendar data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarData();
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

  const handleDateClick = async (date) => {
    if (calendarData[date]) {
      try {
        setLoading(true);
        const detailData =
          await mypageReadingCalendarAPI.fetchCalendarDataDetail(
            selectedDate,
            date
          );
        setSelectedBooks(detailData);
        console.log(selectedBooks);
        setIsPopupOpen(true);
      } catch (error) {
        console.error('Failed to fetch detail data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <LoadingContent $delay={0}>
        <img src={logoIcon} />
      </LoadingContent>
    );
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
            // <>
            //   {calendarData[date] ? (
            //     <BookImage src={calendarData[date]} alt={`Book on ${date}`} />
            //   ) : (
            //     <DateNumber>{date}</DateNumber>
            //   )}
            // </>
            <>
              {calendarData[date]?.length > 0 ? (
                <BookImagesContainer>
                  {calendarData[date].slice(0, 3).map((imageUrl, imgIndex) => (
                    <StyledBookImage
                      key={imgIndex}
                      src={imageUrl}
                      alt={`Book ${imgIndex + 1} on ${date}`}
                    />
                  ))}
                </BookImagesContainer>
              ) : (
                <DateNumber>{date}</DateNumber>
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
