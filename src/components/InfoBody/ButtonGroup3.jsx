import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonGroupWrapper = styled.div`
  width: 393px;
  height: 42px;
  gap: 18px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  background-color: transparent;
`;

export const Button = styled.button`
  width: 351px;
  height: 42px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;

  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */
`;
//책검색해서 왔을때!
export default function ButtonGroup3({ isbn }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/makereadwith/${isbn}`);
  };
  return (
    <ButtonGroupWrapper>
      <Button onClick={handleClick}>방 생성하기</Button>
    </ButtonGroupWrapper>
  );
}
