import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 393px;
  height: 250px;
  border-radius: 9px;
  background-color: #a3c7fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 131px;
  bottom: 0;

  p {
    margin: 0;
    color: #fff;
    font-family: Pretendard;
    font-size: var(--sds-typography-body-size-small);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
  }

  .line1,
  .line2 {
    display: flex;
    margin-top: 27px;
    cursor: pointer;

    img {
      margin-left: 37px;
      margin-right: 12px;
    }
  }
`;
