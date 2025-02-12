import React, { useState, useEffect } from 'react';
import { Wrapper, Popup, Container } from './InfoBody.styles';
import star from '../../assets/star.svg';
import filledstar from '../../assets/filledstar.svg';
import { addFavorite, deleteFavorite } from '../../apis/favorite';

export default function InfoBody({ roomData, bookData }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (bookData) {
      setIsFavorite(bookData.favorite);
    }
  }, [bookData]);

  const handleStarClick = async () => {
    if (!bookData || !bookData.isbn) {
      setError('ISBN 정보가 없습니다.');
      return;
    }

    if (isFavorite) {
      setShowPopup(true);
    } else {
      try {
        await addFavorite(bookData.isbn);
        setIsFavorite(true);
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
      const favoriteIds = [bookData.favoriteId];
      await deleteFavorite(bookData.isbn, favoriteIds);
      setIsFavorite(false);
      setShowPopup(false);
    } catch (err) {
      setError(err.message);
    }
  };

  // 둘 다 없는 경우에만 로딩 혹은 아무것도 렌더링하지 않음
  if (!roomData && !bookData) {
    return;
  }

  // roomData가 존재하면 roomData를 우선 렌더링
  if (roomData) {
    return (
      <Container>
        <Wrapper>
          <div className="title">
            <div className="bookname">{roomData.bookTitle || '제목 없음'}</div>
          </div>
          <div className="writer">
            {roomData.authorName || '작가 정보 없음'}
          </div>
        </Wrapper>
        {error && <div style={{ color: 'red' }}>❌ {error}</div>}
      </Container>
    );
  }

  // roomData가 없고 bookData만 있을 경우 (즐겨찾기 기능 없이)
  if (bookData) {
    return (
      <Container>
        <Wrapper>
          <div className="title">
            <div className="bookname">{bookData.bookTitle || '제목 없음'}</div>
            <img
              src={isFavorite ? filledstar : star}
              onClick={handleStarClick}
              alt="즐겨찾기 버튼"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="writer">
            {bookData.authorName || '작가 정보 없음'}
          </div>
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
      </Container>
    );
  }
}
