import React from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import { Container } from './BlueBtn.styles';

const BlueBtn = ({ text, className, disabled, width }) => {
  return (
    <Container className={className} disabled={disabled} width={width}>
      <p>{text}</p>
    </Container>
  );
};

BlueBtn.propTypes = {
  text: PropTypes.string.isRequired, // text는 필수 string 타입
  className: PropTypes.string, // className은 선택 사항
  disabled: PropTypes.bool, // disable 속성 추가
  width: PropTypes.string, // width는 선택 사항 (예: '200px')
};

BlueBtn.defaultProps = {
  disabled: false, // 기본값은 클릭 가능 상태
  width: '353px', // 기본 width
};

export default BlueBtn;
