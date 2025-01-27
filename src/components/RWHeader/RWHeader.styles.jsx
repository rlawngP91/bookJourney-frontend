import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 105px;
  top: 0;
  background-color: #f6f7f9;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 81px;

  img {
    position: absolute;
    left: 26px;
    top: 81px;
    width: 18px;
    height: 18px;
  }

  div {
    text-align: center;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 16px;
    letter-spacing: 0.5px;
  }
`;
