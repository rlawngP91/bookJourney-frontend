import styled from 'styled-components';

export const MyPageContainer = styled.div`
  width: 393px; // 100% 393px반영
  height: 764px; // Footer 를 제외한 높이
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
  width: 79px;
  height: 79px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ $imageUrl }) =>
    $imageUrl ? `url(${$imageUrl}) no-repeat center/cover` : '#DBEAFE'};
  margin-bottom: 24px;
`;

export const NickName = styled.span`
  margin-bottom: 4px;
  color: #000;
  font-family: Pretendard;
  font-size: 13.805px;
  font-style: normal;
  font-weight: 600;
  line-height: 13.805px; /* 100% */
  letter-spacing: 0.431px;
`;

export const Email = styled.p`
  color: #88909b;
  font-family: Pretendard;
  font-size: 12.079px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.805px; /* 114.286% */
  letter-spacing: 0.431px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-right: 16.79px;
  margin-left: 23.8px;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MenuText = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Medium-Line-Height, 16px); /* 114.286% */
  letter-spacing: var(--Label-Medium-Tracking, 0.5px);
`;
