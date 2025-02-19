import styled from 'styled-components';

export const Container = styled.div`
  width: 303px;
  height: 123px;
  margin-bottom: 24px;
  margin-left: 32px;
  display: flex;
  cursor: pointer;

  .cover {
    width: 84px;
    height: 123px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .right {
    position: relative;
    display: flex;
    align-items: center;
    width: 225px;
    padding-right: 15px;
  }

  .info-container {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .writer {
    width: 165px;
    color: #757373;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
  }

  .bookTitle {
    width: 166px;
    color: var(--sds-color-text-default-default);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
    letter-spacing: var(--Label-Small-Tracking, 0.5px);
    overflow: hidden; // 을 사용해 영역을 감출 것
    display: -webkit-box; /* flexbox와 유사한 CSS 속성 */
    -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
    -webkit-box-orient: vertical; /* 박스의 방향을 수직으로 설정 */
  }

  .check-icon {
    width: 24px;
    height: 24px;
    margin-top: 49.5px;
    margin-left: 23px;
    left: 300px;
    cursor: pointer;
  }
`;
