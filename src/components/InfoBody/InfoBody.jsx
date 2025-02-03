import React, { useState } from 'react';
import { Wrapper, Popup, Container } from './InfoBody.styles';
import star from '../../assets/star.svg';
import filledstar from '../../assets/filledstar.svg';

export default function InfoBody({ bookData }) {
  const [isFavorite, setIsFavorite] = useState(false); // 즐겨찾기 상태
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태

  const handleStarClick = () => {
    if (isFavorite === true) {
      setShowPopup(true); // 팝업 열기
    } else {
      setIsFavorite(true); // 즐겨찾기 활성화
    }
  };

  const handleCancel = () => {
    setShowPopup(false); // 팝업 닫기
  };

  const handleDelete = () => {
    setIsFavorite(false); // 즐겨찾기 해제
    setShowPopup(false); // 팝업 닫기
  };

  /*const handleOutsideClick = (e) => {
    // 팝업 외부 클릭 시만 팝업 닫기
    if (!e.target.closest('.popup')) {
      setShowPopup(false);
    }
      onClick={handleOutsideClick}
  };*/

  if (!bookData) {
    return <div>📖 책 정보를 불러오는 중...</div>;
  }

  return (
    <Container>
      <Wrapper>
        <div className="title">
          <div className="bookname">{bookData.bookTitle}</div>
          <img src={isFavorite ? filledstar : star} onClick={handleStarClick} />
        </div>
        <div className="writer">{bookData.authorName}</div>
      </Wrapper>

      {showPopup && (
        <Popup className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="box">
            <div className="title">즐겨찾기 삭제</div>
            <div className="message">즐겨찾기 책에서 삭제할까요?</div>
            <div className="buttons">
              <div className="cancel" onClick={handleCancel}>
                취소
              </div>
              <div className="delete" onClick={handleDelete}>
                삭제
              </div>
            </div>
          </div>
        </Popup>
      )}
    </Container>
  );
}
