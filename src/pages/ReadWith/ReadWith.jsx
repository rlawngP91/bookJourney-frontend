import React from 'react';
import { Wrapper, Footer } from './ReadWith.styles';
import RoomHeader from '../../components/RoomHeader/RoomHeader';
import send from '../../assets/send.svg';

export default function ReadWith() {
  return (
    <Wrapper>
      <RoomHeader />
      <Footer>
        <div className="input">
          <div>기록 추가하기</div>
          <img src={send} />
        </div>
      </Footer>
    </Wrapper>
  );
}
