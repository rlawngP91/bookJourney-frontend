import React from 'react';
import { LoginContainer, ButtonContainer } from './Login.styles';
import UserInputField from '../../components/userInputField/UserInputField';
import StatusBar from '../../components/statusbar/StatusBar';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Title from '../../assets/title.svg';
const Login = () => {
  return (
    <LoginContainer>
      <StatusBar />
      <img className="title" src={Title} alt="제목" />
      <UserInputField
        className="input-field"
        placeholder="이메일 입력"
        labelText="이메일"
      />
      <UserInputField
        className="input-field"
        placeholder="비밀번호 입력"
        labelText="비밀번호"
      />
      {/* 버튼 컨테이너 */}
      <ButtonContainer>
        <BlueBtn text="시작하기" />
      </ButtonContainer>
      <button className="find-password">비밀번호를 잊으셨나요?</button>
      <div className="question">
        계정이 없으신가요? <span className="sign-up">회원가입</span>
      </div>
      <div className="agree">
        가입시 <span>이용약관</span> 및 <span>개인정보 처리방침</span>에
        동의하게 됩니다.
      </div>
    </LoginContainer>
  );
};

export default Login;
