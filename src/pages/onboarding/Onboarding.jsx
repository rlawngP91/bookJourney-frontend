import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Onboarding.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Circle from '../../assets/circle.svg';
import Title from '../../assets/title.svg';
const Onboarding = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleBtnClick = () => {
    navigate('/home');
  };
  return (
    <Container>
      <StatusBar />
      <img className="logo" src={Circle} alt="로고" />
      <img className="title" src={Title} alt="제목" />
      <p className="user-hello">닉네임 님, 안녕하세요</p>
      <BlueBtn
        text={'시작하기'}
        className={'blue-btn'}
        onClick={handleBtnClick}
      />
    </Container>
  );
};

export default Onboarding;
