import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Tab, Category, Filter } from './RoomBody.styles';
import downarrow2 from '../../assets/downarrow2.svg';
import uparrow from '../../assets/uparrow.svg';
import Record from './Record';
import { getPageRecords } from '../../apis/getPageRecords';
import { getEntireRecords } from '../../apis/getEntireRecords';

export default function RoomBody({ roomData }) {
  // ✅ roomId 가져오기
  const roomId = roomData?.roomId;

  // ✅ 탭 상태 ("페이지별" / "전체")
  const [activeTab, setActiveTab] = useState('페이지별');
  const handleTabClick = (tab) => setActiveTab(tab);

  // ✅ 정렬 방식 드롭다운 상태
  const [isPageOrderOpen, setIsPageOrderOpen] = useState(false);
  const [pageOrder, setPageOrder] = useState('페이지 순'); // 기본 정렬 방식

  // ✅ 페이지 범위 드롭다운 상태 ("페이지별" 탭 전용)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const dropdownRef = useRef(null);
  const pageOrderRef = useRef(null);

  // ✅ 기록 데이터 상태
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ 정렬 방식 변경 시 호출
  const handleSortingChange = (newSortingType) => {
    setPageOrder(newSortingType);
  };

  // ✅ 페이지 범위 드롭다운 외부 클릭 시 닫기
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

  console.log(roomId);
  // ✅ 데이터 불러오기
  useEffect(() => {
    if (!roomData) return; // roomData가 없으면 실행 X

    console.log('✅ roomData가 설정됨:', roomData);

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
          data = await getPageRecords(roomId, pageOrder, startPage, endPage);
        } else {
          data = await getEntireRecords(roomId, pageOrder);
        }
        console.log('✅ API 응답 데이터:', data);
        setRecords(data);
      } catch (err) {
        console.error('❌ API 호출 오류:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [roomData, activeTab, pageOrder, startPage, endPage]);

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
        {/* ✅ "페이지별" 탭에서만 페이지 범위 선택 가능 */}
        {activeTab === '페이지별' && (
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
        )}

        {/* ✅ 정렬(페이지 순) 드롭다운 */}
        <div className="dropdown" ref={pageOrderRef}>
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
              {['페이지 순', '최신등록 순', '답글 많은 순'].map((option) => (
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
    </Wrapper>
  );
}
