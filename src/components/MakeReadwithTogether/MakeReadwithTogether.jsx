import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Wrapper,
  Button,
  DateButton,
  PopupOverlay,
  PopupContent,
} from './MakeReadwithTogether.styles';
import { createRoom } from '../../apis/room'; // 방 생성 API 호출
import DatePicker from './DatePicker';

const MakeReadwithTogether = forwardRef((props, ref) => {
  const isbn = '9791198860538'; // ✅ 하드코딩된 ISBN 값

  const today = new Date();
  const formattedToday = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  // ✅ 상태 관리
  const [selected, setSelected] = useState('공개');
  const [roomName, setRoomName] = useState('');
  const [roomNameError, setRoomNameError] = useState('');
  const [participants, setParticipants] = useState('');
  const [participantsError, setParticipantsError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // ✅ 방 이름 입력 핸들러
  const handleRoomNameChange = (e) => {
    const value = e.target.value;
    setRoomName(value);
    setRoomNameError(
      value.trim()
        ? value.length > 20
          ? '* 방 이름은 최대 20자까지 입력 가능합니다'
          : ''
        : '* 방 이름을 입력해주세요'
    );
  };

  // ✅ 인원 입력 핸들러
  const handleParticipantsChange = (e) => {
    const value = e.target.value;
    const numValue = parseInt(value, 10);
    setParticipants(value);
    setParticipantsError(
      isNaN(numValue)
        ? '* 숫자만 입력 가능합니다.'
        : numValue < 2 || numValue > 50
          ? '* 최소 2명 ~ 최대 50명입니다'
          : ''
    );
  };

  // ✅ 비밀번호 입력 핸들러
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value) || value.length > 4) return;
    setPassword(value);
    setPasswordError(value.length < 4 ? '* 숫자 4자리를 입력해주세요' : '');
  };
  // ✅ 종료일 선택 후 저장
  const handleEndDateSelect = (date) => {
    const formattedEndDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    setEndDate(formattedEndDate);
    setShowDatePicker(false);
  };

  // ✅ 부모 컴포넌트에서 호출할 수 있도록 `createGroupRoom` 함수 노출
  useImperativeHandle(ref, () => ({
    createGroupRoom,
  }));

  // ✅ 방 생성 API 호출
  const createGroupRoom = async () => {
    const roomData = {
      roomName: roomName || null,
      progressStartDate: formattedToday,
      progressEndDate: endDate || null,
      recruitCount: participants ? parseInt(participants, 10) : null,
      password: selected === '비공개' && password ? password : null,
      isbn,
      isPublic: selected === '공개',
    };

    try {
      const roomId = await createRoom(roomData);
      console.log(`🎉 같이 읽는 방 생성 성공! roomId: ${roomId}`);
      alert('같이 읽는 방이 성공적으로 생성되었습니다!');
      return roomId;
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
            onClick={() => setSelected('공개')}
          >
            공개
          </Button>
          <Button
            $isSelected={selected === '비공개'}
            onClick={() => setSelected('비공개')}
          >
            비공개
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

          {/* 기간 입력 (버튼으로 변경) */}
          <div className="duration">
            <div className="date-input">
              <div className="label">기간</div>
              <div className="inputWrap">
                <div className="separator">{formattedToday}</div>
                <div className="separator">~</div>
                <DateButton onClick={() => setShowDatePicker(true)}>
                  {endDate || '종료일 선택'}
                </DateButton>
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

      {/* ✅ DatePicker 팝업 */}
      {showDatePicker && (
        <PopupOverlay onClick={() => setShowDatePicker(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <DatePicker
              startDate={today}
              onEndDateChange={handleEndDateSelect}
              onClose={() => setShowDatePicker(false)}
            />
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
});

// ✅ displayName 추가하여 경고 해결
MakeReadwithTogether.displayName = 'MakeReadwithTogether';

export default MakeReadwithTogether;
