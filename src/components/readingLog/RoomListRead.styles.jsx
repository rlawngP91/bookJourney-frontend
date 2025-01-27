import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 393px;
  flex-direction: column;
  overflow-y: hidden;
  padding: 0 0 80px;
`;

export const RoomItem = styled.div`
  display: flex;
  width: 100%;
  height: 123px;
  gap: 16px;
  padding: 16px;

  .book-cover {
    width: 84px;
    height: 123px;
    flex-shrink: 0;
  }
`;

export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .roomAuthor {
    color: #757373;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 160% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
  }

  .roomBook {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
  }

  .roomMeta {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: auto;

    .date {
      color: #757575;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: var(--Label-Small-Line-Height, 16px); /* 133.333% */
      letter-spacing: var(--Label-Small-Tracking, 0.5px);
    }
  }
`;
