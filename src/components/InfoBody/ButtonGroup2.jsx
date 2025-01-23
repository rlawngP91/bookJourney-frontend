import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  width: 393px;
  height: 42px;
  gap: 18px;
  flex-direction: row;
  display: flex;
  background-color: transparent;
  padding: 0px 21px 0px 21px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 167px;
  height: 42px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;

  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */

  color: #fff;
  font-family: var(--Label-Small-Font, Roboto);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  letter-spacing: 0.5px;
`;

export default function ButtonGroup2() {
  return (
    <ButtonGroupWrapper>
      <Button>미리보기</Button>
      <Button>같이읽기</Button>
    </ButtonGroupWrapper>
  );
}
