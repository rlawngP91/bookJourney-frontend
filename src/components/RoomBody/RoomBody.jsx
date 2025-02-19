import React, { useState, useEffect, useRef } from 'react';
import {
  Layout,
  Wrapper,
  Container,
  Tab,
  Category,
  Filter,
  Footer,
  NoRecord,
} from './RoomBody.styles';
import downarrow2 from '../../assets/downarrow2.svg';
import send from '../../assets/send.svg';
import uparrow from '../../assets/uparrow.svg';
import reset from '../../assets/reset.svg';
import Record from './Record';
import PageRecord from './PageRecord';
import EntireRecord from './EntireRecord';
import { getPageRecords } from '../../apis/getPageRecords';
import { getEntireRecords } from '../../apis/getEntireRecords';
import CollectorPopup from '../../pages/collector/CollectorPopup';
import ToastPopup from '../../components/ToastPopup/ToastPopup';

export default function RoomBody({ roomData }) {
  const [activeTab, setActiveTab] = useState('페이지별');
  const handleTabClick = (tab) => setActiveTab(tab);

  // ✅ 기록 추가 팝업 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null); // ✅ Toast 메시지 상태 추가
  const [toastTitle, setToastTitle] = useState('');
  // ✅ CollectorPopup 상태
  const [popupRecordCount, setPopupRecordCount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ 정렬 방식 드롭다운 상태
  const [isPageOrderOpen, setIsPageOrderOpen] = useState(false);
  const [pageOrder, setPageOrder] = useState('페이지순'); // ✅ 페이지별 탭 정렬 방식

  const [isEntireOrderOpen, setIsEntireOrderOpen] = useState(false);
  const [entireOrder, setEntireOrder] = useState('최신 등록순'); // ✅ 전체 탭 정렬 방식

  // ✅ 페이지 범위 드롭다운 상태 ("페이지별" 탭 전용)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const dropdownRef = useRef(null);
  const orderRef = useRef(null);

  // ✅ 기록 데이터 상태
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const roomId = roomData?.roomId; // ✅ roomId 가져오기

  // ✅ 페이지별 정렬 방식 변경
  const handlePageSortingChange = (newSortingType) => {
    setPageOrder(newSortingType);
    setIsPageOrderOpen(false);
  };

  // ✅ 전체 정렬 방식 변경
  const handleEntireSortingChange = (newSortingType) => {
    setEntireOrder(newSortingType);
    setIsEntireOrderOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        applyPageRange();
      }
      if (orderRef.current && !orderRef.current.contains(event.target)) {
        setIsPageOrderOpen(false);
      }
      if (orderRef.current && !orderRef.current.contains(event.target)) {
        setIsEntireOrderOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [startPage, endPage]);

  // ✅ 페이지 범위 값 적용 함수
  const applyPageRange = () => {
    if (startPage && endPage) {
      console.log(`📌 적용된 페이지 범위: ${startPage} ~ ${endPage}`);
    }
    setIsDropdownOpen(false);
  };

  // ✅ 페이지 범위 리셋 함수
  const resetPageRange = () => {
    setStartPage(''); // 페이지 범위 초기화
    setEndPage('');
  };
  // ✅ 기록 데이터 불러오는 함수
  const fetchRecords = async () => {
    if (!roomId) return;
    setLoading(true);
    setError('');

    try {
      let data;
      if (activeTab === '페이지별') {
        data = await getPageRecords(roomId, pageOrder, startPage, endPage);
      } else {
        data = await getEntireRecords(roomId, entireOrder);
      }
      setRecords(data); // ✅ 최신 데이터 반영
    } catch (err) {
      console.error('❌ API 호출 오류:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 페이지 로딩 시 한 번 실행
  useEffect(() => {
    fetchRecords();
  }, [roomId, activeTab, pageOrder, entireOrder, startPage, endPage]);
  // ✅ milestone을 만족하면 CollectorPopup을 띄우기
  useEffect(() => {
    if (popupRecordCount !== null) {
      setShowPopup(true);

      // ✅ 2초 후 자동으로 닫기
      setTimeout(() => {
        setShowPopup(false);
        setPopupRecordCount(null);
      }, 3000);
    }
  }, [popupRecordCount]);

  // ✅ 팝업을 열 때 기존 토스트 메시지 초기화
  const openPopup = () => {
    setIsPopupOpen(true);
    setToastMessage(null); // ✅ 기존 토스트 메시지 초기화
    setToastTitle('');
  };

  const closePopup = () => {
    setIsPopupOpen(false);

    // ✅ Toast 메시지가 화면에서 완전히 사라진 후에 초기화
    setTimeout(() => {
      setToastMessage(null);
      setToastTitle('');
    }, 3000); // ToastPopup 애니메이션 시간과 맞춤
  };

  return (
    <Layout>
      {/* ✅ PageRecord 또는 EntireRecord가 닫힌 후 RoomBody에서 팝업 띄우기 */}
      {showPopup && popupRecordCount !== null && (
        <CollectorPopup recordCount={popupRecordCount} />
      )}

      {isPopupOpen &&
        (activeTab === '페이지별' ? (
          <PageRecord
            roomId={roomId}
            setPopupRecordCount={setPopupRecordCount}
            fetchRecords={fetchRecords}
            setToastMessage={setToastMessage}
            setToastTitle={setToastTitle}
            onClose={closePopup}
          />
        ) : (
          <EntireRecord
            roomId={roomId}
            setPopupRecordCount={setPopupRecordCount}
            fetchRecords={fetchRecords}
            setToastMessage={setToastMessage}
            setToastTitle={setToastTitle}
            onClose={closePopup}
          />
        ))}

      <Wrapper>
        <Tab>
          <Category
            $isActive={activeTab === '페이지별'}
            onClick={() => handleTabClick('페이지별')}
          >
            페이지별 기록
          </Category>
          <Category
            $isActive={activeTab === '전체'}
            onClick={() => handleTabClick('전체')}
          >
            전체 기록
          </Category>
        </Tab>
      </Wrapper>

      <Filter>
        {/* ✅ 페이지별 - 페이지 범위 선택 + 정렬 */}
        {activeTab === '페이지별' && (
          <>
            {/* ✅ 페이지 범위 드롭다운 */}
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {startPage && endPage
                  ? `${startPage}p ~ ${endPage}p`
                  : '페이지 범위'}
                <img
                  src={isDropdownOpen ? uparrow : downarrow2}
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="header">
                    <div className="o"> </div>
                    <div className="range">페이지 범위</div>
                    <img src={reset} onClick={resetPageRange} />
                  </div>
                  <div className="body">
                    <input
                      type="number"
                      className="page-input"
                      placeholder="시작"
                      value={startPage}
                      onChange={(e) => setStartPage(e.target.value)}
                    />
                    <span className="page-separator">~</span>
                    <input
                      type="number"
                      className="page-input"
                      placeholder="끝"
                      value={endPage}
                      onChange={(e) => setEndPage(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ✅ 페이지별 정렬 드롭다운 (페이지순, 최신 등록순, 답글 많은 순) */}
            <div className="dropdown" ref={orderRef}>
              <button
                className="dropdown-button"
                onClick={() => setIsPageOrderOpen(!isPageOrderOpen)}
              >
                {pageOrder}
                <img
                  src={isPageOrderOpen ? uparrow : downarrow2}
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>
              {isPageOrderOpen && (
                <div className="dropdown-menu2">
                  {['페이지순', '최신 등록순', '답글 많은 순'].map((option) => (
                    <div
                      key={option}
                      className={`dropdown-item ${pageOrder === option ? 'selected' : ''}`}
                      onClick={() => handlePageSortingChange(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* ✅ 전체 - 정렬 드롭다운 (최신 등록순, 답글 많은 순) */}
        {activeTab === '전체' && (
          <div className="dropdown" ref={orderRef}>
            <button
              className="dropdown-button"
              onClick={() => setIsEntireOrderOpen(!isEntireOrderOpen)}
            >
              {entireOrder}
              <img
                src={isEntireOrderOpen ? uparrow : downarrow2}
                alt="arrow"
                className="arrow-icon"
              />
            </button>
            {isEntireOrderOpen && (
              <div className="dropdown-menu3">
                {['최신 등록순', '답글 많은 순'].map((option) => (
                  <div
                    key={option}
                    className={`dropdown-item ${pageOrder === option ? 'selected' : ''}`}
                    onClick={() => handleEntireSortingChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Filter>

      <Container>
        {loading ? (
          <NoRecord>기록을 불러오는 중...</NoRecord>
        ) : error ? (
          <></>
        ) : records.length === 0 ? (
          <NoRecord>기록이 없습니다</NoRecord>
        ) : (
          records.map((record) => (
            <Record
              key={record.recordId}
              record={record}
              activeTab={activeTab}
              fetchRecords={fetchRecords} // ✅ fetchRecords 전달
            />
          ))
        )}
      </Container>
      {/* ✅ 기록 추가하기 버튼 */}
      <Footer>
        <div
          className="input"
          onClick={openPopup}
          style={{ cursor: 'pointer' }}
        >
          <div>기록을 입력해주세요</div>
          <img src={send} alt="send" />
        </div>
      </Footer>

      {toastMessage && (
        <ToastPopup
          title={toastTitle}
          message={toastMessage}
          onClose={() => {
            setToastMessage(null);
            setToastTitle('');
          }}
        />
      )}
    </Layout>
  );
}
