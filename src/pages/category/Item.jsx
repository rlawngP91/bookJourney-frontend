import React from 'react';
import PropTypes from 'prop-types';
import { CategoryItem } from './Item.styles';

const Item = ({ text, isSelected, canSelectMore, onToggleSelect }) => {
  const handleClick = () => {
    // 선택 가능 여부 판단
    if (!isSelected && !canSelectMore) return;
    onToggleSelect(); // 부모 컴포넌트에서 상태 업데이트
  };

  return (
    <CategoryItem isSelected={isSelected} onClick={handleClick}>
      <p>{text}</p>
    </CategoryItem>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired, // 선택 상태
  canSelectMore: PropTypes.bool.isRequired, // 선택 가능 여부
  onToggleSelect: PropTypes.func.isRequired, // 상태 업데이트 함수
};

export default Item;
