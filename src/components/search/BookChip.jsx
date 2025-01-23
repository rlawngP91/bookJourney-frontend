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
  box-sizing: border-box;
  width: 74.475px;
  height: 30.783px;
  flex-shrink: 0;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Roboto;
    font-size: 10.923px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.86px; /* 181.818% */
    letter-spacing: 0.109px;
  }

  img {
    width: 6.951px;
    height: 6.951px;
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
