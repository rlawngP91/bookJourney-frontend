import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper } from './Home.styles';

import Title from '../../assets/title.svg';
import Star from './star.svg';
import Bell from './bell.svg';
//import Book from './book.svg';
//import Book2 from './book2.svg';
import Gray from './gray.svg';
import Blue from './blue.svg';
import Footer from '../../components/commons/Footer/Footer';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Room from './Room';
import Arrow from './arrow.svg';
import BookFrame from '../../components/bookFrame/BookFrame';
import DummyBook1 from '../../assets/dummyBook1.svg';
import DummyBook2 from '../../assets/dummyBook2.svg';
import InfoPopup from '../../components/infoPopup/InfoPopup';
//import DummyBook3 from '../../assets/dummyBook3.svg';
import apiClient from '../../apis/instance/apiClient';
import { fetchPopularBook } from '../../apis/popularApi';
const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [bookCount] = useState(4); // 백엔드에서 가져올 값
  const [showInfoPopup, setShowInfoPopup] = useState(false); // InfoPopup 상태
  const [selectedBook, setSelectedBook] = useState(null); // 현재 선택된 책 정보
  const [popup1Visible, setPopup1Visible] = useState(false); // #popup1 상태
  const [nickName, setNickName] = useState(''); // 로그인된 유저 닉네임
  const [bestSellerList, setBestSellerList] = useState([]); // 베스트셀러 리스트
  const [selectedToggle, setSelectedToggle] = useState(0); // 토글 상태: 0, 1, 2 중 하나만 선택됨 (기본은 0)
  const [popularBook, setPopularBook] = useState(null);
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    console.log('[DEBUG] Home.jsx - 페이지 로드됨, API 요청 실행');
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    console.log('[DEBUG] Home.jsx - accessToken:', accessToken);
    console.log('[DEBUG] Home.jsx - refreshToken:', refreshToken);

    if (!accessToken) {
      console.warn(
        '[WARNING] accessToken이 없습니다. 로그인 페이지로 이동합니다.'
      );
      window.location.href = '/login';
    }
    //주석시작. 서버에서 닉네임과 베스트셀러 리스트 가져오기
    apiClient
      .get('/books/best-sellers')
      .then((response) => {
        console.log('[DEBUG] 베스트셀러 API 응답:', response.data);
        if (response.data.code === 200) {
          setNickName(response.data.data.nickName); // 닉네임 저장
          setBestSellerList(response.data.data.bestSellerList); // 베스트셀러 리스트 저장
        }
      })
      .catch((error) => {
        console.error('[ERROR] 베스트셀러 데이터 가져오기 실패:', error);
      });
    // 인기 도서 정보 가져오기
    fetchPopularBook()
      .then((data) => {
        if (data) {
          setPopularBook(data);
          setIsbn(data.isbn);
          console.log('[DEBUG] 인기 도서 정보:', data);
        } else {
          console.warn('[WARNING] API 응답이 비어 있음!');
        }
      })
      .catch((error) => {
        console.error('[ERROR] 인기 도서 정보 가져오기 실패:', error);
      });
  }, []);

  //left-side 클릭 시 상세 페이지 이동
  const handleBookClick = () => {
    if (isbn) {
      console.log(`[DEBUG] 클릭된 도서의 ISBN: ${isbn}`);
      navigate(`/info/${isbn}`); // isbn을 포함하여 페이지 이동
    }
  };

  const handleRecordClick = () => {
    navigate('/record');
  };

  const handleBookmarkClick = () => {
    navigate('/bookmark');
  };

  //책 찾기 클릭
  const handleSearchClick = () => {
    navigate('/search'); // '/search'로 네비게이션
  };

  // InfoPopup 관련
  const handleDotsClick = (book) => {
    setSelectedBook(book); // 선택된 책 업데이트
    setShowInfoPopup(true); // InfoPopup 표시
  };

  const handleCloseInfoPopup = () => {
    setShowInfoPopup(false); // InfoPopup 숨김
    setPopup1Visible(false); // 팝업 숨기기
    setSelectedBook(null); // 선택된 책 초기화
  };

  const handleLine1Click = () => {
    console.log(`[${selectedBook.bookTitle}] 정보 보기`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleLine2Click = () => {
    setPopup1Visible(true); // 팝업 띄우기기
    //console.log(`[${selectedBook.bookTitle}]를 기록에서 삭제`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleDeleteConfirmed = () => {
    console.log(`[${selectedBook.bookTitle}]를 기록에서 삭제`);
    setPopup1Visible(false); // 팝업 띄우기기
  };

  return (
    <Wrapper>
      <Container>
        {/* InfoPopup의 overlay */}
        {(showInfoPopup || popup1Visible) && (
          <div className="overlay" onClick={handleCloseInfoPopup}></div>
        )}
        {popup1Visible && ( // #popup1
          <div id="popup1" className="popup">
            <div className="top">
              <span className="popup-title">진행중인 기록에서 삭제</span>
              <span className="popup-message">지금 읽고있는 책이에요.</span>
              <span className="popup-message2">
                진행중인 기록에서 삭제할까요?
              </span>
            </div>
            <div className="popup-bottom">
              <div className="popup-cancel" onClick={handleCloseInfoPopup}>
                취소
              </div>
              <div className="popup-delete" onClick={handleDeleteConfirmed}>
                삭제
              </div>
            </div>
          </div>
        )}
        <img className="title" src={Title} alt="제목" />
        <img
          className="star"
          src={Star}
          alt="별 아이콘"
          onClick={handleBookmarkClick}
        />
        <img className="bell" src={Bell} alt="벨 아이콘" />
        <span className="user-name">
          {nickName}
          <span>님</span>
        </span>
        <span className="welcome">환영합니다!</span>

        {/* 베스트셀러 이미지 영역 */}
        <div className="best-seller-container">
          {bestSellerList.length > 0 && (
            <img
              className="best-seller"
              src={
                bestSellerList[selectedToggle]
                  ? bestSellerList[selectedToggle].imageUrl
                  : bestSellerList[0].imageUrl
              }
              alt="베스트셀러"
            />
          )}
        </div>
        <span className="description">*자기계발 베스트 셀러</span>
        <div className="circle-container">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              src={selectedToggle === index ? Blue : Gray}
              alt={`토글${index + 1}`}
              onClick={() => setSelectedToggle(index)}
            />
          ))}
        </div>
        <div className="record-container">
          <div className="progress">
            <span className="progress-title">
              진행중인 기록&nbsp;&nbsp;
              <span className="recording-count">{bookCount}</span>
            </span>
            {/* 조건부 렌더링 */}
            <div
              className={`place-holder-descrip ${
                bookCount === 0 ? '' : 'hidden'
              }`}
            >
              <p className="line1">
                여기는 <span className="nickname">닉네임</span> 님의
              </p>
              <p className="line2">독서 기록과 이야기가 담길</p>
              <p className="line3">특별한 공간입니다.</p>
              <p className="line4">지금 책을 찾으러 가보세요!</p>
              <BlueBtn
                className={'btn'}
                text="책 찾기"
                width={'351px'}
                onClick={handleSearchClick}
              />
            </div>
            <div
              className={`place-holder-list ${bookCount === 0 ? 'hidden' : ''}`}
            >
              <img
                className="arrow"
                src={Arrow}
                alt="화살표"
                onClick={handleRecordClick}
              />
              <div className="book-scroll-container">
                <BookFrame
                  imageUrl={DummyBook1}
                  bookTitle="밤의 여행자들"
                  modifiedAt="1시간 전"
                  userPercentage={50}
                  readType="같이읽기"
                  authorName="윤고은"
                  onDotsClick={handleDotsClick}
                />
                <BookFrame
                  imageUrl={DummyBook2}
                  bookTitle="모든 삶은 흐른다"
                  modifiedAt="1시간 전"
                  userPercentage={50}
                  readType="혼자"
                  authorName="로랑스 드빌레르"
                  onDotsClick={handleDotsClick}
                />
                <BookFrame
                  imageUrl={DummyBook2}
                  readType="혼자"
                  bookTitle="말의 품격"
                  modifiedAt="1시간 전"
                  userPercentage={50}
                  authorName="이기주"
                  onDotsClick={handleDotsClick}
                />
                <BookFrame
                  imageUrl={DummyBook1}
                  readType="같이읽기"
                  bookTitle="말의 품격"
                  modifiedAt="1시간 전"
                  userPercentage={50}
                  authorName="이기주"
                  onDotsClick={handleDotsClick}
                />
              </div>
            </div>
            <span className="read-count-text">읽기 횟수가 많은 책</span>
          </div>
          <div className="book-room-info">
            <div className="book-info-container">
              {popularBook ? (
                <>
                  <img
                    className="left-side"
                    src={popularBook.imageUrl}
                    alt="책표지"
                    onClick={handleBookClick}
                  />
                  <div className="right-side">
                    <div className="top-side">
                      <span className="book-title">
                        {popularBook.bookTitle}
                      </span>
                      <div className="reading-count">
                        {popularBook.readCount}회
                      </div>
                    </div>
                    <span className="writer-name">
                      {popularBook.authorName} 저
                    </span>
                    <div className="bottom-side">
                      <p className="introduction-letter">
                        &quot;{popularBook.description}&quot;
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="loading-message">인기 도서를 불러오는 중...</p> // ✅ 로딩 메시지 추가
              )}
            </div>

            <div className="recruiting-room-info">
              <span className="recruiting-title">1월 첫째주 모집중인 방</span>
              <div className="room-wrapper">
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <div className="footer-place-holder"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      {/* InfoPopup */}
      {showInfoPopup && selectedBook && (
        <InfoPopup
          onLine1Click={handleLine1Click}
          onLine2Click={handleLine2Click}
        />
      )}
    </Wrapper>
  );
};

export default Home;
