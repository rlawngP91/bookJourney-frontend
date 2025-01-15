import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 398px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 31px;
  padding-top: 61px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 31px;
  padding-top: 34px;
  gap: 8px;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20.553px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;

export const Duration = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 31px;
  padding-top: 15px;
`;

export const PercentBar = styled.div`
  width: 343px;
  padding: 25px 25px;

  .totalpercent {
    width: 100%;
    height: 3px;
    background-color: #d9d9d9;
  }

  .nowpercent {
    width: 75%;
    height: 3px;
    background-color: #6aa5f8;
  }
`;

export const Type = styled.div`
  padding-left: 31px;
  color: #000;
  font-family: Pretendard;
  font-size: 14.648px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.div`
  width: 80px;
  height: 20px;
  text-align: center;
`;
