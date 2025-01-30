import React, { useState } from 'react';
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
import userimage from '../../assets/userimage.svg';
import reply from '../../assets/reply.svg';
import good from '../../assets/good.svg';
import grayarrowdown from '../../assets/grayarrowdown.svg';
import MemberHeader from '../Member/MemberHeader';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

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
            <div className="pagerange">페이지 범위</div>
            <div className="pagearray">페이지 순</div>
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
