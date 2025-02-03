import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Wrapper, Button } from './MakeReadwithTogether.styles';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출
//import { useParams } from 'react-router-dom'; // ✅ URL에서 파라미터 가져오기

const MakeReadwithTogether = forwardRef((props, ref) => {
  const isbn = '9791141977726'; // ✅ 하드코딩된 ISBN 값

  //  const { roomId } = useParams();
  //  const [isbn, setIsbn] = useState('');

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  // State 관리
  const [selected, setSelected] = useState('공개');
  const handleButtonClick = (option) => setSelected(option);

  const [roomName, setRoomName] = useState('');
  const [roomNameError, setRoomNameError] = useState('');
  const [participants, setParticipants] = useState('');
  const [participantsError, setParticipantsError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [endDate, setEndDate] = useState('');

  /*   // ✅ 동적으로 roomId 값을 받아서 방 정보 가져오기
  useEffect(() => {
    const fetchRoomInfo = async () => {
      if (!roomId) return; // roomId가 없으면 실행하지 않음
      try {
        const roomData = await getRoomInfo(roomId); // 동적 roomId 적용
        setIsbn(roomData.isbn);
        console.log('📌 방 정보:', roomData); // 방 정보 확인
      } catch (error) {
        console.error('❌ 방 정보 가져오기 실패:', error);
      }
    };

    fetchRoomInfo();
  }, [roomId]); // roomId 변경 시마다 실행 */

  // 방 이름 입력 핸들러
  const handleRoomNameChange = (e) => {
    const value = e.target.value;
    setRoomName(value);

    if (!value.trim()) {
      setRoomNameError('* 방 이름을 입력해주세요');
    } else if (value.length > 20) {
      setRoomNameError('* 방 이름은 최대 20자까지 입력 가능합니다');
    } else {
      setRoomNameError('');
    }
  };

  // 인원 입력 핸들러
  const handleParticipantsChange = (e) => {
    const value = e.target.value;
    const numValue = parseInt(value, 10);

    if (isNaN(numValue)) {
      setParticipants(value); // 비정상 입력 허용
      setParticipantsError('* 숫자만 입력 가능합니다.');
    } else {
      setParticipants(value);

      if (numValue < 2 || numValue > 50) {
        setParticipantsError('* 최소 2명 ~ 최대 50명입니다');
      } else {
        setParticipantsError('');
      }
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    // 숫자가 아니면 무시
    if (!/^\d*$/.test(value)) return;

    // 4자리까지만 입력 가능
    if (value.length <= 4) {
      setPassword(value);
    }

    // 오류 메시지 관리
    if (value.length === 0 || value.length < 4) {
      setPasswordError('* 숫자 4자리를 입력해주세요');
    } else {
      setPasswordError(''); // 정상 입력 시 에러 메시지 제거
    }
  };

  const handleEndDateChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
  };

  // ✅ 부모 컴포넌트에서 호출할 수 있도록 `createGroupRoom` 함수 노출
  useImperativeHandle(ref, () => ({
    createGroupRoom,
  }));

  // 방 생성 API 호출
  const createGroupRoom = async () => {
    const roomData = {
      roomName: roomName || null, // 방 이름이 없으면 null
      progressStartDate: formattedDate,
      progressEndDate: endDate || null, // 종료 날짜 없으면 null
      recruitCount: participants ? parseInt(participants, 10) : null,
      password: selected === '비공개' && password ? password : null,
      isbn, // ✅ 하드코딩된 ISBN 포함
      isPublic: selected === '공개',
    };

    try {
      const roomId = await createRoom(roomData);
      console.log(`🎉 같이 읽는 방 생성 성공! roomId: ${roomId}`);
      alert('같이 읽는 방이 성공적으로 생성되었습니다!');
    } catch (error) {
      console.error(`❌ 방 생성 실패:`, error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <Wrapper>
        {/* 공개/비공개 버튼 */}
        <div className="buttoncontainer">
          <Button
            $isSelected={selected === '공개'}
            onClick={() => handleButtonClick('공개')}
          >
            <div>공개</div>
          </Button>
          <Button
            $isSelected={selected === '비공개'}
            onClick={() => handleButtonClick('비공개')}
          >
            <div>비공개</div>
          </Button>
        </div>

        {/* 같이 읽기방 이름 입력 */}
        <div className="name">
          <div className="countcontainer">
            <div className="label">같이 읽기방 이름</div>
            <div className="count">{roomName.length}/20</div>
          </div>
          <input
            className={roomNameError ? 'roomNameError' : ''}
            value={roomName}
            onChange={handleRoomNameChange}
            placeholder="다른 사람들에게 보여질 방 이름이에요."
          />
          {roomNameError && <div className="error">{roomNameError}</div>}
        </div>

        {/* 세부 정보 */}
        <div className="detail">
          <div className="section-title">세부 정보</div>

          {/* 기간 입력 */}
          <div className="duration">
            <div className="date-input">
              <div className="label">기간</div>
              <div className="inputWrap">
                <div className="separator">{formattedDate}</div>
                <div className="separator">~</div>
                <input
                  placeholder="0000.00.00"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
          </div>

          {/* 인원 입력 */}
          <div className="num">
            <div className="label">인원</div>
            <input
              className={participantsError ? 'participantsError' : ''}
              placeholder="0 명"
              value={participants}
              onChange={handleParticipantsChange}
            />
          </div>
          {participantsError && (
            <div className="error">{participantsError}</div>
          )}
        </div>

        {/* 비밀번호 설정 */}
        {selected === '비공개' && (
          <div className="password">
            <div className="label">비밀번호 설정</div>
            <input
              className={passwordError ? 'passwordError' : ''}
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호 4자리를 입력해주세요."
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
        )}
      </Wrapper>
    </>
  );
});

// ✅ displayName 추가하여 경고 해결
MakeReadwithTogether.displayName = 'MakeReadwithTogether';

export default MakeReadwithTogether;
