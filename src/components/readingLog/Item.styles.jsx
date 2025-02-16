import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 393px;
  flex-direction: column;
  overflow-y: hidden;
  padding: 0 0 88px;
  margin-top: 23px;
`;

export const Item = styled.div`
  display: flex;
  height: 123px;
  gap: 16px;
  padding: 12px 24px;

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
    line-height: 160%; /* 160% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
  }

  .BookContainer {
    display: flex;
    gap: 7px;

    .BookTitle {
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
    }

    .bookMetaBtn {
      width: 11.965px;
      height: 11.965px;
      flex-shrink: 0;
      cursor: pointer;
      border: none;
    }
  }

  .roomMeta {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: auto;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  width: 40px;
  height: 21px;
  position: absolute;
  right: 0;
  top: 43px;
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
