import React from 'react';
import { Wrapper, Footer } from './ReadWith.styles';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
import RoomBody from '../../components/RoomBody/RoomBody';
import send from '../../assets/send.svg';

export default function ReadWith() {
  return (
    <Wrapper>
      <RoomHeader />
      <RoomBody />
      <Footer>
        <div className="input">
          <div>기록 추가하기</div>
          <img src={send} />
        </div>
      </Footer>
    </Wrapper>
  );
}
