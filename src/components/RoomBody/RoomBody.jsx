import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Tab, Category, Filter } from './RoomBody.styles';
import downarrow2 from '../../assets/downarrow2.svg';
import uparrow from '../../assets/uparrow.svg';
import Record from './Record';

export default function RoomBody() {
  // 페이지 범위 드롭다운 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [selectedRange, setSelectedRange] = useState('페이지 범위');
  const dropdownRef = useRef(null);

  // 페이지 순 드롭다운 상태
  const [isPageOrderOpen, setIsPageOrderOpen] = useState(false);
  const [pageOrder, setPageOrder] = useState('페이지 순');
  const pageOrderRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        applyPageRange(); // 값 적용 후 드롭다운 닫기
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [startPage, endPage]); // 입력값 변경될 때마다 감지

  // 페이지 범위 값 적용하는 함수
  const applyPageRange = () => {
    if (startPage && endPage) {
      setSelectedRange(`${startPage} p ~ ${endPage} p`); // 적용된 값 업데이트
    } else {
      setSelectedRange('페이지 범위'); // 값이 없으면 기본 텍스트 유지
    }
    setIsDropdownOpen(false); // 드롭다운 닫기
  };

  const [activeTab, setActiveTab] = useState('페이지별'); // 현재 탭 상태 관리

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 변경
  };

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
      {activeTab === '페이지별' ? (
        <>
          <Filter>
            {/* 페이지 범위 버튼 */}
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedRange}
                <img
                  src={isDropdownOpen ? uparrow : downarrow2} // 화살표 이미지 변경
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>

              {/* 드롭다운 내용 */}
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
                  <span className="p">p</span>
                </div>
              )}
            </div>

            {/* 페이지 순 드롭다운 */}
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
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setPageOrder('페이지 순');
                      setIsPageOrderOpen(false);
                    }}
                  >
                    페이지 순
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setPageOrder('최신등록 순');
                      setIsPageOrderOpen(false);
                    }}
                  >
                    최신등록 순
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setPageOrder('답글 많은 순');
                      setIsPageOrderOpen(false);
                    }}
                  >
                    답글 많은 순
                  </div>
                </div>
              )}
            </div>
          </Filter>
          <Record />
        </>
      ) : (
        <>
          <Record />
        </>
      )}
    </Wrapper>
  );
}
