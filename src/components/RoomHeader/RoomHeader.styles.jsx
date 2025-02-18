import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 60px 25px 0px 25px;

  .roomname {
    padding-top: 11px;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.08px; /* 164.366% */
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 34px;
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-right: 25px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;

export const Duration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  color: #8f8f8f;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserList = styled.div`
  padding-top: 25px;
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 393px;
  height: 100vh;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 268px;
    height: 144px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 2.73px 2.73px 0px rgba(0, 0, 0, 0.25);

    .title {
      padding: 24px 0px 13px 0px;
      color: #000;
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 18.2px */
    }

    .message {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      padding-bottom: 26px;
      display: flex;
      flex-direction: row;
      gap: 3px;
      align-items: center;

      img {
        height: 15px;
        width: 15px;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      text-align: center;
      width: 100%;
      height: 100%;

      .cancel {
        width: 134px;
        height: 47px;
        color: #a3a3a3;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 47px; /* 18.2px */

        border-top: 0.5px solid #a3a3a3;
        border-right: 0.5px solid #a3a3a3;
      }

      .delete {
        width: 134px;
        height: 47px;
        color: #6aa5f8;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 47px; /* 18.2px */
        border-top: 0.5px solid #a3a3a3;
      }
    }
  }
`;

export const Popup2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 393px;
  height: 100vh;

  .exit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 268px;
    height: 144px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 2.73px 2.73px 0px rgba(0, 0, 0, 0.25);

    .title {
      padding: 24px 0px 10px 0px;
      color: #000;
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 18.2px */
    }

    .message {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      display: flex;
      flex-direction: row;
      gap: 3px;
      align-items: center;
      padding-bottom: 16px;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      text-align: center;
      width: 100%;
      height: 100%;

      .cancel {
        width: 134px;
        height: 47px;
        color: #a3a3a3;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 47px; /* 18.2px */

        border-top: 0.5px solid #a3a3a3;
        border-right: 0.5px solid #a3a3a3;
      }

      .delete {
        width: 134px;
        height: 47px;
        color: #d25643;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 47px; /* 18.2px */
        border-top: 0.5px solid #a3a3a3;
      }
    }
  }
`;
