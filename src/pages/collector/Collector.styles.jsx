import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 853px;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  box-sizing: border-box;

  position: relative;
  img {
  }

  .center {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    .title {
      color: #000;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      text-align: center;
    }
    img {
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 25px;
  gap: 108px;

  position: absolute;
  top: 0;
  left: 0;

  width: 393px;
  height: 105px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-top: 81px;
`;
