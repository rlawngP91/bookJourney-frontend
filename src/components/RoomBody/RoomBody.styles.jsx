import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px 0px 25px;
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

export const Filter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 10px;

  .dropdown {
    position: relative;
  }

  .dropdown-button {
    height: 25px;
    width: auto;
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
