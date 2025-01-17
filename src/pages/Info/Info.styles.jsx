import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #a3c7fa;
  width: 393px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 25px 0px 25px;
  position: relative;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .logo {
      width: 84px;
      height: 34px;
    }

    .exit {
      width: 24px;
      height: 24px;
    }
  }

  .book {
    position: absolute;
    width: 343px;
    top: 160px;
    display: flex;
    flex-direction: column;

    img {
      padding-top: 44px;
      padding-left: 81.5px;
      height: 264px;
      width: 180px;
    }

    div {
      width: 77px;
      height: 24px;
      flex-shrink: 0;
      border-radius: 25px;
      background-color: #fff;

      color: black;
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      text-align: center;
      line-height: 24px;
    }
  }
`;

export const Body = styled.div`
  width: 393px;
  height: 896px;
  border-radius: 23px;
  background-color: #fef7f7;
  margin-top: 330px;
`;
