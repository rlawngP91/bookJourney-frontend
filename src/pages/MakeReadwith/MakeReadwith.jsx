import React, { useState } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button, ButtonContainer } from './MakeReadwith.styles';
import MakeReadwithTogether from '../../components/MakeReadwithTogether/MakeReadwithTogether';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출

export default function MakeReadwith() {
  const [selected, setSelected] = useState('혼자');
  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택
  };

  const handleCreateRoom = async () => {
    if (selected === '혼자') {
      // 혼자 방 생성 요청
      const roomData = {
        recruitCount: 1, // 혼자일 경우 필수 데이터
      };

      try {
        const roomId = await createRoom(roomData);
        console.log(`🎉 혼자 기록하는 방 생성 성공! roomId: ${roomId}`);
        alert('혼자 기록하는 방이 성공적으로 생성되었습니다!');
      } catch (error) {
        console.error(`❌ 방 생성 실패:`, error.message);
        alert(error.message);
      }
    } else if (selected === '같이') {
      // 같이 선택 시, MakeReadwithTogether 내부 버튼 클릭하도록 트리거
      document.getElementById('group-create-room-btn')?.click();
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
        {selected === '같이' && <MakeReadwithTogether />}
        <RWFooter onCreateRoom={handleCreateRoom} />
      </Wrapper>
    </>
  );
}
