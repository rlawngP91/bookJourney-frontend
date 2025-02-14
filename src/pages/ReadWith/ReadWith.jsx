import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './ReadWith.styles';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
import RoomBody from '../../components/RoomBody/RoomBody';
import { getInnerRoomInfo } from '../../apis/getInnerRoomInfo';
import { getEntireRecords } from '../../apis/getEntireRecords';
import { getPageRecords } from '../../apis/getPageRecords';

export default function ReadWith() {
  const { roomId } = useParams();

  const [roomData, setRoomData] = useState(null); // 방 정보
  const [records, setRecords] = useState([]); // 전체 기록 리스트
  const [pageRecords, setPageRecords] = useState([]); // 페이지별 기록 리스트
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ 방 정보 가져오기
  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
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

  // ✅ 기록 데이터 가져오기 (roomData 설정 후)
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        if (!roomData) return;
        const pageRecordsData = await getPageRecords(roomId, '페이지순');
        setPageRecords(pageRecordsData);
        const recordsData = await getEntireRecords(roomId, '페이지순');
        setRecords(recordsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (roomData) {
      fetchRecords();
    }
  }, [roomData]); // ✅ roomData가 변경될 때만 실행

  // ✅ 로딩 및 에러 처리
  if (loading) return;
  if (error) return;
  return (
    <Wrapper>
      <RoomHeader roomData={roomData} />
      {roomData && (
        <RoomBody
          roomData={roomData}
          records={records}
          pageRecords={pageRecords}
        />
      )}
    </Wrapper>
  );
}
