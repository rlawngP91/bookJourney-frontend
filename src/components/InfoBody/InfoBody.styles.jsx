import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 393px;
  padding: 88px 20px 0px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 9px;
    text-align: center;

    .bookname {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
      letter-spacing: var(--Label-Small-Tracking, 0.5px);
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .buttons {
    gap: 18px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  .underbar {
    height: 10px;
    background-color: rgba(171, 171, 171, 0.12);
  }
`;

export const Button = styled.button`
  width: 167px;
  height: 42px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;

  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */
`;

export const Category = styled.div`
  padding-top: 42px;
  padding-bottom: 8px;
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
  height: 206px;
  width: 100%;
  color: black;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding-top: 49.5px;
  padding-left: 55px;
  padding-bottom: 40px;
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
  width: 100%;
  height: 380px;
  flex-direction: column;
  padding: 30px 30px 100px 30px;
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
