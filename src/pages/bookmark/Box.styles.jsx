import styled from 'styled-components';

export const Container = styled.div`
  width: 303px;
  height: 123px;
  margin-bottom: 24px;
  margin-left: 32px;
  display: flex;

  .cover {
    width: 84px;
    height: 123px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .right {
    position: relative;
    width: 205px;
    padding-right: 15px;
  }

  .writer {
    position: absolute;
    left: 26px;
    top: 42px;
    color: #757373;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 160% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
  }

  .bookTitle {
    position: absolute;
    width: 166px;
    top: 66px;
    left: 25px;
    color: var(--sds-color-text-default-default);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
  }

  .check-icon {
    width: 24px;
    height: 24px;
    margin-top: 49.5px;
    left: 300px;
    cursor: pointer;
  }
`;
