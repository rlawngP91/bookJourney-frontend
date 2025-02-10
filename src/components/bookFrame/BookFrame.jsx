import React from 'react';
import PropTypes from 'prop-types'; // PropTypes import
import { Container } from './BookFrame.styles';
import Clock from './clock.svg';
import Note from './note.svg';
import Dots from './dots.svg';
const BookFrame = ({
  imageUrl,
  bookTitle,
  readType,
  authorName,
  modifiedAt,
  userPercentage,
  onDotsClick,
}) => {
  // 전달된 props 값 확인
  //console.log('readType:', readType); // "같이" 또는 "혼자"가 출력되는지 확인

  const displayReadType =
    readType === '같이읽기'
      ? '같이'
      : readType === '혼자읽기'
        ? '혼자'
        : readType;

  return (
    <Container>
      <img src={imageUrl} alt="책1" />
      <div className="title-container">
        <span className="bookTitle">{bookTitle}</span>
        <div
          className="read-type"
          style={{
            backgroundColor: readType === '같이읽기' ? '#6AA5F8' : '#A3C7FA',
          }}
        >
          {displayReadType}
        </div>
      </div>
      <p className="writer-space">{authorName} 저</p>
      <div className="separate-line"></div>
      <div className="bottom">
        <img className="clock" src={Clock} alt="시계" />
        <span className="hour">{modifiedAt}</span>
        <img className="note" src={Note} alt="노트" />
        <span className="percentage">{userPercentage}%</span>
        <img
          className="dots"
          src={Dots}
          alt="점3개"
          onClick={() =>
            onDotsClick({
              bookTitle,
              readType,
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
BookFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  readType: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired,
  userPercentage: PropTypes.number.isRequired,
  onDotsClick: PropTypes.func.isRequired,
};

export default BookFrame;
