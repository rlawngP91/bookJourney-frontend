import React, { useState, useRef } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button, ButtonContainer } from './MakeReadwith.styles';
import MakeReadwithTogether from '../../components/MakeReadwithTogether/MakeReadwithTogether';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출
import { useNavigate } from 'react-router-dom';

export default function MakeReadwith() {
  const navigate = useNavigate(); // ✅ useNavigate 사용
  const [selected, setSelected] = useState('혼자');
  const isbn = '9791141977726'; // ✅ 하드코딩된 ISBN
  const makeReadwithTogetherRef = useRef(null); // ✅ `MakeReadwithTogether` 참조

  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택
  };

  const handleCreateRoom = async () => {
    try {
      let roomId = null;

      if (selected === '혼자') {
        const roomData = {
          isPublic: false,
          roomName: null,
          progressStartDate: null,
          progressEndDate: null,
          recruitCount: 1,
          password: null,
          isbn,
        };

        roomId = await createRoom(roomData);
        console.log(`🎉 혼자 읽기 방 생성 성공! roomId: ${roomId}`);
      } else if (selected === '같이' && makeReadwithTogetherRef.current) {
        roomId = await makeReadwithTogetherRef.current.createGroupRoom();
      }

      if (roomId) {
        navigate('/readWith'); // ✅ 방 생성 후 '/readWith' 페이지로 이동, 추후 수정
      }
    } catch (error) {
      console.error(`❌ 방 생성 실패:`, error.message);
      alert(error.message);
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
            <div>혼자 기록할래요</div>
          </Button>
          <Button
            $isSelected={selected === '같이'}
            onClick={() => handleButtonClick('같이')}
          >
            <div>여러명이서 기록할래요</div>
          </Button>
        </ButtonContainer>
        {selected === '같이' && (
          <MakeReadwithTogether ref={makeReadwithTogetherRef} />
        )}
        <RWFooter onCreateRoom={handleCreateRoom} />
      </Wrapper>
    </>
  );
}
