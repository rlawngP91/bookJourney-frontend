import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 853px;
  background-color: rgba(0, 0, 0, 0.42);
`;

export const Container = styled.div`
  height: 730px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위로 올림 */

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
