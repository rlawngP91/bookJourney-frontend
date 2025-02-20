import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위에 나타나도록 설정 */
  width: 393px;
  height: 88px;
  flex-shrink: 0;
  background: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Button = styled.button`
  width: 351px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 9px;
  border: none;
  background-color: ${({ disabled }) =>
    disabled ? 'rgba(106, 165, 248, 0.49)' : '#6AA5F8'};
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'}; /* ✅ 클릭 방지 */

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  outline: none; /* 기본 포커스 스타일 제거 */
  &:focus {
    outline: none; /* 포커스 상태에서도 기본 포커스 스타일 제거 */
  }
`;
