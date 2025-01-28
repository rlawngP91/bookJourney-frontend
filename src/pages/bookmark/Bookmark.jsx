import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Bookmark.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import Arrow from '../../assets/arrow.svg';
import Box from './Box';
import BookCover from '../../assets/bookmarkDummy.svg';

const Bookmark = () => {
  const [isDeleteMode, setIsDeleteMode] = useState(false); // 삭제 모드 상태
  const [books, setBooks] = useState([
    {
      imgSrc: BookCover,
      writer: '리처드 도킨스',
      bookTitle: '이기적 유전자',
      isChecked: false,
    },
    {
      imgSrc: BookCover,
      writer: '리처드 도킨스',
      bookTitle: '이기적 유전자2',
      isChecked: false,
    },
  ]);
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleBackClick = () => {
    navigate('/home');
  };

  const [popup1Visible, setPopup1Visible] = useState(false); // #popup1 상태
  const [popup2Visible, setPopup2Visible] = useState(false); // #popup2 상태

  // "삭제" 버튼 클릭 시 삭제 모드로 진입
  const enterDeleteMode = () => {
    setIsDeleteMode(true); // 삭제 모드 활성화
  };

  // "전체삭제" 버튼 클릭 시 모든 책 선택
  const selectAllBooks = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => ({ ...book, isChecked: true }))
    );
  };

  // 선택 상태 토글
  const handleToggleBook = (bookTitle, isChecked) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.bookTitle === bookTitle ? { ...book, isChecked } : book
      )
    );
  };

  // 삭제 모드 취소 시 초기화
  const handleCancelDeleteMode = () => {
    setBooks(
      (prevBooks) => prevBooks.map((book) => ({ ...book, isChecked: false })) // 선택 상태 초기화
    );
    setIsDeleteMode(false); // 삭제 모드 비활성화
  };

  // 선택 삭제 버튼 클릭 처리
  const handleRemoveBooks = () => {
    setBooks((prevBooks) => prevBooks.filter((book) => !book.isChecked));
    setIsDeleteMode(false); // 삭제 모드 비활성화
  };

  // 팝업1에서 삭제 버튼 클릭 시 동작
  const handleDeleteConfirmed = () => {
    handleRemoveBooks();
    setPopup1Visible(false); // 팝업 숨기기
  };

  // 선택 삭제 버튼 클릭 시 팝업 띄우기
  const handleRemoveClick = () => {
    const selectedCount = books.filter((book) => book.isChecked).length;
    if (selectedCount === 0) {
      setPopup2Visible(true); // #popup2 띄우기
    } else {
      setPopup1Visible(true); // #popup1 띄우기
    }
  };

  // 팝업 닫기
  const closePopup = () => {
    setPopup1Visible(false);
    setPopup2Visible(false);
  };

  return (
    <Container>
      <StatusBar />

      {/* 배경 오버레이 */}
      {(popup1Visible || popup2Visible) && <div className="overlay"></div>}

      <img
        className="arrow"
        src={Arrow}
        alt="뒤로가기"
        onClick={handleBackClick}
      />
      <span className="bookmark-book">즐겨찾기 책</span>
      <div className="content-container">
        <div className="place-holder"></div>
        {popup1Visible && ( // #popup1
          <div id="popup1" className="popup">
            <div className="top">
              <span className="popup-title">즐겨찾기 삭제</span>
              <span className="popup-message">즐겨찾기 책에서 삭제할까요?</span>
            </div>
            <div className="bottom">
              <div className="popup-cancel" onClick={closePopup}>
                취소
              </div>
              <div className="popup-delete" onClick={handleDeleteConfirmed}>
                삭제
              </div>
            </div>
          </div>
        )}
        {popup2Visible && ( // #popup2
          <div id="popup2" className="popup">
            <div className="top">
              <span className="popup-message2">선택한 책이 없습니다.</span>
            </div>
            <div className="bottom">
              <div className="popup-ok" onClick={closePopup}>
                확인
              </div>
            </div>
          </div>
        )}
        {!isDeleteMode ? (
          <span className="delete" onClick={enterDeleteMode}>
            삭제
          </span>
        ) : (
          <span onClick={selectAllBooks} className="select-all-btn">
            전체삭제
          </span>
        )}
        {books.length === 0 ? ( // 조건부 렌더링 추가
          <span className="no-bookmark">즐겨찾기 책이 없습니다.</span>
        ) : (
          books.map((book) => (
            <Box
              key={book.bookTitle}
              imgSrc={book.imgSrc}
              writer={book.writer}
              bookTitle={book.bookTitle}
              isDeleteMode={isDeleteMode}
              isChecked={book.isChecked} // 상위 상태 전달
              onToggle={handleToggleBook}
            />
          ))
        )}
      </div>
      <div
        className="btn-container"
        style={{ visibility: isDeleteMode ? 'visible' : 'hidden' }}
      >
        <div className="cancel-btn" onClick={handleCancelDeleteMode}>
          취소
        </div>
        <div className="remove-btn" onClick={handleRemoveClick}>
          선택 삭제
        </div>
      </div>
    </Container>
  );
};

export default Bookmark;
