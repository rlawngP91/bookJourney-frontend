import React, { useState, useEffect } from 'react';
import { Wrapper, Page, Container, Box, Input } from './PageRecord.styles';
import xbox from '../../assets/xbox.svg';
import { postRecord } from '../../apis/postRecord';
import { getCurrentPage } from '../../apis/getCurrentPage';

export default function PageRecord({
  onClose,
  roomId,
  setPopupRecordCount,
  fetchRecords,
  setToastMessage,
  setToastTitle,
}) {
  const [page, setPage] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookPage, setBookPage] = useState('0');
  const milestones = new Set([
    0, 1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);

  useEffect(() => {
    const fetchBookPage = async () => {
      try {
        const data = await getCurrentPage(roomId);
        setBookPage(data.bookPage); // ✅ bookPage 값 저장
      } catch (error) {
        console.error('❌ 책 전체 페이지 가져오기 실패:', error.message);
        setToastTitle('페이지 정보 불러오기 실패');
        setToastMessage(error.message);
      }
    };

    if (roomId) {
      fetchBookPage();
    }
  }, [roomId]);

  const handleRecordSubmit = async () => {
    if (!roomId) {
      setToastTitle('기록 작성 실패');
      setToastMessage('RoomId가 필요합니다.');
      return;
    }

    if (!page.trim() || isNaN(page) || Number(page) < 1) {
      setToastTitle('기록 작성 실패');
      setToastMessage('올바른 페이지 번호를 입력해주세요.');
      return;
    }

    if (!text.trim()) {
      setToastTitle('기록 작성 실패');
      setToastMessage('기록 내용을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const response = await postRecord(roomId, Number(page), text);
      console.log('✅ 기록 저장 성공:', response);

      // ✅ recordCount 정확히 추출
      const recordCount = response?.recordCount ?? null;
      console.log('🔥 Fixed recordCount:', recordCount);

      // ✅ ToastPopup 띄우기
      setToastTitle('같이 읽기 방');
      setToastMessage('기록 작성 성공');

      onClose();
      await fetchRecords();

      // ✅ milestone 조건 확인 후 팝업 띄우기
      setTimeout(() => {
        if (recordCount !== null && milestones.has(recordCount)) {
          console.log('🎉 milestone 달성! recordCount:', recordCount);
          setPopupRecordCount(recordCount);
        }
      }, 300);
    } catch (error) {
      console.error('❌ 기록 저장 실패:', error.message);
      setToastTitle('기록 작성 실패');
      setToastMessage(error.message);
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

            {/* 제목 */}
            <div className="title">어떤 페이지에 대한 기록인가요?</div>

            <div className="pagepage">
              <div className="inputpage">
                <Page
                  type="text"
                  value={page}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
                    setPage(value);
                  }}
                />
                <div className="p">/&nbsp;&nbsp;{bookPage}p</div>
              </div>
            </div>

            {/* 기록 내용 입력 */}
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={1000} // ✅ 1000자 제한
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
                <div>1000</div>
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
