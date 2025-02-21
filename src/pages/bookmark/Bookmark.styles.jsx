import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  background-color: #f6f7f9;
  .arrow {
    position: absolute;
    top: 81px;
    left: 26px;
    cursor: pointer;
  }

  .bookmark-book {
    position: absolute;
    width: 191px;
    height: 23px;
    flex-shrink: 0;
    top: 82px;
    left: 101px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .content-container {
    position: absolute;
    top: 115px;
    width: 100%;
    height: 669px;
    overflow: scroll;
    /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
    }
  }

  .no-bookmark {
    position: absolute;
    left: 142px;
    top: 344px;
    color: #a3a3a3;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .btn-container {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    width: 393px;
    height: 68px;
    padding: 20px 0px;
  }

  .cancel-btn,
  .remove-btn {
    width: 167px;
    height: 42px;
    border-radius: 9px;
    text-align: center;
    cursor: pointer;
  }

  .cancel-btn {
    border: 1px solid #cecbcb;
    color: #a3a3a3;
    font-size: 15px;
    font-weight: 500;
    line-height: 42px;
  }

  .remove-btn {
    //border: 1px solid #cecbcb;
    background: #6aa5f8;
    color: #fff;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
  }

  .place-holder {
    height: 84px;
    width: 100%;
  }

  .delete {
    position: absolute;
    top: 35px;
    right: 25px;
    color: #a3a3a3;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .select-all-btn {
    position: absolute;
    top: 35px;
    right: 25px;
    color: #a3a3a3;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
  }

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 268px;
    height: 144px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 2.73px 2.73px 0px rgba(0, 0, 0, 0.25);
    z-index: 999;
  }

  .top {
    height: 97px;
    position: relative;
  }

  .popup-title {
    position: absolute;
    top: 24px;
    left: 99px;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }

  .popup-message {
    position: absolute;
    top: 55px;
    left: 63px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: var(--sds-typography-body-font-weight-regular);
  }

  .popup-message2 {
    width: 100%;
    position: absolute;
    top: 45px;
    text-align: center;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: var(--sds-typography-body-font-weight-regular);
  }

  .bottom {
    display: flex;
    border-top: 0.5px solid #a3a3a3;
    height: 47px;
  }

  .popup-cancel,
  .popup-delete {
    width: 134px;
    height: 47px;
    text-align: center;
    line-height: 47px;
    cursor: pointer;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }

  .popup-cancel {
    color: #a3a3a3;
  }

  .popup-delete {
    border-left: 0.5px solid #a3a3a3;
    color: #d25643;
  }

  .popup-ok {
    width: 100%;
    height: 47px;
    line-height: 47px;
    text-align: center;
    color: #6aa5f8;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 393px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 100; /* 팝업 아래 배경보다 높은 z-index */
  }

  .books-length {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 32px;
    top: 35px;
    font-size: 16px;
    font-weight: 600;
  }

  .books-count-num {
    position: absolute;
    color: #a3a3a3;
    left: 38px;
    font-size: 16px;
    font-weight: 600;
  }
`;
