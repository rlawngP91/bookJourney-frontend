// ValidTestInput.styles.jsx
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 246px;
  height: auto;
  flex-shrink: 0;
  position: relative;
  left: 25px;
  padding-bottom: 6.1px; /* Adjusted padding */
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 42.759px;
  padding-left: 20px;
  border-radius: 21px;
  background: #fff;
  border: 1px solid #ddd;
  font-size: 16px;
  padding-right: 70px;
  ::placeholder {
    color: #aaa;
  }
`;

export const LabelText = styled.div`
  position: absolute;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  top: -35px;
  left: 10px;
  pointer-events: none;
`;

export const AlertText = styled.p`
  margin: 0;
  height: 16px;
  width: 152px;
  color: #fd7472;
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;
