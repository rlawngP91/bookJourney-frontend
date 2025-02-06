import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserRecords } from '../../apis/getPageRecords';
import Record from './Record';

export default function RecordList() {
  const { roomId, userId } = useParams();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await getUserRecords(roomId, userId);
        setRecords(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (roomId && userId) {
      fetchRecords();
    }
  }, [roomId, userId]);

  if (loading) return <div>📖 기록을 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;
  if (records.length === 0) return <div>📭 기록이 없습니다.</div>;

  return (
    <div>
      {records.map((record) => (
        <Record key={record.recordId} record={record} />
      ))}
    </div>
  );
}
