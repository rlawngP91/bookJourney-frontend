import React, { useState } from 'react';
import { Wrapper, Popup, Container } from './InfoBody.styles';
import star from '../../assets/star.svg';
import filledstar from '../../assets/filledstar.svg';

export default function InfoBody() {
  const [isFavorite, setIsFavorite] = useState(false); // 즐겨찾기 상태
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태

  const handleStarClick = () => {
    if (isFavorite) {
      // 즐겨찾기 상태일 때는 팝업 표시
      setShowPopup(true);
    } else {
      // 즐겨찾기가 아닐 때는 상태 변경
      setIsFavorite(true);
    }
  };

  const handleCancel = () => {
    setShowPopup(false); // 팝업 닫기
  };

  const handleDelete = () => {
    setIsFavorite(false); // 즐겨찾기 해제
    setShowPopup(false); // 팝업 닫기
  };

  return (
    <Container>
      <Wrapper>
        <div className="title">
          <div className="bookname">밤의 여행자들</div>
          <img src={isFavorite ? filledstar : star} onClick={handleStarClick} />
        </div>
        <div className="writer">윤고은 저</div>
      </Wrapper>

      {showPopup && (
        <Popup>
          <div>즐겨찾기 삭제</div>
          <div className="message">즐겨찾기 책에서 삭제할까요?</div>
          <div className="buttons">
            <button className="cancel" onClick={handleCancel}>
              취소
            </button>
            <button className="delete" onClick={handleDelete}>
              삭제
            </button>
          </div>
        </Popup>
      )}
    </Container>
  );
}
