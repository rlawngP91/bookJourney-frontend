import React from 'react';
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

  /*   const progress = 30;
  const milestones = [
    { id: 1, label: '책산책 여행 시작', count: 1, top: 20, left: 10 },
    { id: 2, label: '기록 한 걸음', count: 50, top: 30, left: 20 },
    { id: 3, label: '한 글자 한 글자', count: 100, top: 40, left: 35 },
    { id: 4, label: '독서 탐험', count: 200, top: 50, left: 50 },
    { id: 5, label: '생각 한 줄', count: 300, top: 60, left: 65 },
    { id: 6, label: '문장 수집', count: 400, top: 70, left: 75 },
    { id: 7, label: '독서 행진', count: 500, top: 80, left: 85 },
  ]; */
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <img
            src={leftarrow}
            alt="뒤로가기"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <div>책산책 수집가</div>
        </HeaderWrapper>
        <img src={title0} />
      </Wrapper>
    </>
  );
}
