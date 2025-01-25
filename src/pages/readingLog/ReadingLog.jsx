import React, { useState } from 'react';
import {
  Container,
  FilterButton,
  DateSelector,
  NoItems,
  FooterContainer,
} from './ReadingLog.styles';
import arrowBtn from '../../assets/downarrow2.svg';
import RoomList from '../../components/readingLog/RoomList';
import Footer from '../../components/commons/Footer/Footer';
import { mockRooms } from '../../apis/mockData2';

const ReadingLog = ({ nickname }) => {
  const [isRead, setIsRead] = useState(true);
  const [currentDate] = useState('2025년 1월');
  const [rooms] = useState(mockRooms);

  const handleFilterChange = (value) => {
    setIsRead(value);
  };

  const handleDateClick = () => {
    // 여기에 날짜 팝업창 넣고
    console.log('Date picker clicked');
  };

  return (
    <Container>
      <h1 className="readinglog-title">{nickname} 님의 독서기록장</h1>

      <div className="filter-buttons">
        <FilterButton $active={isRead} onClick={() => handleFilterChange(true)}>
          다 읽었어요
        </FilterButton>
        <FilterButton
          $active={!isRead}
          onClick={() => handleFilterChange(false)}
        >
          다 안읽었어요
        </FilterButton>
      </div>

      <DateSelector onClick={handleDateClick}>
        <span>{currentDate}</span>
        <img src={arrowBtn} alt="arrowBtn" />
        <span className="roomtotal">전체 {rooms.length}</span>
      </DateSelector>

      {rooms.length === 0 ? (
        <NoItems>검색 결과가 없습니다</NoItems>
      ) : (
        <RoomList rooms={rooms} />
      )}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default ReadingLog;
