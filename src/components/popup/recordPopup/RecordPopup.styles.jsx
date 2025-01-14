import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 393px;
  height: 855px;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  width: 268px;
  height: 248px;
  background-color: white;
  border-radius: 10px;
  //box-shadow: 3px 3px 10px #a3a3a3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    position: absolute;
    top: 37px;
    left: auto;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 18.2px */
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 71px;
    left: auto;

    .label {
      margin-bottom: 40px;
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: var(--sds-typography-body-font-weight-regular);
      line-height: 140%; /* 16.8px */
    }

    .page {
      display: flex;
      flex-direction: row;
      gap: 22px;
      align-items: center;
      justify-content: center;

      .nowpage {
        color: #a3a3a3;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 21px */
      }

      .slash {
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 62.5% */
      }

      .totalpage {
        color: #000;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 21px */
      }
    }
  }

  img {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
