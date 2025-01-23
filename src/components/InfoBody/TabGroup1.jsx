import React from 'react';
import {
  Wrapper,
  Category,
  InfoContainer,
  BookDetail,
} from './TabGroup1.styles';

export default function TabGroup1() {
  return (
    <Wrapper>
      <Category>책 정보</Category>
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
      <div className="underbar" />
      <BookDetail>
        <div className="introduce">책 소개</div>
        <div className="detail">~~~~~~~~~~~~~~알라딘 불러오기~~~~~~~~</div>
      </BookDetail>
    </Wrapper>
  );
}
