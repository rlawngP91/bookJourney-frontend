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

export default function TabGroup2() {
  const [activeTab, setActiveTab] = useState('책정보'); // 현재 탭 상태 관리

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 변경
  };

  return (
    <Wrapper>
      <div className="category">
        <Category
          isActive={activeTab === '책정보'}
          onClick={() => handleTabClick('책정보')}
        >
          책 정보
        </Category>
        <Category
          isActive={activeTab === '방정보'}
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
              <div>같이 읽기방 제목</div>
              <div className="detail">
                <div className="gap">
                  <img src={clock2} />
                  <div>1시간 전</div>
                </div>
                <div className="gap">
                  <img src={note} />
                  <div>40%</div>
                </div>
              </div>
            </div>
            <div className="duration">
              <div className="title">기간</div>
              <div className="text">2024.12.30</div>
              <div className="text">~</div>
              <div className="text">2025.01.14</div>
            </div>
            <div className="duration">
              <div className="title">모집 마감일</div>
              <div className="text">D-8</div>
              <div className="text">2024.12.30</div>
            </div>
          </InfoContainer2>
          <div className="underbar" />
          <BookDetail>
            <div className="numcontainer">
              <div className="now">4</div>
              <div className="of">/</div>
              <div className="total">6</div>
            </div>
            <MemberHeader />
          </BookDetail>
        </>
      )}
    </Wrapper>
  );
}
