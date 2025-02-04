import styled from 'styled-components';

export const Container = styled.div`
  width: 353px;
  height: 53.15px;
  margin-bottom: 11.03px;
  border-radius: 9.026px;
  background-color: #fff;
  display: flex;
  cursor: pointer;
  .left-side {
    margin-left: 14px;
    margin-right: 12.09px;
    img {
      margin-right: 3px;
      width: 13.037px;
      height: 12.543px;
      z-index: 1000;
    }
  }

  .left-side span {
    color: #000;
    font-family: Pretendard;
    font-size: 12.034px;
    font-style: normal;
    font-weight: 500;
    line-height: 53.15px; /* 133.333% */
    letter-spacing: 0.501px;
  }

  .room-title {
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 12.17px;
    font-style: normal;
    font-weight: 600;
    line-height: 53.15px;
    letter-spacing: 0.122px;
  }

  .right-side {
    padding-left: 72.4px;
  }

  .book-title {
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 12.17px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.341px; /* 200% */
    letter-spacing: 0.122px;
  }

  .period {
    color: #b3b3b3;
    font-family: Pretendard;
    font-size: 11.031px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.045px; /* 145.455% */
    letter-spacing: 0.501px;
  }
`;
