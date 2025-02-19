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
import { logout } from '../../../apis/logoutApi';
export default function LogoutPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout(); // 로그아웃 API 호출
    if (success) {
      navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
    } else {
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
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
