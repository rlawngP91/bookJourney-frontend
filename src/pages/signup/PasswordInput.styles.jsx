import styled from 'styled-components';

// Wrapper로 감싸서 전체 스타일을 지정합니다.
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 42.759px;
  flex-shrink: 0;
  position: relative; /* 위치가 겹치지 않게 하기 위해 relative 추가 */
  left: 25px;
  padding-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border-radius: 21px;
  border: 1px solid white;
  background: #fff;
  font-size: 16px;

  ::placeholder {
    color: #aaa;
  }
`;

// labelText를 표시할 div 스타일링
export const LabelText = styled.div`
  position: absolute;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  position: absolute;
  top: -32px; /* 인풋 위에 위치하도록 조정 */
  left: 21px;
  pointer-events: none; /* 클릭을 방지하려면 pointer-events를 none으로 설정 */
`;
