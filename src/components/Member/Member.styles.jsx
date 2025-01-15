import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 22px;
  padding-right: 24px;

  img {
    width: 40px;
    height: 40px;
  }

  .title {
    color: #000;
    font-family: Pretendard;
    font-size: 12.574px;
    font-style: normal;
    font-weight: 500;
    line-height: 17.963px; /* 142.857% */
  }

  .nickname {
    color: #939393;
    font-family: Pretendard;
    font-size: 11.158px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.963px; /* 160.988% */
  }
  .percent {
    width: 40px;
    height: 20px;
    border-radius: 13.976px;
    background: #6aa5f8;

    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Roboto;
    font-size: 7.321px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.073px;

    display: flex;
    justify-content: center;
    line-height: 20px;
  }
`;
