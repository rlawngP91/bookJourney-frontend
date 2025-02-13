import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MyPageContainer,
  ProfileSection,
  ProfileImage,
  NickName,
  Email,
  MenuContainer,
  MenuItem,
  MenuIcon,
  MenuText,
} from './Mypage.styles';
import bookIcon from '../../assets/mypage-book.svg';
import calendarIcon from '../../assets/mypage-calendar.svg';
import accountIcon from '../../assets/mypage-account.svg';
import logoutIcon from '../../assets/mypage-logout.svg';
import LogoutPopup from './logout/LogoutPopup';
import { mypageAPI } from '../../apis/mypageAPI';

export default function MyPage() {
  const navigate = useNavigate();
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    imageUrl: '',
    nickname: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const data = await mypageAPI.fetchProfileData();
        if (data) {
          setProfileData(data);
        }
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleLogoutClick = () => {
    setIsLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  const menuItems = [
    {
      icon: <img src={bookIcon} alt="book" />,
      text: '책산책 수집가',
      onClick: () => navigate('/mypage/collector'),
    },
    {
      icon: <img src={calendarIcon} alt="calendar" />,
      text: '독서 달력',
      onClick: () => navigate('/mypage/calendar'),
    },
    {
      icon: <img src={accountIcon} alt="account" />,
      text: '계정정보',
      onClick: () => navigate('/mypage/account'),
    },
    {
      icon: <img src={logoutIcon} alt="logout" />,
      text: '로그아웃',
      onClick: handleLogoutClick,
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MyPageContainer>
      <ProfileSection>
        <ProfileImage $imageUrl={profileData.imageUrl} />
        <NickName>{profileData.nickname}</NickName>
        <Email>{profileData.email}</Email>
      </ProfileSection>

      <MenuContainer>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            <MenuIcon>{item.icon}</MenuIcon>
            <MenuText>{item.text}</MenuText>
          </MenuItem>
        ))}
      </MenuContainer>
      <LogoutPopup isOpen={isLogoutPopupOpen} onClose={closeLogoutPopup} />
    </MyPageContainer>
  );
}
