import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 9px;
    text-align: center;
    padding: 88px 20px 0px 20px;
    box-sizing: border-box;

    .bookname {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 106.667% */
      letter-spacing: 0.5px;
    }

    img {
      width: 14px;
      height: 14px;
    }
  }

  .writer {
    padding-top: 9px;
    padding-bottom: 27px;
    color: #757373;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;

export const Popup = styled.div`
  position: fixed; /* 화면에 고정된 위치 */
  top: 50%; /* 화면의 중앙 */
  left: 50%; /* 화면의 중앙 */
  transform: translate(-50%, -50%); /* 완벽한 중앙 정렬 */
  z-index: 2000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 100%;
  height: 100%;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 268px;
    height: 144px;
    flex-shrink: 0;
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
      line-height: 140%; /* 16.8px */
      padding-bottom: 25px;
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
