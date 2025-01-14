import React from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import { CategoryItem } from './Item.styles';
const Item = ({ text }) => {
  return (
    <CategoryItem>
      <p>{text}</p>
    </CategoryItem>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired, // text는 필수 string 타입
};

export default Item;
