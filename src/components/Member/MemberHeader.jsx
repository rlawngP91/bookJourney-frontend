import React from 'react';
import { Wrapper } from './MemberHeader.styles';
import Member from './Member';

export default function MemberHeader({ memberList, hideRole }) {
  return (
    <Wrapper>
      {memberList.map((member, index) => (
        <Member
          key={index}
          userRole={member.userRole || ''}
          imageUrl={member.imageUrl}
          nickName={member.nickName}
          userPercentage={member.userPercentage}
          hideRole={hideRole}
        />
      ))}
    </Wrapper>
  );
}
