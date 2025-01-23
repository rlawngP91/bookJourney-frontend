import styled from 'styled-components';

export const Wrapper = styled.div`
  //height: 155px;
  height: 120px;
  width: 100%; /* 부모 요소 크기 */
  overflow-x: auto; /* 수평 스크롤 활성화 */
  white-space: nowrap; /* 줄바꿈 방지 */

  display: flex;
  gap: 20px;
  flex-direction: row;
  background-color: transparent;
  position: relative;
  box-sizing: border-box;
`;
