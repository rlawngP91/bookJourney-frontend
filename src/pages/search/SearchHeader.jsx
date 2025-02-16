import React from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/leftarrow.svg';
import settingsIcon from '../../assets/searchsetting.svg';

const HeaderWrapper = styled.div`
  position: fixed;
  width: 393px; // 반응형 100%
  height: 130px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f7f9;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;

  img {
    width: 18px;
    height: 18px;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
  letter-spacing: var(--Label-Medium-Tracking, 0.5px);
`;

const SettingsButton = styled.button`
  border: none;
  background: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 24px;

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
