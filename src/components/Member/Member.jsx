import React from 'react';
import { Wrapper } from './Member.styles';
import userimage from '../../assets/userimage.svg';

export default function Member({
  userRole,
  imageUrl,
  nickName,
  userPercentage,
}) {
  return (
    <Wrapper>
      <div
        className="title"
        style={{ color: userRole === 'HOST' ? 'black' : '#B3B3B3' }}
      >
        {userRole}
      </div>
      <img src={imageUrl || userimage} alt="User Profile" />
      <div className="nickname">{nickName}</div>
      <div className="percent">{userPercentage}%</div>
    </Wrapper>
  );
}
