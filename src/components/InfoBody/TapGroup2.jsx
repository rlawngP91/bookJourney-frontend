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
import group from '../../assets/group.svg';
import MemberHeader from '../Member/MemberHeader';

export default function TabGroup2({ roomData }) {
  const [activeTab, setActiveTab] = useState('책정보'); // 현재 탭 상태 관리

  const handleTabClick = (tab) => {
    setActiveTab(tab); // 클릭한 탭으로 상태 변경
  };

  const safeRoomData = roomData || {};

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
              <div>{safeRoomData?.publisher || ''}</div>
            </div>
            <div className="line">
              <div className="first">출간일</div>
              <div>{safeRoomData?.publishedDate || ''}</div>
            </div>
            <div className="line">
              <div className="first">ISBN</div>
              <div>{safeRoomData?.isbn || ''}</div>
            </div>
          </InfoContainer>
          <BookDetail>
            <div className="introduce">책 소개</div>
            <div className="detail">{safeRoomData?.description || ''}</div>
          </BookDetail>
        </>
      ) : (
        <>
          <InfoContainer2>
            <div className="header">
              {!roomData.public && <img src={lock} />}
              <div>{safeRoomData?.roomName}</div>
              <div className="detail">
                <div className="gap">
                  <img src={clock2} />
                  <div>{safeRoomData?.recruitDday}</div>
                </div>
                <div className="gap">
                  <img src={note} />
                  <div>{safeRoomData?.roomPercentage}%</div>
                </div>
              </div>
            </div>
            <div className="duration">
              <div className="title">기간</div>
              <div className="text">{safeRoomData?.progressStartDate}</div>
              <div className="text">~</div>
              <div className="text">{safeRoomData?.progressEndDate}</div>
            </div>
            <div className="duration">
              <div className="title">모집 마감일</div>
              <div className="text">{safeRoomData?.recruitDday}</div>
              <div className="text">{safeRoomData?.recruitEndDate}</div>
            </div>
          </InfoContainer2>
          <BookDetail>
            <div className="numcontainer">
              <img src={group} />
              <div className="set">
                <div className="now">{safeRoomData?.memberList.length}</div>
                <div className="of">/</div>
                <div className="total">{safeRoomData?.recruitCount}</div>
              </div>
            </div>
            <MemberHeader
              memberList={safeRoomData?.memberList}
              hideRole={true}
            />
          </BookDetail>
        </>
      )}
    </Wrapper>
  );
}
