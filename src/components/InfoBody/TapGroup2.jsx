import React, { useState } from 'react';
import {
  Wrapper,
  InfoContainer,
  InfoContainer2,
  BookDetail,
  Category,
} from './TapGroup2.styles';
import lock from '../../assets/lock.svg';
import clock2 from '../../assets/clock2.svg';
import note from '../../assets/note.svg';
import MemberHeader from '../Member/MemberHeader';

export default function TabGroup2({ roomData }) {
  const [activeTab, setActiveTab] = useState('책정보'); // 현재 탭 상태 관리

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 변경
  };

  return (
    <Wrapper>
      <div className="category">
        <Category
          $isActive={activeTab === '책정보'}
          onClick={() => handleTabClick('책정보')}
        >
          책 정보
        </Category>
        <Category
          $isActive={activeTab === '방정보'}
          onClick={() => handleTabClick('방정보')}
        >
          방 정보
        </Category>
      </div>

      {activeTab === '책정보' ? (
        <>
          <InfoContainer>
            <div className="line">
              <div className="first">출판사</div>
              <div>은행나무</div>
            </div>
            <div className="line">
              <div className="first">출간일</div>
              <div>2025년 1월 1일</div>
            </div>
            <div className="line">
              <div className="first">ISBN</div>
              <div>12341234134</div>
            </div>
          </InfoContainer>
          <div className="underbar"></div>
          <BookDetail>
            <div className="introduce">책 소개</div>
            <div className="detail">
              ~~~~~~~aaadfasdfqwefasdfasdfasdfasdf~~~~~~~알라딘 불러오기~~~~~~~~
            </div>
          </BookDetail>
        </>
      ) : (
        <>
          <InfoContainer2>
            <div className="header">
              <img src={lock} />
              <div>{roomData.roomName}</div>
              <div className="detail">
                <div className="gap">
                  <img src={clock2} />
                  <div>{roomData.recruitDday}</div>
                </div>
                <div className="gap">
                  <img src={note} />
                  <div>{roomData.roomPercentage}%</div>
                </div>
              </div>
            </div>
            <div className="duration">
              <div className="title">기간</div>
              <div className="text">{roomData.progressStartDate}</div>
              <div className="text">~</div>
              <div className="text">{roomData.progressEndDate}</div>
            </div>
            <div className="duration">
              <div className="title">모집 마감일</div>
              <div className="text">{roomData.recruitDday}</div>
              <div className="text">{roomData.recruitEndDate}</div>
            </div>
          </InfoContainer2>
          <div className="underbar" />
          <BookDetail>
            <div className="numcontainer">
              <div className="now">{roomData.memberList.length}</div>
              <div className="of">/</div>
              <div className="total">{roomData.recruitCount}</div>
            </div>
            <MemberHeader memberList={roomData.memberList} />
          </BookDetail>
        </>
      )}
    </Wrapper>
  );
}
