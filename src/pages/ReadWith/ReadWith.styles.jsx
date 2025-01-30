import styled from 'styled-components';

export const Wrapper = styled.div``;

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

    color: var(--BananiStyle, #a09cab);
    font-family: Pretendard;
    font-size: 14.33px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.106px; /* 133.333% */
  }
`;
