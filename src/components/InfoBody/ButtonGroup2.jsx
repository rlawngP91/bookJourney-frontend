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
  cursor: pointer;

  color: #fff;
  font-family: Pretandard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 106.667% */
  letter-spacing: 0.5px;
`;

export const Button1 = styled.button`
  width: 167px;
  height: 42px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: ${(props) => (props.$public ? '#6aa5f8' : '#A9A9A9')};

  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */
  cursor: ${(props) => (props.$public ? 'pointer' : 'not-allowed')};

  color: #fff;
  font-family: Pretandard;
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
    if (roomData?.member) {
      // ✅ 멤버이면 바로 네비게이트 실행
      if (roomId) {
        navigate(`/rooms/${roomId}/info`);
      } else {
        console.error('roomId가 라우터 파라미터로 전달되지 않았습니다.');
      }
    } else {
      // ✅ 멤버가 아니고, 방이 비공개(`public === false`)라면 비밀번호 팝업 띄우기
      if (roomData?.public === false) {
        setPopupVisible(true);
        return;
      }

      // ✅ 멤버가 아니지만 방이 공개(`public === true`)라면 네비게이트 실행
      navigate(`/rooms/${roomId}/info`);
    }
  };

  return (
    <ButtonGroupWrapper>
      <Button1
        onClick={() => navigate(`/rooms/${roomId}/preview`)}
        disabled={!roomData?.public} // roomData가 없거나 public이 false면 비활성화
        $public={roomData?.public} // Styled Components에서 사용할 prop
      >
        미리보기
      </Button1>
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
