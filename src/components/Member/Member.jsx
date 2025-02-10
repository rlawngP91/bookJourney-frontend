import React from 'react';
import { Wrapper, ProfileContainer, HostDot } from './Member.styles';
import userimage from '../../assets/userimage.svg';
import hostdot from '../../assets/hostdot.svg';

export default function Member({
  userRole,
  imageUrl,
  nickName,
  userPercentage,
  hideRole,
}) {
  return (
    <Wrapper>
      {!hideRole && (
        <div
          className="title"
          style={{ color: userRole === 'HOST' ? 'black' : '#B3B3B3' }}
        >
          {userRole}
        </div>
      )}

      {/* ✅ 프로필 이미지 컨테이너 (hostdot을 겹치기 위해) */}
      <ProfileContainer>
        <img src={imageUrl || userimage} alt="User Profile" />
        {userRole === 'HOST' && <HostDot src={hostdot} alt="Host Icon" />}
      </ProfileContainer>

      <div className="nickname">{nickName}</div>
      <div className="percent">{userPercentage}%</div>
    </Wrapper>
  );
}
