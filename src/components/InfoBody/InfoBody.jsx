import React, { useState } from 'react';
import { Wrapper, Popup, Container } from './InfoBody.styles';
import star from '../../assets/star.svg';
import filledstar from '../../assets/filledstar.svg';
import { addFavorite, removeFavorite } from '../../apis/favorite';

export default function InfoBody({ bookData }) {
  const [isFavorite, setIsFavorite] = useState(bookData?.favorite || false); // 초기값 설정
  const [showPopup, setShowPopup] = useState(false); // 팝업 상태
  const [error, setError] = useState('');

  const handleStarClick = async () => {
    if (!bookData || !bookData.isbn) {
      setError('ISBN 정보가 없습니다.');
      return;
    }

    if (isFavorite) {
      setShowPopup(true); // 즐겨찾기 삭제 확인 팝업
    } else {
      try {
        const updatedFavorite = await addFavorite(bookData.isbn);
        setIsFavorite(updatedFavorite);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const updatedFavorite = await removeFavorite(bookData.isbn);
      setIsFavorite(updatedFavorite);
      setShowPopup(false);
    } catch (err) {
      setError(err.message);
    }
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
              <div className="cancel" onClick={() => setShowPopup(false)}>
                취소
              </div>
              <div className="delete" onClick={handleDelete}>
                삭제
              </div>
            </div>
          </div>
        </Popup>
      )}

      {/* 에러 메시지 */}
      {error && <div style={{ color: 'red' }}>❌ {error}</div>}
    </Container>
  );
}
