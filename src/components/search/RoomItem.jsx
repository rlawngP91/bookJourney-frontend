import React from 'react';
import styled from 'styled-components';
import calendarIcon from '../../assets/note2.svg';
import usersIcon from '../../assets/users2.svg';

const ItemWrapper = styled.div`
  display: flex;
  padding: 24px 16px;
  gap: 16px;
  align-items: flex-start;
`;

const BookCover = styled.img`
  width: 85px;
  height: 124px;
  object-fit: cover;
  border-radius: 4px;
`;

const RoomInfo = styled.div`
  display: flex;
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
  margin-top: 46px;
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
  title,
  author,
  coverImage,
  currentpeople,
  totalpeople,
  progress,
  startdate,
  enddate,
}) => {
  return (
    <ItemWrapper>
      <BookCover src={coverImage} alt={title} />
      <RoomInfo>
        <Author>{author} 저</Author>
        <Title>{title}</Title>
        <StatusContainer>
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
