import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  flex-shrink: 0;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  width: 60%;
  max-width: 290px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 18.2px */
`;

export const Message = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 140%; /* 16.8px */
`;

export const ButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
  margin: 0 -24px -24px -24px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:first-child {
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-bottom-right-radius: 12px;
    border-left: 1px solid #e5e7eb;
  }
`;

export const CancelButton = styled(Button)`
  color: #374151;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const LogoutButton = styled(Button)`
  color: #ef4444;

  &:hover {
    background-color: #fee2e2;
  }
`;
