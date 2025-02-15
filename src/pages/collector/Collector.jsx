import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, HeaderWrapper } from './Collector.styles';
import leftarrow from '../../assets/leftarrow.svg';
import title0 from '../../assets/titles/title0.svg';
/* import title1 from '../../assets/titles/title0';
import title2 from '../../assets/titles/title0';
import title3 from '../../assets/titles/title0';
import title4 from '../../assets/titles/title0';
import title5 from '../../assets/titles/title0';
import title6 from '../../assets/titles/title0';
import title7 from '../../assets/titles/title0';
import title8 from '../../assets/titles/title0';
import title9 from '../../assets/titles/title0';
import title10 from '../../assets/titles/title0';
import title11 from '../../assets/titles/title0';
import title12 from '../../assets/titles/title0'; */

export default function Collector() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login'); // 로그인 페이지로 리디렉트
      return;
    }
  });
  return (
    <>
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
        <img src={title0} />
      </Wrapper>
    </>
  );
}
