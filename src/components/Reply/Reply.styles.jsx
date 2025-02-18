import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed; /* 화면에 고정된 위치 */
  z-index: 2000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 394px;
  height: 852px;
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 45px 25px 0px 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .close {
    padding-bottom: 30px;
  }

  .all {
    display: flex;
    flex-direction: row;
    gap: 14px;

    .h {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .m {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px;

        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }

        .p {
          color: #6aa5f8;
          text-align: center;
          font-family: Pretendard;
          font-size: 10.778px;
          font-style: normal;
          font-weight: 600;
        }
      }
    }

    .gg {
      display: flex;
      flex-direction: column;
      height: auto;
      width: 343px;

      .tt {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .f {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          .n {
            color: #000;
            font-family: Pretendard;
            font-size: 12.574px;
            font-style: normal;
            font-weight: 500;
          }
          .t {
            color: #939393;
            font-family: Pretendard;
            font-size: 11.158px;
            font-style: normal;
            font-weight: 400;
          }
        }
      }
    }

    .title2 {
      padding: 8px 0px;
      color: #6aa5f8;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
    }

    .pic {
      width: 14px;
      height: 14px;
    }
  }

  .c {
    padding: 6.5px 25px 10px 0px;
    width: 244px;
    height: auto;
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    /* ✅ 줄바꿈 강제 적용 */
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .b {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;
    font-size: 10.012px;
    font-weight: 400;
    padding-right: 10px;

    div {
      width: 13px;
    }

    .isLikedRecord {
      color: #000;
    }

    .isLikedRecord.liked {
      color: #6aa5f8;
    }
  }
`;

export const Container = styled.div`
  height: 740px;
  width: 393px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
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

  .head2 {
    display: flex;
    flex-direction: column;

    .ll {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .l {
        display: flex;
        flex-direction: row;
        gap: 12px;

        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }

        .nt2 {
          display: flex;
          flex-direction: row;
          gap: 20px;

          .name2 {
            color: #000;
            font-family: Pretendard;
            font-size: 12.574px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
          }

          .time2 {
            color: #939393;
            font-family: Pretendard;
            font-size: 11.158px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
          }
        }
      }
    }

    .content2 {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      width: 80%;
      padding-left: 38px;
      padding-bottom: 10px;
      word-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      overflow-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      white-space: pre-wrap; /* ✅ 줄바꿈 유지 */
    }

    .bottom2 {
      display: flex;
      flex-direction: row;
      gap: 7px;
      align-items: center;
      justify-content: end;
      font-family: Roboto;
      font-size: 10.012px;
      font-style: normal;
      font-weight: 400;
      padding-right: 10px;

      div {
        width: 13px;
      }

      .isLikedRecord {
        color: #000;
      }

      .isLikedRecord.liked {
        color: #6aa5f8;
      }
    }
  }
`;

export const ReviewList = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 46px 25px 55px 55px;
  max-height: 450px;
  overflow-y: auto;

  /* ✅ 크롬, 사파리에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
  width: 393px;
  height: auto; /* ✅ 자동 조절 */
  max-height: 244px; /* ✅ 최대 높이 설정 */
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0px 25px 20px 25px;
  box-sizing: border-box;
  transition: height 0.2s ease-out;
  flex-direction: column-reverse;
  overflow: hidden; /* ✅ Footer가 244px을 초과하지 않도록 제한 */

  .input {
    display: flex;
    flex-direction: column;
    width: 343px;
    background-color: #eff1f5;
    border-radius: 9px;
    box-sizing: border-box;
    padding: 23px 17px 17px 17px;
    position: relative;
    transition: all 0.3s ease-in-out;
    min-height: 115px;
    gap: 17px;

    .textarea {
      width: 100%;
      font-size: 14px;
      resize: none;
      overflow-y: auto; /* 내부 스크롤 */
      border: none;
      outline: none;
      background-color: transparent;
      max-height: 244px; /* ✅ 최대 높이 설정 */
      min-height: 47px;
      box-sizing: border-box; /* ✅ height 계산 시 padding 포함 */

      gap: 15px;
      /* 스크롤바 숨기기 */
      scrollbar-width: none; /* Firefox */
    }

    .textarea::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }

    .after {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .char-count {
        color: #a3a3a3;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }

      .send-button {
        cursor: pointer;
      }
    }
  }
`;
