import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .buttons {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
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
  border-bottom: 3px solid #6aa5f8;

  background: #fef7f7;
  color: #6aa5f8;
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

export const BookDetail = styled.div`
  display: flex;
  height: 440px;
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

  .introduce {
  }

  .detail {
  }
`;
