import React from 'react';
import { Wrapper } from './Member.styles';
import userimage from '../../assets/userimage.svg';

export default function Member() {
  return (
    <Wrapper>
      <div className="title">호스트</div>
      <img src={userimage} />
      <div className="nickname">닉네임</div>
      <div className="percent">50%</div>
    </Wrapper>
  );
}
