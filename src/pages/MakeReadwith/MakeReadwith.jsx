import React, { useState, useRef } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button, ButtonContainer } from './MakeReadwith.styles';
import MakeReadwithTogether from '../../components/MakeReadwithTogether/MakeReadwithTogether';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출
import { useNavigate, useParams } from 'react-router-dom';
import ToastPopup from '../../components/ToastPopup/ToastPopup';

export default function MakeReadwith() {
  const navigate = useNavigate(); // ✅ useNavigate 사용
  const [selected, setSelected] = useState('혼자');
  const { isbn } = useParams();
  const makeReadwithTogetherRef = useRef(null); // ✅ `MakeReadwithTogether` 참조
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false); // ✅ 버튼 상태 관리
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTitle, setToastTitle] = useState('');

  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택

    if (option === '혼자') {
      setIsCreateButtonDisabled(false);
    }
  };

  const handleCreateRoom = async () => {
    if (isCreateButtonDisabled) return;

    try {
      let roomId = null;

      if (selected === '혼자') {
        const roomData = {
          isPublic: false,
          roomName: '',
          progressStartDate: '',
          progressEndDate: '',
          recruitCount: 1,
          password: '',
          isbn,
        };

        roomId = await createRoom(roomData);
        console.log(`🎉 혼자 읽기 방 생성 성공! roomId:`, roomId);
      } else if (selected === '같이' && makeReadwithTogetherRef.current) {
        roomId = await makeReadwithTogetherRef.current.createGroupRoom();
      }

      if (roomId) {
        const validRoomId = typeof roomId === 'object' ? roomId.roomId : roomId;
        console.log('📌 최종 roomId:', validRoomId);

        setToastTitle('방 생성 성공');
        setToastMessage('잠시후 방으로 이동합니다!');

        setTimeout(() => {
          navigate(`/rooms/${validRoomId}/info`);
        }, 3000);
      }
    } catch (error) {
      console.error(`❌ 방 생성 실패:`, error.message);
      setToastTitle('방 생성 실패');
      setToastMessage(error.message);
    }
  };

  return (
    <>
      <Wrapper>
        <RWHeader />
        {/* 공개/비공개 버튼 */}
        <ButtonContainer>
          <Button
            $isSelected={selected === '혼자'}
            onClick={() => handleButtonClick('혼자')}
          >
            <div>혼자 기록</div>
          </Button>
          <Button
            $isSelected={selected === '같이'}
            onClick={() => handleButtonClick('같이')}
          >
            <div>여러명 기록</div>
          </Button>
        </ButtonContainer>
        {selected === '같이' && (
          <MakeReadwithTogether
            ref={makeReadwithTogetherRef}
            isbn={isbn}
            onValidationChange={setIsCreateButtonDisabled}
          />
        )}
        <RWFooter
          onCreateRoom={handleCreateRoom}
          isDisabled={isCreateButtonDisabled}
        />
      </Wrapper>

      {toastMessage && (
        <ToastPopup
          title={toastTitle}
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </>
  );
}
