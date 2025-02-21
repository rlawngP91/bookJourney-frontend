import styled from 'styled-components';

export const Container = styled.div`
  width: 353px;
  height: 53.15px;
  margin-bottom: 11.03px;

  border-radius: 9.026px;
  background-color: #fff;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border: 1.114px solid transparent;
  &:hover {
    border: 1.114px solid #6aa5f8;
  }

  .left-side {
    border: none;
    margin-left: 14px;
    margin-right: 12.09px;
    img {
      margin-right: 3px;
      width: 13.037px;
      height: 12.543px;
      z-index: 1000;
    }
  }

  .left-side span {
    color: #000;
    font-family: Pretendard;
    font-size: 12.034px;
    font-style: normal;
    font-weight: 500;
    line-height: 53.15px; /* 133.333% */
    letter-spacing: 0.501px;
  }

  .room-title {
    width: 130px;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Pretendard;
    font-size: 12.17px;
    font-style: normal;
    font-weight: 600;
    line-height: 53.15px;
    letter-spacing: 0.122px;
  }

  .room-book-title {
    width: 134px;
    margin-top: 10px;
    text-align: center;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    color: #000;
    font-size: 12.17px;
    font-style: normal;
    font-weight: 500;
  }

  .period {
    color: #b3b3b3;
    font-size: 11.031px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.045px; /* 145.455% */
    letter-spacing: 0.501px;
  }
`;
