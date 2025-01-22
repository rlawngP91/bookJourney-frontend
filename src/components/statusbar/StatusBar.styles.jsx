import styled from 'styled-components';

export const StyledDiv = styled.div`
  //position: absolute;
  position: fixed;
  top: 0;
  width: 393px;
  height: 46.5px;
  display: flex;
  z-index: 1000;

  .notch {
    width: 169px;
    height: 33px;
    flex-shrink: 0;
  }

  .group {
    width: 78.3px;
    height: 13px;
    flex-shrink: 0;
  }

  div:nth-of-type(1) {
    padding-right: 23px;
  }

  div:nth-of-type(2) {
    padding-right: 5px;
  }

  div:nth-of-type(3) {
    padding-top: 19px;
  }
`;
