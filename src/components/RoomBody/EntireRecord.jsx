import React, { useState } from 'react';
import { Wrapper, Title, Container, Box, Input } from './EntireRecord.styles';
import xbox from '../../assets/xbox.svg';
import { postRecord } from '../../apis/postRecord';

export default function EntireRecord({
  onClose,
  roomId,
  setPopupRecordCount,
  fetchRecords,
  setToastMessage,
  setToastTitle,
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
      setToastTitle('기록 작성 실패');
      setToastMessage('RoomId가 필요합니다');
      return;
    }

    if (!title.trim()) {
      setToastTitle('기록 작성 실패');
      setToastMessage('제목을 입력해주세요');
      return;
    }

    if (!text.trim()) {
      setToastTitle('기록 작성 실패');
      setToastMessage('내용을 입력해주세요');
      return;
    }

    setLoading(true);
    try {
      // ✅ postRecord API 호출
      const response = await postRecord(roomId, undefined, text, title);
      console.log('✅ 기록 저장 성공:', response);

      // ✅ Toast 메시지 설정 (기록이 정상적으로 저장된 경우에만 실행)
      setToastTitle('같이 읽기 방');
      setToastMessage('기록 작성 성공');
      console.log('🔥 ToastMessage 설정됨:', '기록 작성 성공');

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
      setToastTitle('기록 작성 실패');
      setToastMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setToastMessage(null);
    setToastTitle('');
    onClose();
  };

  return (
    <>
      <Wrapper>
        <Box>
          <Container>
            {/* 닫기 버튼 */}
            <div
              className="close"
              onClick={handleClose}
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
