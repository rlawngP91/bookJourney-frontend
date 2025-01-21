import React, { useState } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button } from './MakeReadwith.styles';

export default function MakeReadwith() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  const [selected, setSelected] = useState('');
  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택
  };
  const [roomName, setRoomName] = useState(''); // 방 이름
  const [roomNameError, setRoomNameError] = useState(''); // 방 이름 오류 메시지
  const [participants, setParticipants] = useState(''); // 인원 입력
  const [participantsError, setParticipantsError] = useState(''); // 인원 오류 메시지
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  return (
    <>
      <Wrapper>
        <RWHeader />
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
                <input placeholder="0000.00.00" />
              </div>
            </div>
          </div>

          {/* 인원 입력 */}
          <div className="num">
            <div className="label">인원</div>
            <input
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
        <div className="password">
          <div className="label">비밀번호 설정</div>
          <input
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호 4자리를 입력해주세요."
          />
        </div>
        {passwordError && <div className="error">{passwordError}</div>}
      </Wrapper>
      <RWFooter />
    </>
  );
}
