import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './ReadWith.styles';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
import RoomBody from '../../components/RoomBody/RoomBody';
import { getInnerRoomInfo } from '../../apis/getInnerRoomInfo';
import LoadingPage from '../../components/loading/loadingPage';

export default function ReadWith() {
  const { roomId } = useParams();

  const [roomData, setRoomData] = useState(null); // 방 정보

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        setLoading(true); // ✅ 로딩 시작
        const roomInfo = await getInnerRoomInfo(roomId);
        setRoomData(roomInfo);
      } catch (err) {
        setError(err.message);
      }
    };

    if (roomId) {
      fetchRoomInfo();
    }
  }, [roomId]);

  // ✅ roomData가 변경될 때 로딩 해제
  useEffect(() => {
    if (roomData) {
      setLoading(false); // ✅ roomData가 준비되면 로딩 해제
    }
  }, [roomData]);

  // ✅ 로딩 및 에러 처리
  if (loading) return <LoadingPage />;
  if (error) return;

  return (
    <Wrapper>
      <RoomHeader roomData={roomData} setRoomData={setRoomData} />
      {roomData && <RoomBody roomData={roomData} />}
    </Wrapper>
  );
}
