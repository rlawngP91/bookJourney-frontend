// ValidTestInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './ValidTestInput.styles';

const ValidTestInput = ({ placeholder, labelText, value, onChange }) => {
  return (
    <InputWrapper>
      <LabelText>{labelText}</LabelText>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

ValidTestInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // 입력값을 부모에서 관리
  onChange: PropTypes.func.isRequired, // 입력 핸들러 (부모에서 제어)
  //  errorMessage: PropTypes.string, // 오류 메시지 (닉네임 중복 시 표시)
};

export default ValidTestInput;
