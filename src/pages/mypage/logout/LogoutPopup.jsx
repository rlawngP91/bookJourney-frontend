import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PopupOverlay,
  PopupContainer,
  Title,
  Message,
  ButtonContainer,
  CancelButton,
  LogoutButton,
} from './LogoutPopup.styles';

export default function LogoutPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContainer>
        <Title>로그아웃</Title>
        <Message>로그아웃하시겠습니까?</Message>
        <ButtonContainer>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </ButtonContainer>
      </PopupContainer>
    </PopupOverlay>
  );
}
