import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import notification from '../../../assets/notification.svg';
import star from '../../../assets/star.svg';
import {
  HeaderContainer,
  LogoSection,
  LogoButton,
  Logo,
  IconSection,
  IconButton,
  Icon,
} from './Header.styles.jsx';

export default function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <LogoSection>
        <LogoButton onClick={handleHomeClick}>
          <Logo src={logo} alt="책산책 로고" />
        </LogoButton>
      </LogoSection>
      <IconSection>
        <IconButton>
          <Icon src={star} alt="즐겨찾기" />
        </IconButton>
        <IconButton>
          <Icon src={notification} alt="알림" />
        </IconButton>
      </IconSection>
    </HeaderContainer>
  );
}
