import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 853px;
  background-color: rgba(0, 0, 0, 0.42);
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 45px 25px 0px 25px;

  .close {
    padding-bottom: 30px;
  }

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px 25px 10px 9px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export const Container = styled.div`
  height: 700px;
  width: 393px;
  position: fixed;
  bottom: 0;
  z-index: 1000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Review = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 20px;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 10px 0px 10px 40px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;
    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export const ReviewList = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 46px 25px 90px 55px;
  max-height: 400px;
  overflow-y: auto;

  /* ✅ 크롬, 사파리에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  position: absolute; /* ✅ 부모(Container) 내에서 위치 조정 */
  bottom: 0;
  z-index: 3000; /* ✅ 다른 요소 위에 나타나도록 설정 */
  width: 393px;
  height: auto; /* ✅ 높이를 자동 조절 */
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0px 25px 20px 25px;
  box-sizing: border-box;
  transition: height 0.2s ease-out; /* ✅ 자연스럽게 높이 변화 */

  .input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 342px;
    padding: 9.553px 15.285px;
    align-items: center;
    border-radius: 9px;
    background-color: #eff1f5;
    max-height: 244px;

    color: #a09cab;
    font-family: Pretendard;
    font-size: 14.33px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.106px; /* 133.333% */
    transition: ease-out; /* ✅ 자연스럽게 위로 확장되도록 설정 */
  }
`;

export const Input = styled.input`
  display: flex;
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  border-radius: 9px; /* 둥근 모서리 */
  font-size: 14px;
  outline: none; /* 클릭 시 기본 아웃라인 제거 */
  color: #000; /* 글자색 */
  width: 100%; /* 부모 요소 크기만큼 확장 */
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  resize: none;
  overflow: hidden;
  height: 20px; /* ✅ 기본 높이 */
  max-height: 244px; /* ✅ 최대 높이 설정 */
  border-radius: 9px;
  color: #000;
  width: 100%;
  position: relative;
  top: 0; /* ✅ 기본적으로 위에서 시작 */
  transition: ease-out; /* ✅ 자연스럽게 위로 확장되도록 설정 */
`;
