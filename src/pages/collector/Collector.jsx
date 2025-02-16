import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, HeaderWrapper } from './Collector.styles';
import leftarrow from '../../assets/leftarrow.svg';
import { getCollectorInfo } from '../../apis/getCollectorInfo';
import titleImages from '../../assets/titles/titleImages';

export default function Collector() {
  const navigate = useNavigate();
  const [collectorNickname, setCollectorNickname] = useState('');
  const [recordCount, setRecordCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태 추가

  // ✅ recordCount 범위에 따라 이미지 선택
  const getImageForRecordCount = (count) => {
    const thresholds = [0, 1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const index = thresholds.findIndex((threshold) => count < threshold);
    return titleImages[index !== -1 ? index - 1 : titleImages.length - 1];
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login');
      return;
    }

    // ✅ API 호출
    const fetchCollectorData = async () => {
      try {
        setLoading(true); // ✅ 로딩 시작
        const data = await getCollectorInfo();
        setCollectorNickname(data.collectorNickname);
        setRecordCount(data.recordCount);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // ✅ 로딩 종료
      }
    };

    fetchCollectorData();
  }, [navigate]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <img
          src={leftarrow}
          alt="뒤로가기"
          onClick={() => navigate('/mypage')}
          style={{ cursor: 'pointer' }}
        />
        <div>책산책 수집가</div>
      </HeaderWrapper>

      {loading ? (
        <div className="loading">책산책 수집가 불러오는 중...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>❌ {error}</div>
      ) : (
        <>
          <img src={getImageForRecordCount(recordCount)} alt="수집가 이미지" />
          <div>{collectorNickname || '수집가 닉네임 없음'}</div>
        </>
      )}
    </Wrapper>
  );
}
