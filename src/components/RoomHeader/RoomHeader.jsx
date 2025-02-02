import React, { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  HeaderWrapper,
  Header,
  Title,
  Duration,
  Tab,
  Category,
  Body,
  Filter,
  Review,
  UserList,
} from './RoomHeader.styles';
import xbox from '../../assets/xbox.svg';
import pen from '../../assets/pen.svg';
import exit from '../../assets/exit.svg';
import lock from '../../assets/lock.svg';
import grayclock from '../../assets/grayclock.svg';
import graynote from '../../assets/graynote.svg';
import grayarrowright from '../../assets/grayarrowright.svg';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import reply from '../../assets/reply.svg';
import good from '../../assets/good.svg';
import grayarrowdown from '../../assets/grayarrowdown.svg';
import MemberHeader from '../Member/MemberHeader';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import downarrow2 from '../../assets/downarrow2.svg';
import uparrow from '../../assets/uparrow.svg';
import userimage from '../../assets/userimage.svg';

export default function RoomHeader() {
  const [activeTab, setActiveTab] = useState('페이지별'); // 현재 탭 상태 관리

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 변경
  };

  const [isExpanded, setIsExpanded] = useState(false);

  // 화살표 버튼 클릭 시 상태 토글
  const toggleUserList = () => {
    setIsExpanded(!isExpanded);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 열림 상태 관리

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

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>
          <img src={xbox} />
          <div>
            <img src={pen} />
            <img src={exit} />
          </div>
        </Header>
        <Title>
          <div>책제목</div>
          <img src={lock} />
        </Title>
        <div className="roomname">어쩌구 저쩌구 독서방</div>
        <Duration>
          <img src={grayclock} />
          <div>D-10</div>
          <img src={graynote} />
          <div>75%</div>
          <img
            src={isExpanded ? grayarrowdown : grayarrowright}
            onClick={toggleUserList}
            style={{ cursor: 'pointer' }}
          />
        </Duration>
        {/* 참가 유저 목록 (isExpanded가 true일 때만 표시) */}
        {isExpanded && (
          <UserList>
            <MemberHeader />
          </UserList>
        )}
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
      </HeaderWrapper>

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
          <Review>
            <div className="head">
              <div className="main">
                <img src={userimage} />
                <div className="name">닉네임</div>
                <div className="time">2024.11.14 23:04:28</div>
              </div>
              <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
              {isMenuOpen && (
                <HamburgerMenu onClose={() => setIsMenuOpen(false)} />
              )}
            </div>
            <div className="body">
              <div className="page">100p</div>
              <div className="content">
                해리는 모자가 아닌 본인 스스로 그리핀도르로 선택했다. 진정한
                용기는 능력이 아니라 선택의 결과로 나타난다.
              </div>
            </div>
            <div className="bottom">
              <img src={reply} />
              <div>3</div>
              <img src={good} />
              <div>55</div>
            </div>
          </Review>
        </>
      ) : (
        <>
          <Review></Review>
        </>
      )}
      <Body></Body>
    </Wrapper>
  );
}
