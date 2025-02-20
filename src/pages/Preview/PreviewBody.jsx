import React, { useState, useEffect, useRef } from 'react';
import downarrow2 from '../../assets/downarrow2.svg';
import uparrow from '../../assets/uparrow.svg';
import reset from '../../assets/reset.svg';
import Record from '../../components/RoomBody/Record';
import PageRecord from '../../components/RoomBody/PageRecord';
import EntireRecord from '../../components/RoomBody/EntireRecord';
import { getPageRecords } from '../../apis/getPageRecords';
import { getEntireRecords } from '../../apis/getEntireRecords';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 393px;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px 0px 25px;
`;

const Container = styled.div`
  width: 393px;
  height: 520px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px;
  /* ✅ 내용이 height를 넘어가면 스크롤 */
  overflow-y: auto;

  /* ✅ 스크롤바 투명하게 만들기 */
  &::-webkit-scrollbar {
    width: 0; /* 크기 0으로 설정 (투명) */
    height: 0;
  }

  /* ✅ Firefox에서 스크롤 숨기기 */
  scrollbar-width: none;
`;

const NoRecord = styled.div`
  width: 393px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px;
  margin-left: -25px;

  color: #a3a3a3;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 453.5px;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 77px;
`;

const Category = styled.div`
  padding-top: 30px;
  margin: auto;
  height: 23px;
  width: 133px;
  border: none;
  outline: none;
  border-bottom: ${({ $isActive }) =>
    $isActive ? '3px solid #6aa5f8' : 'none'};
  background: #f6f7f9;
  color: ${({ $isActive }) => ($isActive ? '#6aa5f8' : '#B3B3B3')};
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 393px;
  height: 60px;
  gap: 10px;
  padding: 0px 25px;
  box-sizing: border-box;

  .dropdown {
    position: relative;

    img {
      width: 14px;
      height: 14px;
    }
  }

  .dropdown-button {
    height: 25px;
    width: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    background: white;
    font-size: 14px;
    cursor: pointer;

    border-radius: 9px;
    border: 1px solid #000;
  }

  .arrow-icon {
    width: 12px;
    height: 12px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    border: none;
    width: 133px;
    height: 95px;
    flex-shrink: 0;
    border-radius: 9px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .o {
      width: 14px; //img랑 똑같이 가로주면됨
    }
    .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
    }

    .body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 7px;
      padding-top: 14px;
    }
  }

  .dropdown-menu2 {
    position: absolute;
    flex-direction: column;
    width: 115px;
    height: 111px;

    box-sizing: border-box;
    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    top: 100%;
    left: 0;
    background-color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    z-index: 10;

    color: #a3a3a3;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.447px;
    font-size: 14px;

    .dropdown-item.selected {
      color: #000;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.447px;
    }
  }

  .range {
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.447px;
  }

  .page-input {
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 9px;
    text-align: center;
    font-size: 14px;
    outline: none;

    width: 41.25px;
    height: 33px;
    flex-shrink: 0;
    background-color: #f6f3f3;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    line-height: 140%; /* 15.4px */
  }

  .p,
  .page-separator {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 11.917px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.683px */
  }

  .dropdown-item {
    cursor: pointer;
    font-size: 14px;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  .dropdown-menu3 {
    position: absolute;
    flex-direction: column;
    width: 115px;
    height: 80px;

    box-sizing: border-box;
    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    top: 100%;
    left: 0;
    background-color: white;
    padding: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    z-index: 10;

    color: #a3a3a3;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.447px;
    font-size: 14px;

    .dropdown-item.selected {
      color: #000;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.447px;
    }
  }
`;

export default function RoomBody({ roomData }) {
  const [activeTab, setActiveTab] = useState('페이지별');
  const handleTabClick = (tab) => setActiveTab(tab);

  // ✅ 기록 추가 팝업 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  // ✅ 데이터 불러오기
  useEffect(() => {
    if (!roomId) return;
    console.log('✅ roomData 설정됨:', roomData);

    const fetchRecords = async () => {
      setLoading(true);
      setError('');
      try {
        let data;
        if (activeTab === '페이지별') {
          data = await getPageRecords(roomId, pageOrder, startPage, endPage);
        } else {
          data = await getEntireRecords(roomId, entireOrder);
        }
        setRecords(data);
      } catch (err) {
        console.error('❌ API 호출 오류:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [roomId, activeTab, pageOrder, entireOrder, startPage, endPage]);

  return (
    <>
      {isPopupOpen &&
        (activeTab === '페이지별' ? (
          <PageRecord onClose={() => setIsPopupOpen(false)} roomId={roomId} />
        ) : (
          <EntireRecord onClose={() => setIsPopupOpen(false)} roomId={roomId} />
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
          <NoRecord>기록이 없습니다</NoRecord>
        ) : records.length === 0 ? (
          <div>📭 기록이 없습니다.</div>
        ) : (
          records.map((record) => (
            <Record
              key={record.recordId}
              record={record}
              activeTab={activeTab}
              isPreview={true}
            />
          ))
        )}
      </Container>
    </>
  );
}
