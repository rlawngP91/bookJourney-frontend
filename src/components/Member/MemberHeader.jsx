import React from 'react';
import { Wrapper, Users } from './MemberHeader.styles';
import users from '../../assets/users.svg';
import Member from './member';

export default function MemberHeader() {
  return (
    <Wrapper>
      <Users>
        <img src={users} />
        <div>4/6</div>
      </Users>
      <Member />
      <Member />
    </Wrapper>
  );
}
