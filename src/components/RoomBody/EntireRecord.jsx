import React, { useState } from 'react';
import { Wrapper, Title, Container, Box, Input } from './EntireRecord.styles';
import xbox from '../../assets/xbox.svg';
import { postRecord } from '../../apis/postRecord'; // ✅ API 호출 추가

export default function EntireRecord({ onClose, roomId }) {
  const [title, setTitle] = useState(''); // ✅ 기록 제목 입력값
  const [text, setText] = useState(''); // ✅ 기록 입력값
  const [loading, setLoading] = useState(false); // ✅ 로딩 상태 추가

  // ✅ 기록 버튼 클릭 시 API 호출
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
      await postRecord(roomId, undefined, text, title); // ✅ 페이지 없이 제목만 기록
      alert('✅ 기록이 성공적으로 저장되었습니다.');
      onClose(); // ✅ 팝업 닫기
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
            <div
              className="close"
              onClick={onClose}
              style={{ cursor: 'pointer' }}
            >
              <img src={xbox} alt="닫기" />
            </div>
            <div className="title">전체 기록의 제목을 정해주세요</div>
            <Title
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={25}
              placeholder="제목"
            />
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={5000}
              type="text"
              placeholder="기록을 입력하세요..."
            />
            <div className="bottom">
              <div className="page">
                <div className="now">{text.length}</div>
                <div className="slash">/</div>
                <div>5000</div>
              </div>
              <button
                className="send"
                onClick={handleRecordSubmit}
                disabled={loading}
              >
                {loading ? '기록 중...' : '기록'}
              </button>
            </div>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}
