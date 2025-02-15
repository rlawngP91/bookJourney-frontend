import styled from 'styled-components';

export const Container = styled.div`
  width: 145px;
  height: 291.3px;
  //margin-right: 13px;
  cursor: pointer;
  .title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 25px;
  }

  .book-img {
    width: 144.8px;
    height: 206.2px;
    border-radius: 9.821px;
    margin-bottom: 5.05px;
    box-sizing: border-box;
    border: 2.455px solid transparent;
    &:hover {
      border: 2.455px solid #6aa5f8;
    }
  }

  .bookTitle {
    width: 101px;
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
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.11px;
  }

  .read-type {
    margin-top: 11.05px;
    width: 41.06px;
    height: 20.86px;
    border-radius: 11.516px;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 20.86px; /* 109.677% */
    letter-spacing: 0.1px;
    margin-top: 2.5px;
  }

  .writer-space {
    width: 138px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    margin: 0;
    color: #a3a3a3;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 12.27px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.1px;
  }
  .separate-line {
    width: 145px;
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
    font-size: 9.588px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.179px;
  }

  .clock {
    position: absolute;
    top: 4px;
  }

  .hour {
    margin-left: 13.45px;
  }

  .note {
    margin-left: 4.4px;
    margin-right: 2.2px;
  }

  .percentage {
  }

  .dots {
    position: absolute;
    margin-top: 1.8px;
    left: 132px;
  }
`;
