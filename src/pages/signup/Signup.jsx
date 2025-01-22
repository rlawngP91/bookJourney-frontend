import React from 'react';
import { SignupContainer } from './Signup.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import UserInputField from '../../components/userInputField/UserInputField';
import Title from '../../assets/title.svg';
import PasswordInput from './PasswordInput';
import EyeIcon from '../../assets/eye.svg';
import EyeOff from '../../assets/eyeoff.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';
const Signup = () => {
  return (
    <SignupContainer>
      <StatusBar />
      <img className="title" src={Title} alt="타이틀" />
      <UserInputField labelText="이메일" placeholder="이메일 입력" />
      <UserInputField labelText="" placeholder="인증코드 입력" />
      <span
        className="duplicate-check"
        onClick={() => console.log('인증코드 확인 클릭!')}
      >
        확인
      </span>
      <PasswordInput
        labelText="비밀번호"
        placeholder="비밀번호 입력"
        className="password-input"
      />
      <PasswordInput
        labelText=""
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
        src={EyeOff}
        alt="누르면 보이게"
        onClick={() => console.log('Image2 clicked!')}
      />

      <BlueBtn text="다음" className="start-btn" disabled={true} />
    </SignupContainer>
  );
};

export default Signup;
