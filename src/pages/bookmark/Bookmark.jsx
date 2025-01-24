import React, { useState } from 'react';
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
    {
      imgSrc: BookCover,
      writer: '리처드 도킨스',
      bookTitle: '이기적 유전자3',
      isChecked: false,
    },
    {
      imgSrc: BookCover,
      writer: '리처드 도킨스',
      bookTitle: '이기적 유전자4',
      isChecked: false,
    },
    {
      imgSrc: BookCover,
      writer: '리처드 도킨스',
      bookTitle: '이기적 유전자5',
      isChecked: false,
    },
  ]);

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

  return (
    <Container>
      <StatusBar />
      <img className="arrow" src={Arrow} alt="뒤로가기" />
      <span className="bookmark-book">즐겨찾기 책</span>
      <div className="content-container">
        <div className="place-holder"></div>
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
        <div className="remove-btn" onClick={handleRemoveBooks}>
          선택 삭제
        </div>
      </div>
    </Container>
  );
};

export default Bookmark;
