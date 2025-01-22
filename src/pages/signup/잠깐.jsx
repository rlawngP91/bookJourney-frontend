import React from 'react';
import { SignupContainer } from './Signup.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import UserInputField from '../../components/userInputField/UserInputField';
import Title from '../../assets/title.svg';
import ValidTestInput from './ValidTestInput';
import PasswordInput from './PasswordInput';
import EyeIcon from '../../assets/eye.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';
const Signup = () => {
  // 닉네임 중복 여부를 확인하는 함수
  const validateNickname = (value) => {
    const existingNicknames = ['testUser', 'admin', 'user123']; // 서버에서 받아온 데이터라고 가정
    return !existingNicknames.includes(value); // 중복이면 false 반환
  };

  return (
    <SignupContainer>
      <StatusBar />
      <img className="title" src={Title} alt="타이틀" />
      <UserInputField labelText="이메일" placeholder="이메일 입력" />
      <ValidTestInput
        labelText="닉네임"
        placeholder="닉네임 설정"
        validateInput={validateNickname}
      />
      <span
        className="duplicate-check"
        onClick={() => console.log('중복확인 클릭!')}
      >
        중복확인
      </span>
      <PasswordInput
        labelText="비밀번호"
        placeholder="비밀번호 입력"
        className="password-input"
      />
      <PasswordInput
        labelText="비밀번호"
        placeholder="비밀번호 확인"
        className="password-check"
      />
      <img
        className="eye-input"
        src={EyeIcon}
        alt="누르면 보이게"
        onClick={() => console.log('Image1 clicked!')}
      />
      <img
        className="eye-check"
        src={EyeIcon}
        alt="누르면 보이게"
        onClick={() => console.log('Image2 clicked!')}
      />

      <BlueBtn text="시작하기" className="start-btn" disabled="true" />
    </SignupContainer>
  );
};

export default Signup;
