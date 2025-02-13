import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px 0px 25px;
`;

export const Container = styled.div`
  width: 393px;
  height: 453.5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 25px;
  /* ✅ 내용이 height를 넘어가면 스크롤 */
  overflow-y: auto;

  /* ✅ 스크롤바 투명하게 만들기 */
  &::-webkit-scrollbar {
    width: 0; /* 크기 0으로 설정 (투명) */
    height: 0;
  }

  /* ✅ Firefox에서 스크롤 숨기기 */
  scrollbar-width: none;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 77px;
`;

export const Category = styled.div`
  padding-top: 30px;
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
  width: 393px;
  height: 60px;
  gap: 10px;
  padding: 0px 25px;
  box-sizing: border-box;

  .dropdown {
    position: relative;

    img {
      width: 14px;
      height: 14px;
    }
  }

  .dropdown-button {
    height: 25px;
    width: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    background: white;
    font-size: 14px;
    cursor: pointer;

    border-radius: 9px;
    border: 1px solid #000;
  }

  .arrow-icon {
    width: 12px;
    height: 12px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    border: none;
    width: 133px;
    height: 95px;
    flex-shrink: 0;
    border-radius: 9px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .o {
      width: 14px; //img랑 똑같이 가로주면됨
    }
    .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
    }

    .body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 7px;
      padding-top: 14px;
    }
  }

  .dropdown-menu2 {
    position: absolute;
    flex-direction: column;
    width: 115px;
    height: 111px;

    box-sizing: border-box;
    border-radius: 9px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    top: 100%;
    left: 0;
    background-color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    z-index: 10;

    color: #a3a3a3;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.447px;
    font-size: 14px;

    .dropdown-item.selected {
      color: #000;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.447px;
    }
  }

  .range {
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.447px;
  }

  .page-input {
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 9px;
    text-align: center;
    font-size: 14px;
    outline: none;

    width: 41.25px;
    height: 33px;
    flex-shrink: 0;
    background-color: #f6f3f3;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    line-height: 140%; /* 15.4px */
  }

  .p,
  .page-separator {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 11.917px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.683px */
  }

  .dropdown-item {
    cursor: pointer;
    font-size: 14px;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 500; /* 다른 요소 위에 나타나도록 설정 */
  width: 393px;
  height: 90px;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none; /* 테두리 제거 */
  box-sizing: border-box;
  padding: 0px 25px;

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
