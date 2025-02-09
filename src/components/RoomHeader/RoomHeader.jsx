import React, { useState } from 'react';
import {
  Wrapper,
  Header,
  Title,
  Duration,
  UserList,
  Popup,
  Popup2,
} from './RoomHeader.styles';
import xbox from '../../assets/xbox.svg';
import pen from '../../assets/pen.svg';
import exit from '../../assets/exit.svg';
import lock from '../../assets/lock.svg';
import grayclock from '../../assets/grayclock.svg';
import graynote from '../../assets/graynote.svg';
import grayarrowright from '../../assets/grayarrowright.svg';
import grayarrowdown from '../../assets/grayarrowdown.svg';
import MemberHeader from '../Member/MemberHeader';
import usePopup from '../../hooks/usePopup';
import RecordPopup from '../popup/recordPopup/RecordPopup';
import { useNavigate } from 'react-router-dom';

export default function RoomHeader({ roomData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // 화살표 버튼 클릭 시 회원 목록 토글
  const toggleUserList = () => {
    setIsExpanded(!isExpanded);
  };

  // roomData가 아직 전달되지 않은 경우 로딩 상태 처리
  if (!roomData) return <div>📖 방 정보를 불러오는 중...</div>;

  // usePopup 훅 사용
  const { popupType, openPopup, closePopup } = usePopup();

  return (
    <Wrapper>
      <Header>
        <img
          src={xbox}
          alt="Xbox"
          onClick={() => openPopup('xbox')}
          style={{ cursor: 'pointer' }}
        />
        <div>
          <img
            src={pen}
            alt="Pen"
            onClick={() => openPopup('pen')}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={exit}
            alt="Exit"
            onClick={() => openPopup('exit')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </Header>
      <Title>
        <div>{roomData.bookTitle}</div>
        {!roomData.isPublic && <img src={lock} alt="Lock" />}
      </Title>
      <div className="roomname">{roomData.roomName}</div>
      <Duration>
        <img src={grayclock} alt="Clock" />
        <div>{roomData.progressEndDate}</div>
        <img src={graynote} alt="Note" />
        <div>{roomData.roomPercentage}%</div>
        <img
          src={isExpanded ? grayarrowdown : grayarrowright}
          onClick={toggleUserList}
          style={{ cursor: 'pointer' }}
          alt="Toggle User List"
        />
      </Duration>
      {/* 참가 유저 목록 (isExpanded가 true일 때만 표시) */}
      {isExpanded && (
        <UserList>
          <MemberHeader memberList={roomData.memberList} />
        </UserList>
      )}

      {/* 각 팝업 조건부 렌더링 */}
      {popupType === 'xbox' && (
        <Popup>
          <div className="box">
            <div className="title">잠깐!</div>
            <div className="message">
              <div>오늘은 어디까지 읽었는지 알려주세요</div>
              <img src={pen} alt="Pen" />
            </div>
            <div className="buttons">
              <div className="cancel" onClick={() => navigate('/')}>
                나가기
              </div>
              <div className="delete">입력하기</div>
            </div>
          </div>
        </Popup>
      )}

      {popupType === 'pen' && (
        <RecordPopup roomId={roomData.roomId} onClose={closePopup} />
      )}

      {popupType === 'exit' && (
        <Popup2>
          <div className="exit">
            <div className="title">방 나가기</div>
            <div className="message">
              <div>
                <p>{`남긴 기록이 모두 삭제됩니다.\n방을 나가시겠습니까?`}</p>
              </div>
            </div>
            <div className="buttons">
              <div className="cancel" onClick={() => closePopup(true)}>
                취소
              </div>
              <div className="delete" onClick={() => navigate('/')}>
                나가기
              </div>
            </div>
          </div>
        </Popup2>
      )}
    </Wrapper>
  );
}
