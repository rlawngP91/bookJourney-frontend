import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fef7f7;
  .buttons {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  .category {
    display: flex;
    flex-direction: row;
    gap: 10px;
    box-sizing: border-box;
    padding: 0px 60px 0px 60px;
  }

  .underbar {
    height: 10px;
    background-color: rgba(171, 171, 171, 0.12);
  }
`;

export const Category = styled.div`
  padding-top: 40px;
  margin: auto;
  height: 25px;
  width: 108px;
  border: none;
  outline: none;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #6aa5f8' : 'none')};
  background: #fef7f7;
  color: ${({ isActive }) => (isActive ? '#6aa5f8' : '#B3B3B3')};
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
  padding-top: 20px;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

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
    padding-bottom: 23px;

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
    align-items: center;
    gap: 18px;
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
  position: relative;
  display: flex;
  height: 100%;
  width: 393px;
  flex-direction: column;
  padding: 65px 55px 100px 55px;
  box-sizing: border-box;

  gap: 15px;
  color: black;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  .numcontainer {
    position: absolute;
    left: 50%;
    margin-left: -10px;
    margin-top: -40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .now {
    }
    .of {
    }
    .total {
    }
  }
`;
