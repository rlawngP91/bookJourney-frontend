import React from 'react';
import leftarrow from '../../assets/leftarrow.svg';
import graynote from '../../assets/graynote.svg';
import grayclock from '../../assets/grayclock.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import decodeEntities from '../../utils/decodeEntities';

const Wrapper = styled.div`
  width: 393px;
  height: auto;
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 60px 25px 0px 25px;
  .roomname {
    padding-top: 11px;

    color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.08px; /* 164.366% */
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 34px;
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-right: 25px;

  div {
    color: #000;
    font-family: Inter;
    font-size: 20.553px;
    font-style: normal;
    font-weight: 700;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;

const Duration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  color: #8f8f8f;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;

  div {
    line-height: 13.5px;
  }
`;

export default function PreviewHeader({ roomData }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <img
          src={leftarrow}
          alt="뒤로가기"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
      </Header>
      <Title>
        <div
          dangerouslySetInnerHTML={{
            __html: decodeEntities(roomData?.bookTitle || '제목 정보 없음'),
          }}
        />
      </Title>
      <div className="roomname">{roomData.roomName}</div>
      <Duration>
        <div>
          <img src={grayclock} alt="Clock" />
        </div>
        <div>{roomData.progressEndDate}</div>
        <div>
          <img src={graynote} alt="Note" />
        </div>
        <div>{roomData.roomPercentage}%</div>
      </Duration>
    </Wrapper>
  );
}
