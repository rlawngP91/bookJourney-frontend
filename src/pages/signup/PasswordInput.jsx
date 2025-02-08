import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './PasswordInput.styles';
const PasswordInput = ({
  placeholder,
  labelText,
  className,
  value,
  onChange,
}) => {
  return (
    <InputWrapper className={className}>
      <LabelText>{labelText}</LabelText>
      <StyledInput
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

PasswordInput.propTypes = {
  placeholder: PropTypes.string.isRequired, //placeholder는 필수
  labelText: PropTypes.string.isRequired, // labelText는 필수
  className: PropTypes.string, // 클래스명은 필수 아님
  value: PropTypes.string.isRequired, // value는 필수
  onChange: PropTypes.func.isRequired, // onChange는 필수 (입력 변경 감지를 위해)
};

export default PasswordInput;
export { InputWrapper, StyledInput, LabelText };
