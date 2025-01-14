import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './UserInputField.styles';

const UserInputField = ({ placeholder, labelText }) => {
  return (
    <InputWrapper>
      {/* labelText는 항상 표시됩니다 */}
      <LabelText>{labelText}</LabelText>
      <StyledInput placeholder={placeholder} />
    </InputWrapper>
  );
};

UserInputField.propTypes = {
  placeholder: PropTypes.string.isRequired, //placeholder는 필수
  labelText: PropTypes.string.isRequired, // labelText는 필수
};

export default UserInputField;
export { InputWrapper, StyledInput, LabelText };