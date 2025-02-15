import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .header {
    width: 393px;
    height: 109px;
    padding-top: 46.5px;
    border-bottom: 6px solid rgba(171, 171, 171, 0.12);
  }

  .title-message {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 82px;
    margin: auto;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .nickname {
    width: 100px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .back-btn {
    position: absolute;
    top: 83px;
    left: 26px;
    cursor: pointer;
    z-index: 1000;
  }

  .total {
    margin: 0;
    position: absolute;
    top: 126px;
    left: 32px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);

    .number {
      color: #a3a3a3;
    }
  }

  .sort {
    display: flex;
    align-items: center;
    gap: 3px;
    position: absolute;
    top: 128px;
    right: 35px;
    margin: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    vertical-align: middle;
    cursor: pointer;
  }

  .sort-img {
    top: 2px;
  }

  .popup {
    position: absolute;
    width: 100%;
    height: 131px;
    bottom: 0;
    background-color: #fff;
    border-radius: 9px 9px 0 0;
    z-index: 2000;
  }

  .line {
    position: absolute;
    top: 9px;
    left: 161px;
  }

  .order-text {
    margin-left: 25px;
    color: #000;
    font-family: Pretendard;
    font-size: var(--sds-typography-body-size-small);
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 393px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 100; /* 팝업 아래 배경보다 높은 z-index */
  }

  .latest-order,
  .progressive-order {
    width: 367px;
    padding-right: 26px;
    position: relative;
    margin-top: 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: grid; /* Grid 레이아웃 사용 */
    grid-template-columns: repeat(2, 1fr); /* 한 행에 2개 배치 */
    gap: 24.89px 38.15px; /* 세로: 24.89px, 가로: 38.15px */
    width: 327.85px;
    height: 604.94px;

    padding: 39px 33.15px 46.06px 32px;

    overflow-y: auto; /* Y축 스크롤 활성화 */
    scrollbar-width: none; /* Firefox에서 스크롤 바 숨기기 */
    -ms-overflow-style: none; /* IE/Edge에서 스크롤 바 숨기기 */
  }

  .content::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤 바 숨기기 */
  }

  #popup1 {
    position: fixed;
    top: 234px;
    left: 63px;
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
    left: 71px;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }

  .popup-message {
    position: absolute;
    top: 52px;
    left: 66px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: var(--sds-typography-body-font-weight-regular);
  }

  .popup-message2 {
    position: absolute;
    top: 69px;
    left: 49px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: var(--sds-typography-body-font-weight-regular);
  }

  .popup-bottom {
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

  .info-popup {
    position: absolute;
    bottom: 0;
  }
`;
