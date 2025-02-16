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
import xbox from '../../assets/leftarrow.svg';
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
import { exitRoom } from '../../apis/deleteRoom';
import decodeEntities from '../../utils/decodeEntities';

export default function RoomHeader({ roomData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [openedFromXbox, setOpenedFromXbox] = useState(false); // ✅ `pen` 팝업이 `xbox` 팝업에서 열린 경우 체크

  // 화살표 버튼 클릭 시 회원 목록 토글
  const toggleUserList = () => {
    setIsExpanded(!isExpanded);
  };

  // usePopup 훅 사용
  const { popupType, openPopup, closePopup } = usePopup();

  const handleExitRoom = async () => {
    try {
      await exitRoom(roomData.roomId); // API 호출
      navigate('/home'); // 성공 시 홈으로 이동
      // 방 나가기 성공 토스트 팝업 열기
    } catch (error) {
      console.error('❌ 방 나가기 오류:', error);
    }
  };

  return (
    <Wrapper>
      {roomData.recruitCount === 1 ? (
        <>
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
            <div
              dangerouslySetInnerHTML={{
                __html: decodeEntities(roomData?.bookTitle || '제목 정보 없음'),
              }}
            />
          </Title>
          <div className="roomname">{roomData.roomName}</div>
          <Duration>
            <div>
              <img src={graynote} alt="Note" />
            </div>
            <div>{roomData.roomPercentage}%</div>
          </Duration>
        </>
      ) : (
        <>
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
            {!roomData.public && <img src={lock} alt="Lock" />}
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
              <MemberHeader memberList={roomData.memberList} hideRole={true} />
            </UserList>
          )}
        </>
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
              <div className="cancel" onClick={() => navigate('/home')}>
                나가기
              </div>
              <div
                className="delete"
                onClick={() => {
                  closePopup(); // 기존 팝업 닫기
                  setOpenedFromXbox(true); // ✅ xbox에서 pen을 열었음을 표시
                  openPopup('pen'); // 새 팝업 열기
                }}
              >
                입력하기
              </div>
            </div>
          </div>
        </Popup>
      )}

      {popupType === 'pen' && (
        <RecordPopup
          roomId={roomData.roomId}
          onClose={() => {
            closePopup();
            if (openedFromXbox) {
              navigate('/home'); // ✅ xbox에서 열린 경우 /home으로 이동
              setOpenedFromXbox(false); // ✅ 상태 초기화
            }
          }}
        />
      )}

      {popupType === 'exit' && (
        <Popup2>
          <div className="exit">
            <div className="title">방 나가기</div>
            <div className="message">
              <p>
                남긴 기록이 모두 삭제됩니다.
                <br />
                방을 나가시겠습니까?
              </p>
            </div>
            <div className="buttons">
              <div className="cancel" onClick={() => closePopup(true)}>
                취소
              </div>
              <div className="delete" onClick={handleExitRoom}>
                나가기
              </div>
            </div>
          </div>
        </Popup2>
      )}
    </Wrapper>
  );
}
