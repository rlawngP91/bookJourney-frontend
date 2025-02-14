import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RoomPasswordPopup from '../popup/roomPasswordPopup/RoomPasswordPopup';

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
// 방참가 API 연동필요!
export default function ButtonGroup2({ roomData, roomId }) {
  const navigate = useNavigate();

  const [popupVisible, setPopupVisible] = useState(false);

  const handleRecordClick = () => {
    if (roomData.member) {
      // ✅ 멤버라면 네비게이트
      if (roomId) {
        navigate(`/rooms/${roomId}/info`);
      } else {
        console.error('roomId가 라우터 파라미터로 전달되지 않았습니다.');
      }
    } else {
      // ✅ 멤버가 아니라면 팝업 띄우기
      setPopupVisible(true);
    }
  };

  return (
    <ButtonGroupWrapper>
      <Button onClick={() => navigate(`/rooms/${roomId}/preview`)}>
        미리보기
      </Button>
      <Button onClick={handleRecordClick}>기록하기</Button>
      {popupVisible && (
        <RoomPasswordPopup
          onClose={() => setPopupVisible(false)}
          roomId={roomId}
        />
      )}
    </ButtonGroupWrapper>
  );
}
