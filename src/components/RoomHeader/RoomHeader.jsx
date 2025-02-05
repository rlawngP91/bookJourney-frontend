import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Header,
  Title,
  Duration,
  UserList,
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
import { getInnerRoomInfo } from '../../apis/getInnerRoomInfo';

export default function RoomHeader() {
  const [isExpanded, setIsExpanded] = useState(false);

  // 화살표 버튼 클릭 시 상태 토글
  const toggleUserList = () => {
    setIsExpanded(!isExpanded);
  };

  const [roomInfo, setRoomInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const data = await getInnerRoomInfo();
        setRoomInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, []);

  if (loading) return <div>📖 방 정보를 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;

  return (
    <Wrapper>
      <Header>
        <img src={xbox} />
        <div>
          <img src={pen} />
          <img src={exit} />
        </div>
      </Header>
      <Title>
        <div>{roomInfo.bookTitle}</div>
        {!roomInfo.isPublic && <img src={lock} />}
      </Title>
      <div className="roomname">{roomInfo.roomName}</div>
      <Duration>
        <img src={grayclock} />
        <div>{roomInfo.progressEndDate}</div>
        <img src={graynote} />
        <div>{roomInfo.roomPercentage}%</div>
        <img
          src={isExpanded ? grayarrowdown : grayarrowright}
          onClick={toggleUserList}
          style={{ cursor: 'pointer' }}
        />
      </Duration>
      {/* 참가 유저 목록 (isExpanded가 true일 때만 표시) */}
      {isExpanded && (
        <UserList>
          <MemberHeader memberList={roomInfo.memberList} />
        </UserList>
      )}
    </Wrapper>
  );
}
