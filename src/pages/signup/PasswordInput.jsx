// PasswordInput.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './PasswordInput.styles';
import EyesOff from '../../assets/eye.svg';
import Eyes from '../../assets/eyeoff.svg';

const PasswordInput = ({
  placeholder,
  labelText,
  className,
  value,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputWrapper className={className}>
      <LabelText>{labelText}</LabelText>
      <StyledInput
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img
        className="toggle-icon"
        src={isPasswordVisible ? EyesOff : Eyes}
        alt={isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
        onClick={togglePasswordVisibility}
      />
    </InputWrapper>
  );
};

PasswordInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
export { InputWrapper, StyledInput, LabelText };
