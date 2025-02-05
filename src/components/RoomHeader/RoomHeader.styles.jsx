import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 60px 25px 0px 25px;
  .roomname {
    padding-top: 11px;

    color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.08px; /* 164.366% */
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 34px;
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20.553px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;

export const Duration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  color: #8f8f8f;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 18.08px; /* 164.366% */

  img {
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserList = styled.div`
  padding-top: 30px;
`;
