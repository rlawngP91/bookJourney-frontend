import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './UserInputField.styles';

const UserInputField = ({ placeholder, labelText }) => {
  return (
    <InputWrapper>
      {/* labelText는 값이 있을 때만 표시 */}
      <LabelText>{labelText}</LabelText>
      <StyledInput placeholder={placeholder} />
    </InputWrapper>
  );
};

UserInputField.propTypes = {
  placeholder: PropTypes.string.isRequired, //placeholder는 필수
  labelText: PropTypes.string, // labelText는 선택
};

export default UserInputField;
export { InputWrapper, StyledInput, LabelText };
