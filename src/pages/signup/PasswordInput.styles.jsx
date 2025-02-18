// PasswordInput.styles.jsx
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 42.759px;
  flex-shrink: 0;
  position: relative;
  left: 25px;
  padding-bottom: 16px;

  .toggle-icon {
    position: absolute;
    right: -60px; /* 우측 끝선 기준 30px 안쪽 */
    top: 11px; /* 수직 중앙 */
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 70px; /* toggle-icon 공간 확보 */
  border-radius: 21px;
  border: 1px solid white;
  background: #fff;
  font-size: 16px;

  ::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 1.7px solid #6aa5f8;
    outline: none;
  }
`;

export const LabelText = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  top: -32px;
  left: 21px;
  pointer-events: none;
`;
