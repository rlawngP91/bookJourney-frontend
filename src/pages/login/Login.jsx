import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, ButtonContainer } from './Login.styles';
import UserInputField from '../../components/userInputField/UserInputField';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import PasswordInput from '../signup/PasswordInput';
import Title from '../../assets/title.svg';
import { login } from '../../apis/authApi'; // 로그인 API 함수 가져오기
import { setAccessToken } from '../../apis/instance/apiClient'; // accessToken 업데이트 함수 가져오기
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async () => {
    try {
      if (!email) {
        setErrorMessage('이메일을 입력해주세요.');
        return;
      }
      if (!password) {
        setErrorMessage('비밀번호를 입력해주세요.');
        return;
      }

      const response = await login(email, password);

      if (!response || !response.data) {
        throw new Error('서버 응답이 없습니다.');
      }

      const responseData = response.data; // response.data 객체 추출

      const { accessToken, refreshToken, userId } = responseData;

      if (!accessToken || !refreshToken || !userId) {
        throw new Error('서버 응답에서 필요한 데이터가 없습니다.');
      }

      // 로그인 성공 후 accessToken 업데이트
      setAccessToken(accessToken);

      // 로그인 성공 후 페이지 이동 (예: 메인 페이지)
      window.location.href = '/home';
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data?.message || '로그인 중 오류가 발생했습니다.'
        );
      } else {
        setErrorMessage('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <LoginContainer>
      <img className="title" src={Title} alt="제목" />

      <UserInputField
        className="input-field"
        placeholder="이메일 입력"
        labelText="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        className="input-field"
        placeholder="비밀번호 입력"
        labelText="비밀번호"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* 버튼 컨테이너 */}
      <ButtonContainer>
        <BlueBtn text="시작하기" onClick={handleLogin} />
      </ButtonContainer>
      {/* 
      <button className="find-password">비밀번호를 잊으셨나요?</button>
      */}
      <div className="question">
        계정이 없으신가요?{' '}
        <span
          className="sign-up"
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </span>
      </div>
    </LoginContainer>
  );
};

export default Login;
