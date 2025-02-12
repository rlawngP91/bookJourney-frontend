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
  position: relative;

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
    color: var(--sds-color-text-default-default);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
  }

  .roomMeta {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 42px;

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
export const Tag = styled.span`
  display: inline-flex;
  width: 41.064px;
  height: 20.869px;
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
  line-height: 13.464px; /* 139.895% */
  letter-spacing: 0.096px;
`;
