import React from 'react';
import styled from 'styled-components';
import checkmark from '../../assets/checkmark.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

const PopupContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'normal')};
  border: none;
  background: none;

  &:hover {
    background-color: #f9fafb;
  }
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
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
              {getCurrentTypeId($currentType) === type.id && (
                <CheckIcon src={checkmark} alt="selected" />
              )}
            </SelectButton>
          ))}
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default BookTypePopup;
