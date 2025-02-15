import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../assets/deleteBookChip.svg';

const ChipWrapper = styled.div`
  display: flex;
  padding: 7.8px 11px;
  align-items: center;
  gap: 4px;
  border-radius: 16.79px;
  border: 1px solid #6aa5f8;
  background: #fff;
  box-sizing: border-box;
  max-width: 365px;
  height: 30.783px;
  flex-shrink: 0;
  cursor: pointer;

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
    width: 8.41px;
    height: 8.41px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const BookChip = ({ text, onRemove, onClick }) => {
  return (
    <ChipWrapper onClick={() => onClick(text)}>
      <span>{text}</span>
      <img
        src={deleteIcon}
        alt="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      />
    </ChipWrapper>
  );
};
