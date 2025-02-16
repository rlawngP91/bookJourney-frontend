import React from 'react';
import PropTypes from 'prop-types'; // PropTypes import
import { Container } from './Book.styles';
import Clock from './clock.svg';
import Note from './note.svg';
import Dots from './dots.svg';
const Book = ({
  imageUrl,
  bookTitle,
  roomType,
  authorName,
  modifiedAt,
  userPercentage,
  onDotsClick,
  onClick,
}) => {
  const displayReadType =
    roomType === '같이읽기'
      ? '같이'
      : roomType === '혼자읽기'
        ? '혼자'
        : roomType;

  return (
    <Container>
      <img className="book-img" src={imageUrl} alt="책1" onClick={onClick} />
      <div className="title-container">
        <span className="bookTitle">{bookTitle}</span>
        <div
          className="read-type"
          style={{
            backgroundColor: roomType === '같이읽기' ? '#6AA5F8' : '#A3C7FA',
          }}
        >
          {displayReadType}
        </div>
      </div>
      <p className="writer-space">{authorName}</p>
      <div className="separate-line"></div>
      <div className="bottom">
        <img className="clock" src={Clock} alt="시계" />
        <span className="hour">{modifiedAt}</span>
        <img className="note" src={Note} alt="노트" />
        <span className="percentage">{Math.floor(userPercentage)} %</span>
        <img
          className="dots"
          src={Dots}
          alt="점3개"
          onClick={() =>
            onDotsClick({
              bookTitle,
              roomType,
              authorName,
              modifiedAt,
              userPercentage,
            })
          }
        />
      </div>
    </Container>
  );
};

// PropTypes 정의
Book.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  modifiedAt: PropTypes.number.isRequired,
  userPercentage: PropTypes.number.isRequired,
  onDotsClick: PropTypes.func.isRequired,
};

export default Book;
