import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
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
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 68px;
    bottom: 0;
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
    font-family: var(--Label-Small-Font, Roboto);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
  }

  .remove-btn {
    border: 1px solid #cecbcb;
    background: #6aa5f8;
    color: #fff;
    font-family: var(--Label-Small-Font, Roboto);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
  }

  .place-holder {
    height: 44px;
    width: 100%;
  }

  .delete {
    position: absolute;
    top: 35px;
    right: 25px;
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    cursor: pointer;
  }

  .select-all-btn {
    position: absolute;
    top: 35px;
    right: 25px;
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    cursor: pointer;
  }
`;
