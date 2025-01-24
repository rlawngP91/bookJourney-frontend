import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .header {
    width: 393px;
    height: 109px;
    padding-top: 46.5px;
    border-bottom: 6px solid rgba(171, 171, 171, 0.12);
  }

  .title-message {
    position: absolute;
    top: 82px;
    left: 120px;
    width: 191px;
    margin: 0;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .nickname {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .back-btn {
    position: absolute;
    top: 83px;
    left: 26px;
    cursor: pointer;
  }

  .total {
    margin: 0;
    position: absolute;
    top: 126px;
    left: 32px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);

    .number {
      color: #a3a3a3;
    }
  }

  .sort {
    display: flex;
    align-items: center;
    gap: 3px;
    position: absolute;
    top: 126px;
    right: 35px;
    margin: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    vertical-align: middle;
    cursor: pointer;
  }

  .sort-img {
    top: 2px;
  }
`;
