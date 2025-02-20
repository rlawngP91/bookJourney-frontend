import React, { useState, useEffect } from 'react';
import { Wrapper, Container, Button, Box } from './RecordPopup.styles';
import { postCurrentPage } from '../../../apis/postCurrentPage';
import { getCurrentPage } from '../../../apis/getCurrentPage';
import { getInnerRoomInfo } from '../../../apis/getInnerRoomInfo';
import ToastPopup from '../../ToastPopup/ToastPopup';

export default function RecordPopup({ onClose, roomId, setRoomData }) {
  const [nowPage, setNowPage] = useState('');
  const [bookPage, setBookPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTitle, setToastTitle] = useState(null);

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
        setToastTitle('페이지 기록 실패');
        setToastMessage('올바른 페이지 번호를 입력하세요');
        return;
      }

      await postCurrentPage(roomId, Number(nowPage));

      const updatedRoomData = await getInnerRoomInfo(roomId);
      setRoomData(updatedRoomData);

      setToastTitle('페이지 기록 성공');
      setToastMessage('지금까지 읽은 페이지를 저장했습니다');

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setToastTitle('페이지 기록 실패');
      setToastMessage(`${err.message}`);
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
                <input
                  className="input"
                  type="text"
                  value={nowPage}
                  onChange={handlePageChange}
                  placeholder="0"
                />
                <div className="slash">/</div>
                <div className="totalpage">{bookPage || ''}</div>
                <div className="p">p</div>
              </div>
              <div className="last">
                *지난번에는 {currentPage || 0}p까지 읽었어요
              </div>
            </div>
            {error && (
              <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
            )}
            <Button onClick={handleConfirm}>확인</Button>
          </Container>
        </Box>
      </Wrapper>

      {toastMessage && (
        <ToastPopup
          title={toastTitle}
          message={toastMessage}
          onClose={() => {
            setToastTitle('');
            setToastMessage(null);
          }}
        />
      )}
    </>
  );
}
