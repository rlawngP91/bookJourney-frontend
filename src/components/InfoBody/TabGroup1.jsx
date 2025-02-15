import React from 'react';
import {
  Wrapper,
  Category,
  InfoContainer,
  BookDetail,
} from './TabGroup1.styles';

export default function TabGroup1({ bookData, roomData }) {
  const safeBookData = bookData || {}; // `null`이나 `undefined`이면 빈 객체 사용
  const safeRoomData = roomData || {};

  return (
    <Wrapper>
      <Category>책 정보</Category>
      <InfoContainer>
        <div className="line">
          <div className="first">출판사</div>
          <div>
            {safeBookData?.publisher ?? safeRoomData?.publisher ?? '정보 없음'}
          </div>
        </div>
        <div className="line">
          <div className="first">출간일</div>
          <div>
            {safeBookData?.publishedDate ??
              safeRoomData?.publishedDate ??
              '정보 없음'}
          </div>
        </div>
        <div className="line">
          <div className="first">ISBN</div>
          <div>{safeBookData?.isbn ?? safeRoomData?.isbn ?? '정보 없음'}</div>
        </div>
      </InfoContainer>
      <BookDetail>
        <div className="introduce">책 소개</div>
        <div className="detail">
          {safeBookData?.description ??
            safeRoomData?.description ??
            '책 소개가 없습니다.'}
        </div>
      </BookDetail>
    </Wrapper>
  );
}
