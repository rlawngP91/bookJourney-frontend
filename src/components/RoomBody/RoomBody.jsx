import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Tab, Category, Filter, Footer } from './RoomBody.styles';
import downarrow2 from '../../assets/downarrow2.svg';
import send from '../../assets/send.svg';
import uparrow from '../../assets/uparrow.svg';
import Record from './Record';
import { getPageRecords } from '../../apis/getPageRecords';
import { getEntireRecords } from '../../apis/getEntireRecords';

export default function RoomBody({ roomData }) {
  const [activeTab, setActiveTab] = useState('페이지별');
  const handleTabClick = (tab) => setActiveTab(tab);

  // ✅ 정렬 방식 드롭다운 상태
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [order, setOrder] = useState('페이지순'); // 기본 정렬 방식

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

  // ✅ 정렬 방식 변경 시 호출
  const handleSortingChange = (newSortingType) => {
    setOrder(newSortingType);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        applyPageRange();
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

  // ✅ 데이터 불러오기
  useEffect(() => {
    if (!roomData) return;
    console.log('✅ roomData 설정됨:', roomData);

    const roomId = roomData.roomId;
    if (!roomId) {
      console.log('❌ roomId가 없음, API 호출 안함');
      return;
    }

    const fetchRecords = async () => {
      setLoading(true);
      setError('');
      try {
        let data;
        if (activeTab === '페이지별') {
          data = await getPageRecords(roomId, order, startPage, endPage);
        } else {
          data = await getEntireRecords(roomId, order);
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
  }, [roomData, activeTab, order, startPage, endPage]);

  return (
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

      <Filter>
        {/* ✅ 페이지별 탭 - 페이지 범위 선택 & 정렬 가능 */}
        {activeTab === '페이지별' && (
          <>
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {startPage && endPage
                  ? `${startPage} p ~ ${endPage} p`
                  : '페이지 범위'}
                <img
                  src={isDropdownOpen ? uparrow : downarrow2}
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
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
                  <button onClick={applyPageRange}>적용</button>
                </div>
              )}
            </div>
            <div className="dropdown" ref={orderRef}>
              <button
                className="dropdown-button"
                onClick={() => setIsOrderOpen(!isOrderOpen)}
              >
                {order}
                <img
                  src={isOrderOpen ? uparrow : downarrow2}
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>
              {isOrderOpen && (
                <div className="dropdown-menu2">
                  {['페이지순', '최신 등록순', '답글 많은 순'].map((option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      onClick={() => handleSortingChange(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* ✅ 전체 탭 - 정렬 방식만 변경 가능 */}
        {activeTab === '전체' && (
          <div className="dropdown" ref={orderRef}>
            <button
              className="dropdown-button"
              onClick={() => setIsOrderOpen(!isOrderOpen)}
            >
              {order}
              <img
                src={isOrderOpen ? uparrow : downarrow2}
                alt="arrow"
                className="arrow-icon"
              />
            </button>
            {isOrderOpen && (
              <div className="dropdown-menu2">
                {['페이지순', '최신 등록순', '답글 많은 순'].map((option) => (
                  <div
                    key={option}
                    className="dropdown-item"
                    onClick={() => handleSortingChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Filter>

      {/* ✅ 기록 데이터 렌더링 */}
      {loading ? (
        <div>📖 기록을 불러오는 중...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>❌ {error}</div>
      ) : records.length === 0 ? (
        <div>📭 기록이 없습니다.</div>
      ) : (
        records.map((record) => (
          <Record key={record.recordId} record={record} />
        ))
      )}

      <Footer>
        <div className="input">
          <div>기록 추가하기</div>
          <img src={send} alt="send" />
        </div>
      </Footer>
    </Wrapper>
  );
}
