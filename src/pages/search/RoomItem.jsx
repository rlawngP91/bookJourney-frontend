import React from 'react';
import styled from 'styled-components';
import calendarIcon from '../../assets/note2.svg';
import usersIcon from '../../assets/users2.svg';
import lockIcon from '../../assets/lock2.svg';

const ItemWrapper = styled.div`
  display: flex;
  height: 123px;
  padding: 24px 16px;
  gap: 16px;
  align-items: flex-start;
`;
const BookCoverWrapper = styled.div`
  position: relative;
  width: 85px;
  height: 124px;
  border-radius: 4px;
`;

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.58);
  border-radius: 4px;
  display: ${(props) => (props.$isLocked ? 'block' : 'none')};
`;

const LockIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.$isLocked ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const LockIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const RoomInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 8px;
`;

const Author = styled.p`
  color: #757373;
  font-family: Pretendard;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  stroke-linejoin: 160%;
  margin: 0;
`;

const Title = styled.h3`
  color: #111827;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 34px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #a3a3a3;
  font-family: Pretendard;
  font-size: 9.96px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;

const DateText = styled.p`
  color: #6b7280;
  margin: 4px 0 0 0;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 133%;
`;

export const RoomItem = ({
  book,
  author,
  coverImage,
  title,
  currentpeople,
  totalpeople,
  progress,
  startdate,
  enddate,
  isLocked,
}) => {
  return (
    <ItemWrapper>
      <BookCoverWrapper>
        <BookCover src={coverImage} alt={book} />
        <Overlay $isLocked={isLocked} />
        <LockIconWrapper $isLocked={isLocked}>
          <LockIcon src={lockIcon} alt="locked" />
        </LockIconWrapper>
      </BookCoverWrapper>
      <RoomInfo>
        <Author>{author} 저</Author>
        <Title>{book}</Title>
        <StatusContainer>
          <StatusItem>{title}</StatusItem>
          <StatusItem>
            <img src={usersIcon} alt="userInfo" />
            {currentpeople}/{totalpeople}
          </StatusItem>
          <StatusItem>
            <img src={calendarIcon} alt="calendar" />
            {progress}%
          </StatusItem>
        </StatusContainer>
        <DateText>
          {startdate} ~ {enddate}
        </DateText>
      </RoomInfo>
    </ItemWrapper>
  );
};
