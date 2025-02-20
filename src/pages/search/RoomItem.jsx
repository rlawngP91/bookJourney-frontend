import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import calendarIcon from '../../assets/note2.svg';
import usersIcon from '../../assets/users2.svg';
import lockIcon from '../../assets/lock2.svg';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
const ItemWrapper = styled.div`
  display: flex;
  height: 123px;
  padding: 12px 24px;
  gap: 25px;
  align-items: flex-start;
  position: relative;
`;
const BookCoverWrapper = styled.div`
  position: relative;
  width: 84px;
  height: 123px;
  border-radius: 4px;
`;

const BookCover = styled.img`
  width: 84px;
  height: 123px;
  object-fit: cover;
  border-radius: 4px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.42);
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
`;

const Author = styled.div`
  color: #757373;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  margin-top: 11px;
`;

const Title = styled.div`
  color: var(--sds-color-text-default-default);
  width: 180px;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
`;
const RoomTitle = styled.div`
  color: #939393;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 145.455% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  margin-top: auto;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 11px;
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

// const DateText = styled.p`
//   color: #6b7280;
//   margin: 4px 0 0 0;
//   font-family: Pretendard;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 133%;
// `;

export const Tag = styled.span`
  display: ${(props) => (props.$isRecruiting ? 'inline-flex' : 'none')};
  width: 49px;
  height: 21px;
  position: absolute;
  right: 15px;
  top: 43px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #6aa5f8;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'dlig' on;
  font-family: Pretendard;
  font-size: 9.624px;
  font-style: normal;
  font-weight: 500;
  line-height: 139.895%;
  letter-spacing: 0.096px;
  z-index: 1;
`;

// 클릭되면 /rooms/:roomId 으로 넘기기
export const RoomItem = ({
  id,
  book,
  author,
  coverImage,
  title,
  //
  member,
  currentpeople,
  totalpeople,
  progress,
  enddate,
  isLocked,
}) => {
  const isRecruiting = () => {
    const today = new Date();
    const end = new Date(enddate);
    today.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return end >= today;
  };

  return (
    <StyledLink
      to={{
        pathname: `/rooms/${id}`,
        state: { member }, // member prop을 추가
      }}
    >
      <ItemWrapper>
        <Tag $isRecruiting={isRecruiting()}>모집중</Tag>
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
          <RoomTitle>{title}</RoomTitle>
          <StatusContainer>
            <StatusItem>
              <img src={usersIcon} alt="userInfo" />
              {currentpeople}/{totalpeople}
            </StatusItem>
            <StatusItem>
              <img src={calendarIcon} alt="calendar" />
              {progress}%
            </StatusItem>
            <StatusItem>~ {enddate}</StatusItem>
          </StatusContainer>
        </RoomInfo>
      </ItemWrapper>
    </StyledLink>
  );
};
