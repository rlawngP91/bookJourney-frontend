import React from 'react';
import PropTypes from 'prop-types'; // PropTypes를 import
import { Container } from './Room.styles';
import PeopleIcon from './peopleIcon.svg';

const Room = ({ currentPeople, maxPeople, roomTitle, bookTitle, period }) => {
  return (
    <Container>
      <div className="left-side">
        <img src={PeopleIcon} alt="사람모양" />
        <span>
          <span className="current-people">{currentPeople}</span>/
          <span className="max-people">{maxPeople}</span>
        </span>
      </div>
      <span className="room-title">{roomTitle}</span>
      <div className="right-side">
        <span className="book-title">{bookTitle}</span>
        <span className="period">{period}</span>
      </div>
    </Container>
  );
};

// PropTypes 정의
Room.propTypes = {
  currentPeople: PropTypes.number.isRequired, // 현재 인원 (숫자, 필수)
  maxPeople: PropTypes.number.isRequired, // 최대 인원 (숫자, 필수)
  roomTitle: PropTypes.string.isRequired, // 방 제목 (문자열, 필수)
  bookTitle: PropTypes.string.isRequired, // 책 제목 (문자열, 필수)
  period: PropTypes.string.isRequired, // 날짜 범위 (문자열, 필수)
};

export default Room;
