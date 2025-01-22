import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../assets/deleteBookChip.svg';

const ChipWrapper = styled.div`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  background: #f5f5f5;
  width: calc(25% - 12px); // 4개씩 정렬을 위한 너비 설정
  box-sizing: border-box;

  span {
    font-family: Pretendard;
    font-size: 12px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const BookChip = ({ text, onRemove }) => {
  return (
    <ChipWrapper>
      <span>{text}</span>
      <img src={deleteIcon} alt="remove" onClick={onRemove} />
    </ChipWrapper>
  );
};
