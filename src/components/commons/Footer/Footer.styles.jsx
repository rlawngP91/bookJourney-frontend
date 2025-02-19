import styled from 'styled-components';

export const Wrapper = styled.div`
  //position: absolute;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 393px;
  height: 88px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fbfbfb;

  position: fixed;
  bottom: 0;
  z-index: 100; /* 다른 요소 위에 나타나도록 설정 */
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #fbfbfb;
  padding-bottom: 25px;
  gap: 4px;
  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  border-radius: 0; /* 둥근 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */

  svg {
    fill: #6aa5f8;
  }

  div {
    color: ${(props) =>
      props.$isActive ? '#6AA5F8' : '#A3A3A3'}; /* 현재 페이지면 파란색 */
    text-align: center;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
  }
`;
