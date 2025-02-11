import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import infomationIcon from '../../assets/infomation.svg';

const PopupOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
  height: 100%;
`;

const PopupContent = styled.div`
  background: white;
  width: 100%;
  padding: 32px 24px;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PopupItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
  }
`;

const BookInfoPopup = ({ onClose, onBookInfoClick, roomId }) => {
  const navigate = useNavigate();

  const handleBookInfoClick = () => {
    onBookInfoClick();
    navigate(`/rooms/${roomId}`);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <PopupOverlay onClick={handleOverlayClick}>
      <PopupContent>
        <PopupItem onClick={handleBookInfoClick}>
          <img src={infomationIcon} alt="info" />
          <span>책 및 방 정보</span>
        </PopupItem>
      </PopupContent>
    </PopupOverlay>
  );
};

export default BookInfoPopup;
