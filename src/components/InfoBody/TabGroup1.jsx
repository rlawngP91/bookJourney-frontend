import React from 'react';
import {
  Wrapper,
  Category,
  InfoContainer,
  BookDetail,
} from './TabGroup1.styles';
import decodeEntities from '../../utils/decodeEntities';

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
            <div
              dangerouslySetInnerHTML={{
                __html: decodeEntities(
                  safeBookData?.publisher ??
                    safeRoomData?.publisher ??
                    '출판사 정보없음'
                ),
              }}
            />
          </div>
        </div>
        <div className="line">
          <div className="first">출간일</div>
          <div>
            {safeBookData?.publishedDate ??
              safeRoomData?.publishedDate ??
              '출간일 정보없음'}
          </div>
        </div>
        <div className="line">
          <div className="first">ISBN</div>
          <div>
            {safeBookData?.isbn ?? safeRoomData?.isbn ?? 'ISBN 정보없음'}
          </div>
        </div>
      </InfoContainer>
      <BookDetail>
        <div className="introduce">책 소개</div>
        <div
          className="detail"
          dangerouslySetInnerHTML={{
            __html: decodeEntities(
              safeBookData?.description ??
                safeRoomData?.description ??
                '책소개 정보없음'
            ),
          }}
        />
      </BookDetail>
    </Wrapper>
  );
}
