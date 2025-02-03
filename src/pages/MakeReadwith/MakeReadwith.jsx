import React, { useState, useRef } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button, ButtonContainer } from './MakeReadwith.styles';
import MakeReadwithTogether from '../../components/MakeReadwithTogether/MakeReadwithTogether';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출

export default function MakeReadwith() {
  const [selected, setSelected] = useState('혼자');
  const isbn = '9791141977726'; // ✅ 하드코딩된 ISBN
  const makeReadwithTogetherRef = useRef(null); // ✅ `MakeReadwithTogether` 참조

  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택
  };

  const handleCreateRoom = async () => {
    if (selected === '혼자') {
      // ✅ 혼자 읽기 방 생성 요청
      const roomData = {
        isPublic: false, // ✅ 항상 false
        roomName: null, // ❌ 방 이름 없음
        progressStartDate: null, // ❌ 시작 날짜 없음
        progressEndDate: null, // ❌ 종료 날짜 없음
        recruitCount: 1, // ✅ 혼자 읽기 방은 1명
        password: null, // ❌ 비밀번호 없음
        isbn, // ✅ 하드코딩된 ISBN
      };

      try {
        const roomId = await createRoom(roomData);
        console.log(`🎉 혼자 기록하는 방 생성 성공! roomId: ${roomId}`);
        alert('혼자 기록하는 방이 성공적으로 생성되었습니다!');
      } catch (error) {
        console.error(`❌ 방 생성 실패:`, error.message);
        alert(error.message);
      }
    } else if (selected === '같이' && makeReadwithTogetherRef.current) {
      // ✅ 같이 읽기 데이터를 `MakeReadwithTogether`에서 가져와 방 생성 요청
      makeReadwithTogetherRef.current.createGroupRoom();
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
