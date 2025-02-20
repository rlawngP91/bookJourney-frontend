import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  background-color: #f6f7f9;

  .start-btn {
    position: absolute;
    left: 21px;
    bottom: 24px;
  }
  /*
  .forget-question {
    position: absolute;
    top: 437px;
    left: 29px;
    font-size: 14px;
    font-style: normal;
    text-decoration-line: underline;
    cursor: pointer;
  }
    */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 25px;
  gap: 108px;

  position: absolute;
  top: 0;
  left: 0;

  width: 393px;
  height: 105px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-top: 81px;
`;

export const Content = styled.div`
  position: absolute;
  top: 157px;
  width: 100%;
  height: 238px;

  .input1 {
    position: absolute;
    top: 30px;
  }

  .input2 {
    position: absolute;
    top: 138px;
  }

  .input3 {
    position: absolute;
    top: 197px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: #fd7472;
  font-size: 11px;
  margin: 0;
  left: 34px;
  top: 234.86px;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  z-index: 1000;
`;

export const MatchMessage = styled.p`
  color: ${(props) => (props.isMatch ? '#6AA5F8' : '#FD7472')};
  margin: 0;
  position: absolute;
  left: 34px;
  top: 245.5px;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
`;
