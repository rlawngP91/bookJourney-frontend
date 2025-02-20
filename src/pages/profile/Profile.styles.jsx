import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  background-color: #f6f7f9;
  .title {
    position: absolute;
    top: 97px;
    left: 155px;
    z-index: 10;
  }

  .profileImg {
    position: absolute;
    top: 243px;
    left: 118px;
    width: 158px;
    height: 158px;
    border-radius: 50%;
  }

  .plus-btn {
    position: absolute;
    top: 373px;
    left: 239px;
    width: 28px;
    height: 28px;
    background-color: #a3c7fa;
    border-radius: 50%;
    filter: drop-shadow(0px 3.5px 3.5px rgba(0, 0, 0, 0.25));
    z-index: 10;
    cursor: pointer;
    display: flex; /* 플렉스박스 사용 */
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
  }

  .plus-icon {
    width: 21px; /* 아이콘 크기 */
    height: 21px; /* 아이콘 크기 */
    z-index: 15;
  }

  .duplicate-check {
    position: absolute;
    z-index: 100;
    top: 487px;
    left: 307px;
    color: #a3a3a3;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    align-self: flex-end; /* 오른쪽 끝에 위치하게 설정 */
  }

  & > *:nth-child(5) {
    position: absolute;
    top: 472px;
  }

  .btn-container {
    width: 393px;
    position: absolute;
    top: 646px;
    display: flex;
    justify-content: space-evenly;

    & > *:first-child {
      border-radius: 9px !important;
    }
  }

  .back-btn {
    width: 167px;
    height: 42px;
    border-radius: 5px;
    background-color: #a3a3a3;
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    cursor: pointer;
    p {
      color: #fff;
      text-align: center;
      font-family: var(--Label-Medium-Font, Roboto);
      font-size: 14px;
      line-height: 14px;
      font-style: normal;
      font-weight: 500;
    }
  }

  .nickname-result-msg {
    position: absolute;
    top: 523px;
    left: 34px;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
  }
`;
