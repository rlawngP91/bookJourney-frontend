import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 2000;
`;

export const Container = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 23px;
`;

export const Button = styled.div`
  width: 351px;
  height: 50px;

  text-align: center;
  color: #6aa5f8;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background-color: #fff;
  line-height: 50px;
`;

export const Button2 = styled.div`
  width: 351px;
  height: 42px;

  color: #6aa5f8;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background-color: #fff;
  text-align: center;
  line-height: 42px;
`;
