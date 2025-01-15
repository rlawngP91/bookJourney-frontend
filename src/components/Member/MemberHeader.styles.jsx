import styled from 'styled-components';

export const Wrapper = styled.div`
  //height: 155px;
  height: 120px;
  width: 393px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  position: relative;
  padding-left: 31px;
  box-sizing: border-box;
`;

export const Users = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 9px;

  img {
    width: 13px;
    height: 13px;
  }

  div {
    color: #000;
    font-family: var(--Label-Medium-Font, Roboto);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 160% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
`;
