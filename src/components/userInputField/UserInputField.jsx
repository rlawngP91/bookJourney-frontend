import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, LabelText } from './UserInputField.styles';

const UserInputField = ({ placeholder, labelText, value, onChange }) => {
  return (
    <InputWrapper>
      {/* labelText가 있을 때만 표시 */}
      {labelText && <LabelText>{labelText}</LabelText>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

UserInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UserInputField;
export { InputWrapper, StyledInput, LabelText };
