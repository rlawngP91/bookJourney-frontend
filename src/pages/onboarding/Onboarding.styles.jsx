import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .logo {
    position: absolute;
    top: 285px;
    left: 118px;
    width: 158px;
    height: 158px;
  }

  .title {
    position: absolute;
    top: 470px;
    left: 155px;
  }

  .user-hello {
    position: absolute;
    top: 531px;
    width: 100%;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
  }

  .blue-btn {
    position: absolute;
    top: 628px;
    left: 19px;
  }
`;
