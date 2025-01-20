import React from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import { Container } from './BlueBtn.styles';

const BlueBtn = ({ text, className, disabled }) => {
  return (
    <Container className={className} disabled={disabled}>
      <p>{text}</p>
    </Container>
  );
};

BlueBtn.propTypes = {
  text: PropTypes.string.isRequired, // text는 필수 string 타입
  className: PropTypes.string, // className은 선택 사항
  disabled: PropTypes.bool, // disable 속성 추가
};

BlueBtn.defaultProps = {
  disabled: false, // 기본값은 클릭 가능 상태
};

export default BlueBtn;
