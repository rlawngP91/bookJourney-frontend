import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Duration,
  PercentBar,
  Type,
  Button,
} from './RoomHeader.styles';
import xbox from '../../assets/xbox.svg';
import pen from '../../assets/pen.svg';
import alarm from '../../assets/alarm.svg';
import refresh from '../../assets/refresh.svg';
import lock from '../../assets/lock.svg';
import clock2 from '../../assets/clock2.svg';
import note from '../../assets/note.svg';
import rightarrow from '../../assets/rightarrow.svg';
import MemberHeader from '../Member/MemberHeader';

export default function RoomHeader() {
  return (
    <Wrapper>
      <Header>
        <img src={xbox} />
        <div>
          <img src={pen} />
          <img src={alarm} />
          <img src={refresh} />
        </div>
      </Header>
      <Title>
        <div>책제목</div>
        <img src={lock} />
      </Title>
      <Duration>
        <img src={clock2} />
        <div>D-10</div>
        <img src={note} />
        <div>75%</div>
        <img src={rightarrow} />
      </Duration>
      <MemberHeader />
      <PercentBar>
        <div className="totalpercent"></div>
        <div className="nowpercent"></div>
      </PercentBar>
      <Type>
        <Button>페이지별 기록</Button>
        <Button>전체기록</Button>
      </Type>
    </Wrapper>
  );
}
