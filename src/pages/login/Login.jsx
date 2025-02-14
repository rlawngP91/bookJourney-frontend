import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, ButtonContainer } from './Login.styles';
import UserInputField from '../../components/userInputField/UserInputField';
import StatusBar from '../../components/statusbar/StatusBar';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Title from '../../assets/title.svg';
import { login } from '../../apis/authApi'; // 로그인 API 함수 가져오기
import { setAccessToken } from '../../apis/instance/apiClient'; // accessToken 업데이트 함수 가져오기
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

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
      console.log('[DEBUG] 로그인 요청 전송:', { email, password });

      const response = await login(email, password);
      console.log('[DEBUG] 로그인 함수가 반환한 값:', response);

      if (!response || !response.data) {
        throw new Error('서버 응답이 없습니다.');
      }

      const responseData = response.data; // response.data 객체 추출
      console.log('[DEBUG] responseData:', responseData);

      const { accessToken, refreshToken, userId } = responseData;

      if (!accessToken || !refreshToken || !userId) {
        throw new Error('서버 응답에서 필요한 데이터가 없습니다.');
      }

      // 로그인 성공 후 accessToken 업데이트
      setAccessToken(accessToken);
      console.log('[DEBUG] accessToken 저장 완료:', accessToken);

      // 로그인 성공 후 페이지 이동 (예: 메인 페이지)
      window.location.href = '/home';
    } catch (error) {
      console.error('[ERROR] 로그인 실패:', error);
      if (error.response) {
        console.error(
          '[ERROR] 서버 응답 메시지:',
          error.response.data?.message || '알 수 없는 오류'
        );
        setErrorMessage(
          error.response.data?.message || '로그인 중 오류가 발생했습니다.'
        );
      } else {
        console.error('[ERROR] 네트워크 또는 기타 오류:', error.message);
        setErrorMessage('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <LoginContainer>
      <StatusBar />
      <img className="title" src={Title} alt="제목" />

      <UserInputField
        className="input-field"
        placeholder="이메일 입력"
        labelText="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <UserInputField
        className="input-field"
        placeholder="비밀번호 입력"
        labelText="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* 버튼 컨테이너 */}
      <ButtonContainer>
        <BlueBtn text="시작하기" onClick={handleLogin} />
      </ButtonContainer>

      <button className="find-password">비밀번호를 잊으셨나요?</button>
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
      <div className="agree">
        가입시 <span>이용약관</span> 및 <span>개인정보 처리방침</span>에
        동의하게 됩니다.
      </div>
    </LoginContainer>
  );
};

export default Login;
