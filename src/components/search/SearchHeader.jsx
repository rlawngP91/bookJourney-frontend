import React from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/leftarrow.svg';
import settingsIcon from '../../assets/searchsetting.svg';

const HeaderWrapper = styled.div`
  position: fixed;
  width: 393px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: #ffffff;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;

  img {
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SettingsButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -8px;

  img {
    width: 17px;
    height: 17px;
  }
`;

export default function SearchHeader({ onBackClick, onSettingsClick }) {
  return (
    <HeaderWrapper>
      <BackButton onClick={onBackClick}>
        <img src={backIcon} alt="뒤로 가기" />
      </BackButton>
      <Title>책찾기</Title>
      <SettingsButton onClick={onSettingsClick}>
        <img src={settingsIcon} alt="설정" />
      </SettingsButton>
    </HeaderWrapper>
  );
}

// 사용 예시:
// <Header
//   title="책 찾기"
//   onBackClick={() => navigate(-1)}
//   onSettingsClick={() => navigate('/settings')}
// />
