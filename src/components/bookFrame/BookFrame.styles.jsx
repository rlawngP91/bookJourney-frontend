import styled from 'styled-components';

export const Container = styled.div`
  width: 118px;
  height: 239px;
  margin-right: 13px;
  cursor: pointer;
  .title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 17px;
  }
  .bookTitle {
    position: relative;
    left: 1px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.11px;
  }
  .read-type {
    width: 33.452px;
    height: 17px;
    border-radius: 11.516px;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 109.677% */
    letter-spacing: 0.1px;
  }

  .writer-space {
    margin: 0;
    margin-top: 9px;
    color: #a3a3a3;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.1px;
  }
  .separate-line {
    width: 118px;
    height: 1px;
    margin-top: 6px;
    background: #d9d9d9;
  }

  .bottom {
    position: relative;
    display: flex;
  }

  .hour,
  .percentage {
    color: #a3a3a3;
    font-family: Inter;
    font-size: 8.788px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.576px; /* 200% */
  }

  .clock {
    position: absolute;
    top: 3px;
  }

  .hour {
    margin-left: 12.45px;
  }

  .note {
    margin-left: 4.15px;
    margin-right: 2.2px;
    left: 47.6px;
  }

  .percentage {
    margin-right: 25.5px;
  }
`;
