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
  gap: 16px;
`;

const BookImage = styled.img`
  width: 51.902px;
  height: 76px;
  flex-shrink: 0;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReadStatus = styled.div`
  color: #757373;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 160% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
`;

const BookTitle = styled.div`
  color: var(--sds-color-text-default-default);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  margin-top: 8px;
`;

const TitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const ReadingStatus = styled.span`
  font-size: 14px;
  margin-left: 11px;
  color: ${({ $status }) => ($status === '혼자' ? '#A3C7FA' : '#6AA5F8')};
`;

const ReadingPeriod = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 133.333% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  margin-top: 18px;
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
