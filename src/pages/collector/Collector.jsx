import React from 'react';
import {
  Wrapper,
  HeaderWrapper,
  TrackContainer,
  SVGTrack,
  ProgressPath,
  Milestone,
  LockIcon,
} from './Collector.styles';
import leftarrow from '../../assets/leftarrow.svg';
import collectorimg from '../../assets/collectorimg.svg';

export default function Collector() {
  const progress = 30;
  const milestones = [
    { id: 1, label: '책산책 여행 시작', count: 1, top: 20, left: 10 },
    { id: 2, label: '기록 한 걸음', count: 50, top: 30, left: 20 },
    { id: 3, label: '한 글자 한 글자', count: 100, top: 40, left: 35 },
    { id: 4, label: '독서 탐험', count: 200, top: 50, left: 50 },
    { id: 5, label: '생각 한 줄', count: 300, top: 60, left: 65 },
    { id: 6, label: '문장 수집', count: 400, top: 70, left: 75 },
    { id: 7, label: '독서 행진', count: 500, top: 80, left: 85 },
  ];
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <img src={leftarrow} alt="뒤로가기" />
          <div>책산책 수집가</div>
        </HeaderWrapper>
        <div className="center">
          <img src={collectorimg} />
          <div className="title">나의 대표 수집</div>
        </div>
      </Wrapper>
      <TrackContainer>
        <SVGTrack viewBox="0 0 100 100">
          <ProgressPath
            d="M 10 50 Q 25 10, 50 50 T 90 50"
            completed={progress >= 100}
          />
        </SVGTrack>

        {milestones.map((milestone) => (
          <Milestone
            key={milestone.id}
            top={milestone.top}
            left={milestone.left}
            completed={progress >= milestone.count}
          >
            <LockIcon completed={progress >= milestone.count} />
            <p>{milestone.label}</p>
          </Milestone>
        ))}
      </TrackContainer>
      );
    </>
  );
}
