import styled from 'styled-components';

export const Wrapper = styled.div`
  //position: absolute;
  width: 393px;
  height: 88px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fbfbfb;
  box-shadow: 0px 1px 5.7px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위에 나타나도록 설정 */
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #fbfbfb;
  padding-bottom: 20px;
  gap: 4px;
  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  border-radius: 0; /* 둥근 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */

  img {
  }

  div {
    color: #a3a3a3;
    text-align: center;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 160% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
`;
