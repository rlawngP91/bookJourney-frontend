import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .start-btn {
    position: absolute;
    top: 656px;
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
    grid-template-rows: repeat(4, 1fr); /* 4행 */
    gap: 17px 11px; /* 세로 17px, 가로 11px 간격 */
  }
`;
