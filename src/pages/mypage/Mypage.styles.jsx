import styled from 'styled-components';

export const MyPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 45px;
  background-color: #f9fafb;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const ProfileImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: ${({ $imageUrl }) =>
    $imageUrl ? `url(${$imageUrl}) no-repeat center/cover` : '#DBEAFE'};
  margin-bottom: 16px;
`;

export const NickName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111827;
`;

export const Email = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const MenuIcon = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MenuText = styled.span`
  font-size: 16px;
  color: #1f2937;
`;
