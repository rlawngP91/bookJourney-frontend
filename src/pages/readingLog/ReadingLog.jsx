import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  FilterButtons,
  FilterLeftButton,
  FilterRightButton,
  DateSelector,
  NoItems,
  FooterContainer,
} from './ReadingLog.styles';

import arrowBtn from '../../assets/downarrow2.svg';
import RoomListRead from '../../components/readingLog/RoomListRead';
import RoomListNotRead from '../../components/readingLog/RoomListNotRead';
import DateSelectorPopup from '../../components/popup/DateSelectorPopup.jsx/DateSelectorPopup';
import LoadingPage from '../../components/loading/loadingPage';
import Footer from '../../components/commons/Footer/Footer';

import {
  fetchReadingRecordsNotRead,
  fetchReadingRecordsRead,
} from '../../apis/readinglogAPI';

const ReadingLog = () => {
  const navigate = useNavigate();
  const [isRead, setIsRead] = useState(true);
  const [currentDate, setCurrentDate] = useState('2025년 2월');
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [signupDate, setSignupDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login'); // 로그인 페이지로 리디렉트
      return;
    }

    const fetchData = async () => {
      if (isRead) {
        // "다 읽었어요" 탭
        setIsLoading(true);
        const result = await fetchReadingRecordsRead(currentDate);

        if (result.success) {
          setRooms(result.data);
          setSignupDate(result.signupDate);
        } else {
          setRooms([]);
        }
        setIsLoading(false);
      } else {
        // "다 안읽었어요" 탭
        setIsLoading(true);
        const result = await fetchReadingRecordsNotRead(currentDate);

        if (result.success) {
          setRooms(result.data);
          setSignupDate(result.signupDate);
        } else {
          setRooms([]);
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isRead, currentDate]);

  const handleFilterChange = (value) => {
    setIsRead(value);
  };

  const handleDateClick = () => {
    setShowDatePopup(true);
  };

  if (isLoading) return <LoadingPage />;

  console.log(signupDate);
  return (
    <Container>
      <HeaderContainer>
        <span className="readinglog-title">독서기록장</span>
      </HeaderContainer>

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
        <div className="roomcontainer">
          <span className="room">전체</span>
          <span className="roomtotal">{rooms.length}</span>
        </div>
        <div className="datecontainer">
          <span className="date">{currentDate}</span>
          <img src={arrowBtn} alt="arrowBtn" />
        </div>
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
          signupDate={signupDate}
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
