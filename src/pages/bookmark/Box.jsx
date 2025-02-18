import React from 'react';
import { Container } from './Box.styles';
import PropTypes from 'prop-types';
import Unchecked from './unchecked.svg';
import Checked from './checked.svg';

const Box = ({
  imgSrc,
  writer,
  bookTitle,
  isDeleteMode,
  isChecked,
  onToggle,
}) => {
  const handleClick = () => {
    onToggle(bookTitle, !isChecked); // 선택 상태를 상위 컴포넌트로 전달
  };

  return (
    <Container>
      <img className="cover" src={imgSrc} alt="책 표지" />
      <div className="right">
        <div className="info-container">
          <span className="writer">{writer}</span>
          <span className="bookTitle">{bookTitle}</span>
        </div>
      </div>
      {isDeleteMode && (
        <img
          src={isChecked ? Checked : Unchecked}
          alt={isChecked ? 'Checked' : 'Unchecked'}
          className="check-icon"
          onClick={handleClick}
        />
      )}
    </Container>
  );
};

// PropTypes 설정
Box.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  isDeleteMode: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool.isRequired, // 상위에서 isChecked 상태를 받아옴
  onToggle: PropTypes.func.isRequired,
};

export default Box;
