import React, { useState, useEffect } from 'react';
import { Wrapper, Container, Button, Box, Input } from './RecordPopup.styles';
import { postCurrentPage } from '../../../apis/postCurrentPage';
import { getCurrentPage } from '../../../apis/getCurrentPage';

export default function RecordPopup({ onClose, roomId }) {
  const [nowPage, setNowPage] = useState(0); // ✅ 입력값 상태
  const [bookPage, setBookPage] = useState(0); // ✅ 책 총 페이지 수
  const [currentPage, setCurrentPage] = useState(0); // ✅ 사용자가 마지막으로 읽은 페이지
  const [error, setError] = useState('');

  // ✅ 방의 책 정보 가져오기
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const data = await getCurrentPage(roomId);
        setBookPage(data.bookPage);
        setCurrentPage(data.currentPage);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPages();
  }, [roomId]);

  const handlePageChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 입력
    setNowPage(value);
  };

  // ✅ 페이지 업데이트 핸들러
  const handleConfirm = async () => {
    try {
      if (!nowPage || isNaN(nowPage) || nowPage < 1 || nowPage > bookPage) {
        setError('❌ 올바른 페이지 번호를 입력하세요.');
        return;
      }

      await postCurrentPage(roomId, Number(nowPage));
      onClose(); // ✅ 성공 시 팝업 닫기
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Wrapper onClick={onClose}>
        <Box onClick={(e) => e.stopPropagation()}>
          <Container>
            <div className="title">책 제목</div>
            <div className="box">
              <div className="label">오늘은 어디까지 읽으셨나요?</div>
              <div className="page">
                <Input
                  type="text"
                  value={nowPage}
                  onChange={handlePageChange}
                  placeholder="0"
                />
                <div className="slash">/</div>
                <div className="totalpage">{bookPage}</div>
                <div className="p">P</div>
              </div>
              <div className="last">
                *지난번에는 {currentPage || '0'}p까지 읽었어요
              </div>
            </div>
            {error && (
              <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
            )}
            <Button onClick={handleConfirm}>확인</Button>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}
