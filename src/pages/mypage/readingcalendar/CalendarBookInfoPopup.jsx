import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 393px; // 100% 393px
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const PopupContainer = styled.div`
  position: fixed;
  bottom: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  left: 0;
  width: 341px; // 100% 393px -> 양옆 padding 고려
  background-color: white;
  border-radius: 9px 9px 0 0;
  padding: 33px 26px;
  z-index: 1001;
  overflow-y: auto;
`;

const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const BookItem = styled.div`
  display: flex;
  height: 123px;
  gap: 16px;
`;

const BookImage = styled.img`
  width: 84px;
  height: 123px;
  flex-shrink: 0;
`;

const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ReadStatus = styled.div`
  color: #757373;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 160% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  margin-top: 11px;
`;

const BookTitle = styled.div`
  display: flex;
  gap: 7px;
`;

const TitleText = styled.span`
  width: 180px;
  color: var(--sds-color-text-default-default);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 32px;
`;

const ReadingStatus = styled.span`
  /* color: ${({ $status }) => ($status === '혼자' ? '#A3C7FA' : '#6AA5F8')}; */

  display: inline-flex;
  width: 40px;
  height: 21px;
  position: absolute;
  right: 0;
  top: 35.5px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #6aa5f8;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'dlig' on;
  font-family: Pretendard;
  font-size: 9.624px;
  font-style: normal;
  font-weight: 500;
  line-height: 139.895%; /* 139.895% */
  letter-spacing: 0.096px;
`;

const ReadingPeriod = styled.div`
  color: #757575;
  font-family: Pretendard;
  font-size: 11.753px;
  font-style: normal;
  font-weight: 600;
  line-height: 23.505px; /* 200% */
  margin-top: auto;
  margin-bottom: 11px;
`;

const CalendarBookInfoPopup = ({ isOpen, onClose, books }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <PopupContainer $isOpen={isOpen}>
        <BookList>
          {books?.map((book, index) => (
            <BookItem key={index}>
              <BookImage src={book.image} alt={book.title} />
              <BookInfo>
                <ReadStatus>{book.author}</ReadStatus>
                <BookTitle>
                  <TitleText>{book.title}</TitleText>
                  <ReadingStatus $status={book.status}>
                    {book.status}
                  </ReadingStatus>
                </BookTitle>
                <ReadingPeriod>{book.period}</ReadingPeriod>
              </BookInfo>
            </BookItem>
          ))}
        </BookList>
      </PopupContainer>
    </>
  );
};

export default CalendarBookInfoPopup;
