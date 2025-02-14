import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Record.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BackBtn from '../../assets/arrow.svg';
import Sort from './sort.svg';
import Line from './line.svg';
import Checked from '../bookmark/checked.svg';
import Book from './Book';
import apiClient from '../../apis/instance/apiClient';
import InfoPopup from '../../components/infoPopup/InfoPopup';
import { fetchProgressRecords } from '../../apis/progressApi';
import { deleteRecord } from '../../apis/deleteRecordApi';

const Record = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [recordList, setRecordList] = useState([]); // 진행중인 기록 리스트
  const [showSortPopup, setShowSortPopup] = useState(false); // Sort 팝업 상태
  const [showInfoPopup, setShowInfoPopup] = useState(false); // InfoPopup 상태
  const [selectedOrder, setSelectedOrder] = useState('latest-order'); // 기본 선택: 최신순
  const [selectedBook, setSelectedBook] = useState(null); // 현재 선택된 책 정보
  const [popup1Visible, setPopup1Visible] = useState(false); // #popup1 상태
  const [nickName, setNickName] = useState(''); // 로그인된 유저 닉네임
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login'); // 로그인 페이지로 리디렉트
      return;
    }

    apiClient.get('/books/best-sellers').then((response) => {
      console.log('[DEBUG] 베스트셀러 API 응답:', response.data);
      if (response.data.code === 200) {
        setNickName(response.data.data.nickName); // 닉네임 저장
      }
    });

    fetchProgressRecords(
      selectedOrder === 'latest-order' ? '최신순' : '유저진행도순'
    )
      .then((records) => {
        setRecordList(records);
      })
      .catch((error) =>
        console.error('[ERROR] 진행 기록 가져오기 실패:', error)
      );
  }, [selectedOrder]);

  const handleBackClick = () => {
    navigate('/home');
  };

  // Sort 팝업 관련
  const handleSortClick = () => {
    setShowSortPopup(true); // Sort 팝업 표시
  };

  const handleSortClose = () => {
    setShowSortPopup(false); // Sort 팝업 숨김
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order); // 선택된 정렬 기준 업데이트
    setShowSortPopup(false); // Sort 팝업 숨김
  };

  const handleBookClick = (roomId) => {
    navigate(`/rooms/${roomId}/info`);
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
    navigate(`/rooms/${selectedBook.roomId}/`);
    console.log(`[${selectedBook.bookTitle}] 정보 보기`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleLine2Click = () => {
    setPopup1Visible(true); // 팝업 띄우기기
    //console.log(`[${selectedBook.bookTitle}]를 기록에서 삭제`);
    setShowInfoPopup(false); // InfoPopup 숨김
  };

  const handleDeleteConfirmed = async () => {
    console.log(`[${selectedBook.bookTitle}]를 기록에서 삭제`);
    const success = await deleteRecord(selectedBook.roomId);
    if (success) {
      console.log(`[SUCCESS] [${selectedBook.bookTitle}] 기록 삭제 완료`);
      setRecordList((prevList) =>
        prevList.filter((book) => book.roomId !== selectedBook.roomId)
      );
      setPopup1Visible(false);
    } else {
      alert('삭제 요청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <StatusBar />
      {/* Sort 팝업의 overlay */}
      {showSortPopup && (
        <div className="overlay" onClick={handleSortClose}></div>
      )}

      {/* InfoPopup의 overlay */}
      {(showInfoPopup || popup1Visible) && (
        <div className="overlay" onClick={handleCloseInfoPopup}></div>
      )}

      {popup1Visible && ( // popup1Visible 상태에 따라 조건부 렌더링 추가
        <div id="popup1">
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

      <div className="header">
        <img
          className="back-btn"
          src={BackBtn}
          alt="뒤로가기"
          onClick={handleBackClick}
        />
        <p className="title-message">
          <span className="nickname">{nickName}</span>님의 진행중 기록
        </p>
        <p className="total">
          전체 <span className="number">{recordList.length}</span>
        </p>
        <p className="sort" onClick={handleSortClick}>
          {selectedOrder === 'latest-order' ? '최신순' : '유저진행도순'}
          <img className="sort-img" src={Sort} alt="정렬 이미지" />
        </p>
      </div>
      <div className="content">
        {recordList.map((record) => (
          <Book
            key={record.roomId}
            roomId={record.roomId}
            imageUrl={record.imageUrl}
            bookTitle={record.bookTitle}
            roomType={record.roomType}
            authorName={record.authorName}
            modifiedAt={record.modifiedAt}
            userPercentage={record.userPercentage}
            onDotsClick={() => handleDotsClick(record)}
            onClick={() => handleBookClick(record.roomId)}
          />
        ))}
      </div>

      {/* Sort 팝업 */}
      {showSortPopup && (
        <div className="popup">
          <img className="line" src={Line} alt="검정선" />
          <div
            className={`latest-order ${
              selectedOrder === 'latest-order' ? 'selected' : ''
            }`}
            onClick={() => handleOrderClick('latest-order')}
          >
            <span className="order-text">최신순</span>
            {selectedOrder === 'latest-order' && (
              <img className="check-icon" src={Checked} alt="체크" />
            )}
          </div>
          <div
            className={`progressive-order ${
              selectedOrder === 'progressive-order' ? 'selected' : ''
            }`}
            onClick={() => handleOrderClick('progressive-order')}
          >
            <span className="order-text">유저진행도순</span>
            {selectedOrder === 'progressive-order' && (
              <img className="check-icon" src={Checked} alt="체크" />
            )}
          </div>
        </div>
      )}

      {/* InfoPopup */}
      {showInfoPopup && selectedBook && (
        <InfoPopup
          onLine1Click={handleLine1Click}
          onLine2Click={handleLine2Click}
        />
      )}
    </Container>
  );
};

export default Record;
