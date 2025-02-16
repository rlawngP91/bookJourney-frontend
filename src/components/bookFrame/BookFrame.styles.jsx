import styled from 'styled-components';

export const Container = styled.div`
  width: 118px;
  height: 239px;
  margin-right: 13px;
  cursor: pointer;

  .cover-img {
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #6aa5f8;
    }
    width: 118px;
    height: 168px;
    border-radius: 8px;
  }

  .cover-img.active {
    border: 2px solid #6aa5f8;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 17px;
  }
  .bookTitle {
    width: 80px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
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
    width: 118px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    margin: 0;
    margin-top: 2px;
    color: #a3a3a3;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
  }
  .separate-line {
    width: 118px;
    height: 1px;
    margin-top: 4px;
    background: #d9d9d9;
  }

  .bottom {
    position: relative;
    display: flex;
  }

  .hour,
  .percentage {
    max-width: 45px;
    color: #a3a3a3;
    font-family: Inter;
    font-size: 8.788px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.576px; /* 200% */
  }

  .percentage {
    width: 25px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
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

  .dots {
    position: absolute;
    top: 4px;
    right: 3px;
  }
`;
