import React from 'react';
import PropTypes from 'prop-types'; // PropTypes import
import { Container } from './BookFrame.styles';
import Clock from './clock.svg';
import Note from './note.svg';
import Dots from './dots.svg';
const BookFrame = ({
  imageSrc,
  bookTitle,
  readType,
  writer,
  hour,
  percentage,
}) => {
  // 전달된 props 값 확인
  console.log('readType:', readType); // "같이" 또는 "혼자"가 출력되는지 확인

  return (
    <Container>
      <img src={imageSrc} alt="책1" />
      <div className="title-container">
        <span className="bookTitle">{bookTitle}</span>
        <div
          className="read-type"
          style={{
            backgroundColor: readType === '같이' ? '#6AA5F8' : '#A3C7FA',
          }}
        >
          {readType}
        </div>
      </div>
      <p className="writer-space">{writer} 저</p>
      <div className="separate-line"></div>
      <div className="bottom">
        <img className="clock" src={Clock} alt="시계" />
        <span className="hour">{hour}시간 전</span>
        <img className="note" src={Note} alt="노트" />
        <span className="percentage">{percentage}%</span>
        <img className="dots" src={Dots} alt="점3개" />
      </div>
    </Container>
  );
};

// PropTypes 정의
BookFrame.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  readType: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default BookFrame;
