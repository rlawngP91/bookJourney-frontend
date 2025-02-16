import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 393px; // 393px고정
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.42);
  z-index: 50;
`;

const PopupContainer = styled.div`
  position: fixed;
  width: 351px; // 좌우 margin더하면 393px
  bottom: 24px;
  left: 21px;
  right: 21px;
  background-color: white;
  box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  z-index: 51; // Overlay보다 높게 설정
`;

const PopupContent = styled.div`
  padding: 16px;
`;

const SelectButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'normal')};
  color: ${(props) => (props.$isSelected ? '#6AA5F8' : '#808080')};
  border: none;
  background: none;

  &:hover {
    background-color: #f9fafb;
  }
`;

const BookTypePopup = ({ onSelect, onClose, $currentType }) => {
  const bookTypes = [
    { id: 'book', label: '책 제목' },
    { id: 'author', label: '작가 이름' },
    { id: 'room', label: '방 이름' },
  ];

  const handleSelect = (typeId) => {
    onSelect(typeId);
  };

  // currentType에 해당하는 id 찾기
  const getCurrentTypeId = (label) => {
    const type = bookTypes.find((type) => type.label === label);
    return type ? type.id : '';
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <PopupContent>
          {bookTypes.map((type) => (
            <SelectButton
              key={type.id}
              onClick={() => handleSelect(type.id)}
              $isSelected={getCurrentTypeId($currentType) === type.id}
            >
              <span>{type.label}</span>
            </SelectButton>
          ))}
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default BookTypePopup;
