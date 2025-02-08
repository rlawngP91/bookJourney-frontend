import React, { useState, useEffect } from 'react';
import { Wrapper, Popup, Container } from './InfoBody.styles';
import star from '../../assets/star.svg';
import filledstar from '../../assets/filledstar.svg';
import { addFavorite, deleteFavorite } from '../../apis/favorite';

export default function InfoBody({ bookData }) {
  const [isFavorite, setIsFavorite] = useState(false); // ✅ 초기값 false로 설정
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  // ✅ 부모 컴포넌트에서 받은 bookData.favorite 값이 변경될 때 isFavorite 업데이트
  useEffect(() => {
    if (bookData) {
      setIsFavorite(bookData.favorite);
    }
  }, [bookData]); // ✅ bookData가 변경될 때마다 실행

  const handleStarClick = async () => {
    if (!bookData || !bookData.isbn) {
      setError('ISBN 정보가 없습니다.');
      return;
    }

    if (isFavorite) {
      setShowPopup(true); // 즐겨찾기 삭제 확인 팝업 열기
    } else {
      try {
        await addFavorite(bookData.isbn);
        setIsFavorite(true); // ✅ 즐겨찾기 추가 후 상태 업데이트
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleDelete = async () => {
    if (!bookData || !bookData.isbn) {
      setError('ISBN 정보가 없습니다.');
      return;
    }

    try {
      const favoriteIds = [bookData.favoriteId]; // 삭제할 favoriteId 배열
      await deleteFavorite(bookData.isbn, favoriteIds);
      setIsFavorite(false); // ✅ 삭제 후 즐겨찾기 상태 업데이트
      setShowPopup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!bookData) {
    return <div>📖 책 정보를 불러오는 중...</div>;
  }

  return (
    <Container>
      <Wrapper>
        <div className="title">
          <div className="bookname">{bookData.bookTitle}</div>
          <img
            src={isFavorite ? filledstar : star}
            onClick={handleStarClick}
            alt="즐겨찾기 버튼"
          />
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
