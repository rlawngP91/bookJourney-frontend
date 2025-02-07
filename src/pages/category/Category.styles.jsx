import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .start-btn {
    position: absolute;
    bottom: 163px;
    left: 20px;
  }

  .title {
    position: absolute;
    top: 97px;
    left: 155px;
  }

  .interest {
    position: absolute;
    top: 231px;
    left: 40px;
    margin: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .question {
    position: absolute;
    top: 265px;
    left: 40px;
    margin: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 123.077% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .item-grid {
    width: 335px;
    height: 203px;
    position: absolute;
    top: 317px;
    left: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    grid-template-rows: repeat(5, 1fr); /* 4행 */
    gap: 17px 11px; /* 세로 17px, 가로 11px 간격 */
  }

  .count {
    color: #6aa5f8;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 393px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 100; /* 팝업 아래 배경보다 높은 z-index */
  }

  #pop-up {
    position: fixed;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0px 2.73px 2.73px 0px rgba(0, 0, 0, 0.25);
    left: 63px;
    top: 395px;
    width: 268px;
    height: 62px;
    z-index: 2000;
  }

  .pop-up-text {
    position: absolute;
    top: 22px;
    left: 71px;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }

  .x-icon {
    position: absolute;
    top: 14px;
    right: 15px;
    cursor: pointer;
  }
`;
