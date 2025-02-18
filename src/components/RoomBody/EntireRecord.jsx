import React, { useState } from 'react';
import { Wrapper, Title, Container, Box, Input } from './EntireRecord.styles';
import xbox from '../../assets/xbox.svg';
import { postRecord } from '../../apis/postRecord';

export default function EntireRecord({
  onClose,
  roomId,
  setPopupRecordCount,
  fetchRecords,
}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ milestone 리스트
  const milestones = new Set([
    0, 1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);

  const handleRecordSubmit = async () => {
    if (!roomId) {
      alert('❌ roomId가 필요합니다.');
      return;
    }

    if (!title.trim()) {
      alert('📌 제목을 입력해주세요.');
      return;
    }

    if (!text.trim()) {
      alert('📌 기록 내용을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      // ✅ postRecord API 호출
      const response = await postRecord(roomId, undefined, text, title);
      console.log('✅ 기록 저장 성공:', response);

      // ✅ recordCount 정확히 추출
      const recordCount = response?.recordCount ?? null;
      console.log('📌 기록 저장 후 recordCount:', recordCount);

      // ✅ 기존 팝업 닫기
      onClose();
      await fetchRecords();

      // ✅ milestone 조건 확인 후 팝업 띄우기
      setTimeout(() => {
        if (recordCount !== null && milestones.has(recordCount)) {
          console.log('🎉 milestone 달성! recordCount:', recordCount);
          setPopupRecordCount(recordCount); // ✅ RoomBody에서 감지하여 팝업 띄움
        }
      }, 300);
    } catch (error) {
      alert(`❌ 기록 저장 실패: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Box>
          <Container>
            {/* 닫기 버튼 */}
            <div
              className="close"
              onClick={onClose}
              style={{ cursor: 'pointer' }}
            >
              <img src={xbox} alt="닫기" />
            </div>

            {/* 제목 입력 */}
            <div className="title">전체 기록의 제목을 정해주세요</div>
            <Title
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={28}
              placeholder="제목"
            />

            {/* 기록 내용 입력 */}
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={3000}
              type="text"
              placeholder="기록을 입력해주세요"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) =>
                (e.target.placeholder = text ? '' : '기록을 입력해주세요')
              }
            />

            {/* 하단 버튼 및 글자수 표시 */}
            <div className="bottom">
              <div className="page">
                <div className="now">{text.length}</div>
                <div className="slash">/</div>
                <div>3000</div>
              </div>

              <div
                className="send"
                onClick={handleRecordSubmit}
                disabled={loading}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? '기록 중...' : '기록'}
              </div>
            </div>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}
