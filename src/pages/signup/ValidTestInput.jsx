// ValidTestInput.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText, AlertText } from './ValidTestInput.styles';

const ValidTestInput = ({ placeholder, labelText, validateInput }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true); // true: valid or not checked, false: invalid

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(validateInput(value));
  };

  return (
    <InputWrapper>
      <LabelText>{labelText}</LabelText>
      <StyledInput 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={handleChange} 
      />
      {!isValid && <AlertText>이미 존재하는 아이디입니다.</AlertText>}
    </InputWrapper>
  );
};

ValidTestInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  validateInput: PropTypes.func.isRequired, // Function to validate the input
};

export default ValidTestInput;
