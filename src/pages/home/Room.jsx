import React from 'react';
import PropTypes from 'prop-types'; // PropTypes를 import
import { useNavigate } from 'react-router-dom';
import { Container } from './Room.styles';
import PeopleIcon from './peopleIcon.svg';

const Room = ({
  roomId,
  currentPeople,
  maxPeople,
  roomTitle,
  bookTitle,
  progressStartDate,
  progressEndDate,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <Container onClick={handleClick}>
      <div className="left-side">
        <img src={PeopleIcon} alt="사람모양" />
        <span>
          <span className="current-people">{currentPeople}</span>/
          <span className="max-people">{maxPeople}</span>
        </span>
      </div>
      <span className="room-title">{roomTitle}</span>
      <div className="right-side">
        <span className="room-book-title">{bookTitle}</span>
        <span className="period">
          {progressStartDate} ~ {progressEndDate}
        </span>
      </div>
    </Container>
  );
};

// PropTypes 정의
Room.propTypes = {
  roomId: PropTypes.number.isRequired, // 방 ID (숫자, 필수)
  currentPeople: PropTypes.number.isRequired, // 현재 인원
  maxPeople: PropTypes.number.isRequired, // 최대 인원
  roomTitle: PropTypes.string.isRequired, // 방 제목
  bookTitle: PropTypes.string.isRequired, // 책 제목
  progressStartDate: PropTypes.string.isRequired, // 시작 날짜
  progressEndDate: PropTypes.string.isRequired, // 종료 날짜
};

export default Room;
