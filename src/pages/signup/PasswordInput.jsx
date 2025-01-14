import React from 'react'
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './PasswordInput.styles';
const PasswordInput = ({ placeholder, labelText, className }) => {
  return (
      <InputWrapper className={className}>
        {/* labelText는 항상 표시됩니다 */}
        <LabelText>{labelText}</LabelText>
        <StyledInput placeholder={placeholder} />
      </InputWrapper>
    );
  };
  
  PasswordInput.propTypes = {
    placeholder: PropTypes.string.isRequired, //placeholder는 필수
    labelText: PropTypes.string.isRequired, // labelText는 필수
    className: PropTypes.string // 클래스명은 필수 아님
  };
  
  export default PasswordInput;
  export { InputWrapper, StyledInput, LabelText };