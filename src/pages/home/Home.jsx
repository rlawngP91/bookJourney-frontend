import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Wrapper, StyledSlider } from './Home.styles';
import Title from '../../assets/title.svg';
import Star from './star.svg';
import exit from '../../assets/exit.svg';
import Gray from './gray.svg';
import Blue from './blue.svg';
import Footer from '../../components/commons/Footer/Footer';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Room from './Room';
import Arrow from './arrow.svg';
import BookFrame from '../../components/bookFrame/BookFrame';
import InfoPopup from '../../components/infoPopup/InfoPopup';
import apiClient from '../../apis/instance/apiClient';
import LogoutPopup from '../mypage/logout/LogoutPopup';
import { fetchPopularBook } from '../../apis/popularApi';
import { fetchProgressRecords } from '../../apis/progressApi';
import { deleteRecord } from '../../apis/deleteRecordApi';
import { fetchRecruitRooms } from '../../apis/recruitRoomApi';
const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [bookCount, setBookCount] = useState(0); // 백엔드에서 가져올 값
  const [showInfoPopup, setShowInfoPopup] = useState(false); // InfoPopup 상태
  const [selectedBook, setSelectedBook] = useState(null); // 현재 선택된 책 정보
  const [popup1Visible, setPopup1Visible] = useState(false); // #popup1 상태
  const [nickName, setNickName] = useState(''); // 로그인된 유저 닉네임
  const [bestSellerList, setBestSellerList] = useState([]); // 베스트셀러 리스트
  const [selectedToggle, setSelectedToggle] = useState(0); // 토글 상태: 0, 1, 2 중 하나만 선택됨 (기본은 0)
  const [popularBook, setPopularBook] = useState(null);
  const [isbn, setIsbn] = useState('');
  const [recordList, setRecordList] = useState([]);
  const [recruitWeek, setRecruitWeek] = useState('');
  const [recruitRooms, setRecruitRooms] = useState([]);
  const sliderRef = useRef(null); // 슬라이더 참조
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const logoutPopup = () => {
    setShowLogoutPopup(true);
  };

  const handleClosePopup = () => {
    setShowLogoutPopup(false);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      window.location.href = '/login';
    }
    //주석시작. 서버에서 닉네임과 베스트셀러 리스트 가져오기
    apiClient.get('/books/best-sellers').then((response) => {
      if (response.data.code === 200) {
        setNickName(response.data.data.nickName); // 닉네임 저장
        setBestSellerList(response.data.data.bestSellerList); // 베스트셀러 리스트 저장
      }
    });

    // 인기 도서 정보 가져오기
    fetchPopularBook().then((data) => {
      if (data) {
        setPopularBook(data);
        setIsbn(data.isbn);
      }
    });

    // 진행중인 기록 가져오기
    fetchProgressRecords('최신순').then((records) => {
      setRecordList(records); // recordList 업데이트
      setBookCount(records.length); // bookCount 업데이트
    });

    fetchRecruitRooms().then((data) => {
      if (data) {
        setRecruitWeek(data.weekOfMonth); // 주차 정보 저장
        setRecruitRooms(data.roomList); // 모집 중인 방 목록 저장
      }
    });
  }, []);

  // 책 클릭 시 해당 roomId의 상세 페이지로 이동
  const handleBookFrameClick = (event, record) => {
    event.stopPropagation(); // 이벤트 버블링 방지

    const targetClass = event.target.classList; // 클릭된 요소의 클래스 확인

    if (targetClass.contains('dots')) {
      // 점 3개 클릭 시 InfoPopup 표시
      setSelectedBook(record);
      setShowInfoPopup(true);
    } else {
      // 책 표지를 클릭한 경우 상세 페이지로 이동
      navigate(`/rooms/${record.roomId}/info`);
    }
  };

  //left-side 클릭 시 상세 페이지 이동
  const handleBookClick = () => {
    if (isbn) {
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

  const handleCloseInfoPopup = () => {
    setShowInfoPopup(false); // InfoPopup 숨김
    setPopup1Visible(false); // 팝업 숨기기
    setSelectedBook(null); // 선택된 책 초기화
  };

  const handleLine1Click = () => {
    navigate(`/rooms/${selectedBook.roomId}/`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleLine2Click = () => {
    setPopup1Visible(true); // 팝업 띄우기기
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleDeleteConfirmed = async () => {
    const success = await deleteRecord(selectedBook.roomId);
    if (success) {
      setRecordList((prevList) =>
        prevList.filter((book) => book.roomId !== selectedBook.roomId)
      ); // UI에서 삭제

      setBookCount((prevCount) => prevCount - 1); //bookCount 감소
      setPopup1Visible(false);
    }
  };

  const settings = {
    dots: false, // 하단 dot 표시 제거
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 번에 표시할 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 슬라이드 속도 (3초)
    arrows: false, // 좌우 화살표 숨김
    beforeChange: (current, next) => setSelectedToggle(next), // 슬라이드 변경 시 선택된 토글 변경
  };

  // 토글 클릭 시 해당 인덱스로 이동하는 함수
  const handleToggleClick = (index) => {
    setSelectedToggle(index);
    sliderRef.current.slickGoTo(index);
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
              <div className="popup-title">진행중인 기록에서 삭제</div>
              <div className="popup-message">지금 읽고있는 책이에요.</div>
              <div className="popup-message2">
                진행중인 기록에서 삭제할까요?
              </div>
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
        <img
          src={exit}
          className="exit"
          alt="나가기"
          onClick={() => logoutPopup()}
          style={{ cursor: 'pointer' }}
        />
        {showLogoutPopup && (
          <LogoutPopup isOpen={showLogoutPopup} onClose={handleClosePopup} />
        )}
        <span className="user-name">
          {nickName}
          <span>님</span>
        </span>
        <span className="welcome">환영합니다!</span>

        {/*캐러셀 추가 */}
        <StyledSlider ref={sliderRef} {...settings}>
          {bestSellerList.length > 0 ? (
            bestSellerList.map((book, index) => (
              <div key={index} className="best-seller-container">
                <img
                  className="best-seller"
                  src={book.imageUrl}
                  alt={`베스트셀러 ${index + 1}`}
                  onClick={() => navigate(`/info/${book.isbn}`)}
                />
              </div>
            ))
          ) : (
            <p className="loading-message">&nbsp;</p> // 데이터가 없을 때 표시
          )}
        </StyledSlider>

        <span className="description">
          {bestSellerList.length > 0 && bestSellerList[selectedToggle]
            ? `*${bestSellerList[selectedToggle].genreName} 베스트셀러`
            : ''}
        </span>

        <div className="circle-container">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              src={selectedToggle === index ? Blue : Gray}
              alt={`토글${index + 1}`}
              onClick={() => handleToggleClick(index)}
            />
          ))}
        </div>
        <div className="record-container">
          <div className="progress">
            <span className="progress-title">
              진행중 기록&nbsp;&nbsp;
              <span className="recording-count">{bookCount}</span>
            </span>
            {/* 조건부 렌더링 */}
            <div
              className={`place-holder-descrip ${
                bookCount === 0 ? '' : 'hidden'
              }`}
            >
              <p className="line1">
                여기는 <span className="nickname">{nickName}</span> 님의
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
                {recordList.map((record) => (
                  <BookFrame
                    key={record.roomId}
                    imageUrl={record.imageUrl}
                    bookTitle={record.bookTitle}
                    roomType={record.roomType}
                    authorName={record.authorName}
                    modifiedAt={record.modifiedAt}
                    userPercentage={record.userPercentage}
                    onDotsClick={() => setSelectedBook(record)}
                    onClick={(event) => handleBookFrameClick(event, record)} //책 클릭 시 상세 페이지로 이동
                    active={
                      selectedBook && selectedBook.roomId === record.roomId
                    } // active prop 추가
                  />
                ))}
              </div>
            </div>
            <span className="read-count-text">읽기 횟수가 많은 책</span>
          </div>
          <div className="book-room-info">
            <div className="book-info-container" onClick={handleBookClick}>
              {popularBook ? (
                <>
                  <img
                    className="left-side"
                    src={popularBook.imageUrl}
                    alt="책표지"
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
                        {popularBook.description || '책 소개가 없습니다'}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="loading-message">인기 도서를 불러오는 중...</p> //로딩 메시지 추가
              )}
            </div>

            <div className="recruiting-room-info">
              <span className="recruiting-title">
                {recruitWeek} 모집중인 방
              </span>
              <div className="room-wrapper">
                {recruitRooms.map((room) => (
                  <Room
                    key={room.roomId}
                    roomId={room.roomId}
                    roomTitle={room.roomName}
                    bookTitle={room.bookTitle}
                    currentPeople={room.memberCount}
                    maxPeople={room.recruitCount}
                    progressStartDate={room.progressStartDate}
                    progressEndDate={room.progressEndDate}
                  />
                ))}
                <div className="footer-place-holder"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* InfoPopup */}
      {showInfoPopup && selectedBook && (
        <InfoPopup
          onLine1Click={handleLine1Click}
          onLine2Click={handleLine2Click}
          className="info-popup"
        />
      )}
      <Footer />
    </Wrapper>
  );
};

export default Home;
