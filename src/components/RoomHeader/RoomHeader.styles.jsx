import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 1000px;
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
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

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 77px;
`;

export const Category = styled.div`
  padding-top: 40px;
  margin: auto;
  height: 23px;
  width: 133px;
  border: none;
  outline: none;
  border-bottom: ${({ $isActive }) =>
    $isActive ? '3px solid #6aa5f8' : 'none'};
  background: #f6f7f9;
  color: ${({ $isActive }) => ($isActive ? '#6aa5f8' : '#B3B3B3')};
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Filter = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  gap: 10px;

  .dropdown {
    position: relative;
  }

  .dropdown-button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: white;
    font-size: 14px;
    cursor: pointer;
  }

  .arrow-icon {
    width: 12px;
    height: 12px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .dropdown-menu2 {
    position: absolute;
    flex-direction: column;
    width: 99px;
    height: auto;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .page-input {
    width: 50px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    outline: none;
  }

  .page-separator {
    font-size: 16px;
    color: #555;
  }

  .dropdown-item {
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }
`;

export const Review = styled.div`
  width: 393px;
  height: 115px;
  padding: 0px 25px 20px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export const UserList = styled.div`
  padding-top: 30px;
`;
