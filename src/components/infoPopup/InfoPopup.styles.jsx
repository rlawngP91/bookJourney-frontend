import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 393px;
  height: 250px;
  border-radius: 9px;
  background-color: #a3c7fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 131px;
  bottom: 0;
  z-index: 1001;
  p {
    margin: 0;
    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .line {
    display: block; /* inline-block 또는 block 설정 */
    margin: 6px auto 0; /* 상단 9px, 중앙 정렬 */
  }

  .first-line,
  .second-line {
    display: flex;
    cursor: pointer;

    .left-img {
      margin-left: 37px;
      margin-right: 12px;
    }
  }

  .first-line {
    margin-top: 31px;
  }

  .second-line {
    margin-top: 23px;
  }
`;
