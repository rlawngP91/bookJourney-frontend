import React from 'react';
import {
  Wrapper,
  Button,
  Category,
  Container,
  InfoContainer,
  BookDetail,
} from './InfoBody.styles';
import star from '../../assets/star.svg';

export default function InfoBody() {
  return (
    <Wrapper>
      <div className="title">
        <div className="bookname">밤의 여행자들</div>
        <img src={star} />
      </div>
      <div className="writer">윤고은 저</div>
      <Container>
        <div className="buttons">
          <Button>혼자읽기</Button>
          <Button>같이 읽기 방 만들기</Button>
        </div>
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
          <div className="line">
            <div className="first">전체 페이지 수</div>
            <div>500</div>
          </div>
        </InfoContainer>
        <div className="underbar" />
        <BookDetail>
          <div className="introduce">책 소개</div>
          <div className="detail">~~~~~~~~~~~~~~알라딘 불러오기~~~~~~~~</div>
        </BookDetail>
      </Container>
    </Wrapper>
  );
}
