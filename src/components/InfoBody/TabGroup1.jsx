import React from 'react';
import {
  Wrapper,
  Category,
  InfoContainer,
  BookDetail,
} from './TabGroup1.styles';

export default function TabGroup1({ bookData }) {
  if (!bookData) {
    return <div>📖 책 정보를 불러오는 중...</div>;
  }

  return (
    <Wrapper>
      <Category>책 정보</Category>
      <InfoContainer>
        <div className="line">
          <div className="first">출판사</div>
          <div>{bookData.publisher}</div>
        </div>
        <div className="line">
          <div className="first">출간일</div>
          <div>{bookData.publishedDate}</div>
        </div>
        <div className="line">
          <div className="first">ISBN</div>
          <div>{bookData.isbn}</div>
        </div>
      </InfoContainer>
      <div className="underbar" />
      <BookDetail>
        <div className="introduce">책 소개</div>
        <div className="detail">{bookData.description}</div>
      </BookDetail>
    </Wrapper>
  );
}
