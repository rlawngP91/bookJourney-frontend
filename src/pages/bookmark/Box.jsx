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
  onClick,
}) => {
  const handleBoxClick = () => {
    if (isDeleteMode) {
      // 만약 삭제 모드이면, 체크 아이콘을 클릭했을 때만 onToggle이 실행되도록 처리
      // (이미 check-icon에 onClick이 있으므로 여기서는 아무것도 하지 않음)
      return;
    } else {
      // 삭제 모드가 아니라면, Box 전체 클릭 시 onClick 호출
      onClick && onClick();
    }
  };

  // 기존 체크 아이콘 클릭 핸들러 (삭제 모드일 때)
  const handleCheckClick = (e) => {
    e.stopPropagation(); // 부모 클릭 이벤트 방지
    onToggle(bookTitle, !isChecked);
  };

  return (
    <Container onClick={handleBoxClick}>
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
          onClick={handleCheckClick}
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
  onClick: PropTypes.func,
};

export default Box;
