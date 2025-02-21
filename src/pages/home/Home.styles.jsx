import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 100vh;
`;

export const Container = styled.div`
  flex-grow: 1; /* 메인 콘텐츠가 남은 공간 차지 */
  position: relative;
  width: 393px;
  height: 852px;
  background-color: #f6f7f9;

  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 393px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 500; /* 팝업 아래 배경보다 높은 z-index */
  }

  .title {
    position: absolute;
    top: 73px;
    left: 20px;
  }

  .star {
    position: absolute;
    top: 80px;
    right: 74px;
    cursor: pointer;
  }

  .exit {
    position: absolute;
    top: 78px;
    right: 37px;
    cursor: pointer;
  }

  .user-name {
    position: absolute;
    top: 143px;
    left: 27px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);

    span {
      color: #000;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    }
  }

  .welcome {
    position: absolute;
    top: 173px;
    left: 27px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .best-seller {
    display: block;
    width: 139px;
    height: 198px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    top: 212px;
    left: 123px;
  }

  .description {
    position: absolute;
    top: 416px;
    right: 19px;
    color: #a3a3a3;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 200% */
    letter-spacing: 0.1px;
  }

  .circle-container {
    position: absolute;
    top: 429px;
    left: 168px;
    display: flex;
    gap: 12px;
    width: 54px;
    cursor: pointer;
  }

  .record-container {
    position: absolute; /* 위치를 절대값으로 설정 */
    top: 467px; /* 최상단 기준으로 467px 아래에 위치 */
    overflow-y: scroll;
    scrollbar-width: none; /*Firefox*/
    ::-webkit-scrollbar {
      display: none; /*Chrome, Safari, Opera*/
      width: 0px;
    }
    width: 392px;
    border-radius: 25px 25px 0px 0px;
  }

  .progress {
    position: relative;
    width: 392px;
    height: 399px;
    background-color: #fff;

    .place-holder-descrip.hidden,
    .place-holder-list.hidden {
      display: none;
    }

    .place-holder-list {
      box-sizing: border-box;
    }

    .place-holder-descrip {
      position: absolute;
      top: 113px;
      left: 130px;
      width: 150px;
      height: 121px;
    }
  }

  .book-room-info {
    position: relative;
    width: 392px;
    min-height: 701px;
    background-color: #f6f7f9;
    overflow-y: scroll;
    /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
    }
  }

  .progress-title {
    position: absolute;
    top: 27px;
    left: 27px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .recording-count {
    color: #a3a3a3;
  }

  .line1,
  .line2,
  .line3,
  .line4 {
    padding: 0;
    margin: 0;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .line4 {
    margin-top: 30px;
  }

  .nickname {
    color: #6aa5f8;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .btn {
    top: 68px;
    left: -110px;
  }

  .read-count-text {
    position: absolute;
    top: 359px;
    left: 27px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, -0.3px);
  }

  .book-info-container {
    position: absolute;
    top: 23px;
    left: 27px;
    width: 350px;
    height: 139px;
    display: flex;
    cursor: pointer;
  }

  .right-side {
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    gap: 4px; /* 요소 간 간격을 줄이기 */
  }

  .top-side {
    display: flex;
    gap: 9px;
  }

  .book-title {
    max-width: 180px;
    margin-top: 7px;
    margin-left: 11px;
    height: 21px;
    color: #000;
    font-size: 13.35px;
    font-weight: 700;
    line-height: 24.272px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
  }

  .reading-count {
    margin-top: 9px;
    width: 40.597px;
    height: 20.631px;
    flex-shrink: 0;
    border-radius: 13.976px;
    background: #6aa5f8;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 20.631px;
    letter-spacing: 0.1px;
  }

  .writer-name {
    height: 13px;
    line-height: 13px; /* 텍스트 줄 간격 */
    margin-left: 11px;
    color: #a3a3a3;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 12.136px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.121px;
  }

  .introduction-letter {
    margin-left: 11px;
    height: 63px;
    width: 230px;
    padding: 0;

    color: #a3a3a3;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 13.35px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 157.309% */
    letter-spacing: 0.133px;
  }

  .recruiting-room-info {
    position: absolute;
    top: 230px;
    width: 393px;
    min-height: 383px;
  }

  .recruiting-title {
    position: absolute;
    left: 27px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }

  .room-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 47.06px;
  }

  .footer-place-holder {
    height: 88px;
  }

  .arrow {
    position: absolute;
    top: 27px;
    right: 20px;
    cursor: pointer;
  }

  .book-scroll-container {
    display: flex;
    padding-top: 77px;
    margin-left: 27px;
    height: 239px;
    min-width: 360px;
    /* 스크롤 설정 */
    overflow-x: scroll; /* X축 방향 스크롤 활성화 */
    overflow-y: hidden; /* Y축 스크롤 비활성화 */

    /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  .book-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }

  .popup {
    position: fixed;
    top: 50%; /* 뷰포트 높이의 50% 위치 */
    left: 50%; /* 뷰포트 너비의 50% 위치 */
    transform: translate(
      -50%,
      -50%
    ); /* 자신의 크기만큼 이동하여 정확한 중앙에 위치 */
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
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 13px;
    font-weight: 600;
  }

  .popup-message {
    position: absolute;
    top: 52px;
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 12px;
  }

  .left-side {
    box-sizing: border-box;
    border: 1.8px solid transparent;
    border-radius: 6.576px;
    cursor: pointer;
    &:hover {
      border: 1.8px solid #6aa5f8;
    }
  }

  .popup-message2 {
    position: absolute;
    top: 69px;
    color: #000;
    width: 100%;
    text-align: center;
    font-size: 12px;
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
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 198px;
  margin-top: 212px;
  display: flex;
  justify-content: center;
  align-items: center;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .popup-wrapper {
    position: absolute;
  }
`;
