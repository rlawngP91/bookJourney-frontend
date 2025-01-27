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
  padding: 16px;
  gap: 16px;
  border-bottom: 1px solid #f2f2f2;

  .book-cover {
    width: 84px;
    height: 123px;
    flex-shrink: 0;
    border-radius: 4px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .roomBook {
    color: var(--sds-color-text-default-default);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
    margin-top: 8px;
  }

  .bookMenu {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .roomMeta {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 42px;
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

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .icon {
    width: 13.711px;
    height: 13.711px;
    flex-shrink: 0;
  }

  .data {
    color: #757575;
    font-family: Pretendard;
    font-size: 11.753px;
    font-style: normal;
    font-weight: 600;
    line-height: 23.505px; /* 200% */
  }
`;
