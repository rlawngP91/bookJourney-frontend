import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 393px;
  background-color: #fef7f7;
  .buttons {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  .category {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 0px 20px 0px 20px;
  }

  .underbar {
    height: 10px;
    background-color: rgba(171, 171, 171, 0.12);
  }
`;

export const Category = styled.div`
  padding-top: 30px;
  margin: auto;
  height: 60px;
  width: 108px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-bottom: ${({ $isActive }) =>
    $isActive ? '3px solid #6aa5f8' : 'none'};
  background: #fef7f7;
  color: ${({ $isActive }) => ($isActive ? '#6aa5f8' : '#B3B3B3')};
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  height: 205px;
  width: 393px;
  color: black;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: 49.5px 55px 40px 55px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  .line {
    display: flex;
    flex-direction: row;

    .first {
      width: 105px;
    }
  }
`;

export const InfoContainer2 = styled.div`
  height: 205px;
  width: 393px;
  color: black;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding-top: 40px;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 15px;
    height: 15px;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding-bottom: 10px;

    .detail {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 7px;
      color: #6aa5f8;
      font-family: Pretendard;
      font-size: 9.964px;
      font-style: normal;
      font-weight: 600;
      line-height: 19.928px; /* 200% */

      img {
        width: 11px;
        height: 11px;
      }

      .gap {
        display: flex;
        flex-direction: row;
        gap: 3px;
        align-items: center;
      }
    }
  }

  .duration {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding-left: 107px;

    .title {
      color: black;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
    }

    .text {
      color: black;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const BookDetail = styled.div`
  display: flex;
  height: auto;
  width: 393px;
  flex-direction: column;
  padding: 65px 55px 220px 55px;
  box-sizing: border-box;

  gap: 15px;
  color: black;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  position: relative;

  .introduce {
    position: absolute;
    left: 48.5%;
    margin-left: -10px;
    margin-top: -60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: #a3a3a3;
    text-align: center;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
  }

  .numcontainer {
    position: absolute;
    left: 45.5%;
    margin-left: -10px;
    margin-top: -60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 6.5px;

    width: 57px;
    height: 24px;
    border-radius: 5.605px;
    border: 1px solid #6aa5f8;
    .set {
      display: flex;
      flex-direction: row;
      align-items: center;
      .now,
      .of,
      .total {
        color: #6aa5f8;
        font-family: Pretendard;
        font-size: 10.4px;
        font-style: normal;
        font-weight: 500;
        line-height: 12.8px; /* 123.077% */
        letter-spacing: 0.4px;
      }
    }
  }
`;
