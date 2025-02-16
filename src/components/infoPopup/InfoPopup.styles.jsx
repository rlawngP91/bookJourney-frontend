import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 24px;
  left: 21px;
  width: 351px;
  height: 100px;
  border-radius: 9px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1001;

  p {
    margin: 0;
    width: 100%;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
  }

  .line {
    display: block; /* inline-block 또는 block 설정 */
    margin: 6px auto 0; /* 상단 9px, 중앙 정렬 */
  }

  .first-line,
  .second-line {
    display: flex;
    height: 50px;
    cursor: pointer;
    /*
    .left-img {
      margin-left: 37px;
      margin-right: 12px;
    }
      */
  }

  .first-line {
    border-bottom: 1px solid #cecbcb;
  }

  .info {
    z-index: 1000;
  }
`;
