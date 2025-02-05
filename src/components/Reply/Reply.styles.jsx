import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 853px;
  background-color: rgba(0, 0, 0, 0.42);
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 75px 25px 0px 25px;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px 25px 10px 9px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export const Container = styled.div`
  height: 700px;
  width: 393px;
  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Review = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 20px;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 10px 0px 10px 40px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;
    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export const ReviewList = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 46px 25px 90px 55px;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위에 나타나도록 설정 */
  width: 393px;
  height: 88px;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;

  .input {
    display: flex;
    width: 342px;
    padding: 9.553px 15.285px;
    align-items: center;
    justify-content: space-between;
    gap: 7.642px;
    border-radius: 9px;
    background-color: #eff1f5;

    color: #a09cab;
    font-family: Pretendard;
    font-size: 14.33px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.106px; /* 133.333% */
  }
`;
