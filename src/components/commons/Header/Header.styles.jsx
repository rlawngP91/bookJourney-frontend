import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 393px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none; /* 포커스 상태에서도 제거 */
    box-shadow: none; /* 혹시 브라우저 기본 shadow가 있다면 제거 */
  }
`;

export const Logo = styled.img`
  height: 24px;
  object-fit: contain;
`;

export const IconSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
