import React, { useState } from 'react';
import { Wrapper, Page, Container, Box, Input } from './PageRecord.styles';
import xbox from '../../assets/xbox.svg';
import { postRecord } from '../../apis/postRecord'; // ✅ API 호출 함수 변경

export default function PageRecord({ onClose, roomId }) {
  const [page, setPage] = useState(''); // ✅ 페이지 입력값
  const [text, setText] = useState(''); // ✅ 기록 입력값
  const [loading, setLoading] = useState(false); // ✅ 로딩 상태 추가

  // ✅ 기록 버튼 클릭 시 API 호출
  const handleRecordSubmit = async () => {
    if (!roomId) {
      alert('❌ roomId가 필요합니다.');
      return;
    }

    if (!page.trim() || isNaN(page) || Number(page) < 1) {
      alert('📌 올바른 페이지 번호를 입력해주세요.');
      return;
    }

    if (!text.trim()) {
      alert('📌 기록 내용을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      // ✅ postPageRecord API 호출
      const response = await postRecord(roomId, Number(page), text);
      console.log('✅ 기록 저장 성공:', response);
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
            <div className="title">어떤 페이지에 대한 기록인가요?</div>
            <div className="inputpage">
              <Page
                type="text"
                value={page}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
                  setPage(value);
                }}
              />
              <div className="p">p</div>
            </div>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={1000} // ✅ 1000자 제한
              type="text"
              placeholder="기록을 입력하세요..."
            />
            <div className="bottom">
              <div className="page">
                <div className="now">{text.length}</div>
                <div className="slash">/</div>
                <div>1000</div>
              </div>
              <button
                className="send"
                onClick={handleRecordSubmit}
                disabled={loading}
                style={{
                  backgroundColor: loading ? '#ccc' : '#6aa5f8',
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
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
