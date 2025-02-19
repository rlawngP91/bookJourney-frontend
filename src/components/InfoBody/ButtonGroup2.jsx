import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RoomPasswordPopup from '../popup/roomPasswordPopup/RoomPasswordPopup';
import { postEnterRoom } from '../../apis/postEnter';
import ToastPopup from '../ToastPopup/ToastPopup';

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
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTitle, setToastTitle] = useState('');

  // ✅ 방 참가 처리 함수
  const handleEnterRoom = async (password = '') => {
    try {
      const response = await postEnterRoom(roomId, password);
      console.log('✅ 방 참가 성공:', response);

      // ✅ 성공 시 방 정보 페이지로 이동
      setToastTitle('방 참가 성공');
      setToastMessage('방에 성공적으로 입장하였습니다.');
      navigate(`/rooms/${roomId}/info`);
    } catch (error) {
      console.error('❌ 방 참가 실패:', error.message);
      setToastTitle('같이읽기 방 참가하기');
      setToastMessage(error.message); // ✅ API에서 던진 에러 메시지를 사용자에게 표시
    } finally {
      setPopupVisible(false); // ✅ 팝업 닫기
    }
  };

  const handleRecordClick = () => {
    if (roomData?.member) {
      // ✅ 이미 멤버라면 바로 이동
      if (roomId) {
        navigate(`/rooms/${roomId}/info`);
      } else {
        console.error('roomId가 라우터 파라미터로 전달되지 않았습니다.');
      }
    } else {
      // ✅ 비공개 방이면 비밀번호 팝업 띄우기
      if (roomData?.public === false) {
        setPopupVisible(true);
        return;
      }

      // ✅ 공개 방이면 바로 참가
      handleEnterRoom();
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
          onSubmit={handleEnterRoom} // ✅ 비밀번호 팝업에서 입력 후 API 호출
        />
      )}

      {toastMessage && (
        <ToastPopup
          title={toastTitle}
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </ButtonGroupWrapper>
  );
}
