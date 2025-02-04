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
// import { mockRoomsRead } from '../../apis/mockData2';
import {
  fetchReadingRecordsNotRead,
  fetchReadingRecordsRead,
} from '../../apis/readinglogAPI';
// import { mockRoomsNotRead } from '../../apis/mockData3';
import RoomListNotRead from '../../components/readingLog/RoomListNotRead';
import PostSkeleton from '../../components/loading/PostSkeleton';

const ReadingLog = () => {
  const [nickname, setNickname] = useState('NickName');
  const [isRead, setIsRead] = useState(true);
  const [currentDate, setCurrentDate] = useState('2025년 2월');
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isRead) {
        // "다 읽었어요" 탭
        setIsLoading(true);
        const result = await fetchReadingRecordsRead(10); // userId를 적절한 값으로 변경

        if (result.success) {
          setRooms(result.data);
          setNickname(result.nickname);
        } else {
          setError(result.error);
          setRooms([]);
        }
        setIsLoading(false);
      } else {
        // "다 안읽었어요" 탭
        setIsLoading(true);
        const result = await fetchReadingRecordsNotRead(10); // userId를 적절한 값으로 변경

        if (result.success) {
          setRooms(result.data);
          setNickname(result.nickname);
        } else {
          setError(result.error);
          setRooms([]);
        }
        setIsLoading(false);
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

  // 여기에 skeleton code..?
  if (isLoading) return <PostSkeleton />;
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
