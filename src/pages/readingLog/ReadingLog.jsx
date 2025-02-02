import React, { useState, useEffect } from 'react';
import {
  Container,
  FilterButtons,
  FilterLeftButton,
  FilterRightButton,
  DateSelector,
  NoItems,
  FooterContainer,
} from './ReadingLog.styles';
import arrowBtn from '../../assets/downarrow2.svg';
import RoomListRead from '../../components/readingLog/RoomListRead';
import Footer from '../../components/commons/Footer/Footer';
import DateSelectorPopup from '../../components/popup/DateSelectorPopup.jsx/DateSelectorPopup';
import { mockRoomsRead } from '../../apis/mockData2';
import { fetchReadingRecords } from '../../apis/readinglogAPI';
// import { mockRoomsNotRead } from '../../apis/mockData3';
import RoomListNotRead from '../../components/readingLog/RoomListNotRead';

const ReadingLog = () => {
  const [nickname, setNickname] = useState('NickName');
  const [isRead, setIsRead] = useState(true);
  const [currentDate, setCurrentDate] = useState('2025년 2월');
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [rooms, setRooms] = useState(mockRoomsRead);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!isRead) {
        // "다 안읽었어요" 탭일 때 API 호출
        setIsLoading(true);
        const result = await fetchReadingRecords(10); // userId를 적절한 값으로 변경

        if (result.success) {
          setRooms(result.data);
          setNickname(result.nickname);
        } else {
          setError(result.error);
          setRooms([]);
        }
        setIsLoading(false);
      } else {
        // "다 읽었어요" 탭일 때는 기존 mockData 사용
        setRooms(mockRoomsRead);
      }
    };

    fetchData();
  }, [isRead]);

  const handleFilterChange = (value) => {
    setIsRead(value);
  };

  const handleDateClick = () => {
    // 여기에 날짜 팝업창 넣고
    setShowDatePopup(true);
    console.log('Date picker clicked');
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error}</div>;

  return (
    <Container>
      <h1 className="readinglog-title">{nickname} 님의 독서기록장</h1>

      <FilterButtons>
        <FilterLeftButton
          $active={isRead}
          onClick={() => handleFilterChange(true)}
        >
          다 읽었어요
        </FilterLeftButton>
        <FilterRightButton
          $active={!isRead}
          onClick={() => handleFilterChange(false)}
        >
          다 안읽었어요
        </FilterRightButton>
      </FilterButtons>

      <DateSelector onClick={handleDateClick}>
        <span>{currentDate}</span>
        <img src={arrowBtn} alt="arrowBtn" />
        <span className="roomtotal">전체 {rooms.length}</span>
      </DateSelector>

      {rooms.length === 0 ? (
        <NoItems>검색 결과가 없습니다</NoItems>
      ) : (
        <>
          {isRead ? (
            <RoomListRead rooms={rooms} />
          ) : (
            <RoomListNotRead rooms={rooms} />
          )}
        </>
      )}
      <FooterContainer>
        <Footer />
      </FooterContainer>
      {showDatePopup && (
        <DateSelectorPopup
          currentDate={currentDate}
          onClose={() => setShowDatePopup(false)}
          onSelect={(date) => {
            setCurrentDate(date);
            setShowDatePopup(false);
          }}
        />
      )}
    </Container>
  );
};

export default ReadingLog;
