import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContainer } from './Signup.styles';
import UserInputField from '../../components/userInputField/UserInputField';
import Title from '../../assets/title.svg';
import PasswordInput from './PasswordInput';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Arrow from '../../assets/arrow.svg';
import {
  requestEmailVerification,
  verifyEmailCode,
} from '../../apis/verification';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(''); // 인증번호 입력 값
  const [verificationMessage, setVerificationMessage] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordError, setPasswordError] = useState(''); // 비번 양식
  const [isVerified, setIsVerified] = useState(false); // 인증 완료 상태
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태

  // 비밀번호 정규식 (영어와 숫자 포함, 8~16자)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

  const handleBtnClick = () => {
    sessionStorage.setItem('email', email); // 세션에 이메일 저장
    sessionStorage.setItem('password', password); // 세션에 비밀번호 저장
    navigate('/profile');
  };

  const handleEmailVerification = async () => {
    try {
      setVerificationMessage('인증 요청 중...');
      await requestEmailVerification(email);
      setVerificationMessage('인증 코드가 전송되었습니다.');
    } catch (error) {
      setVerificationMessage(error.message);
    }
  };

  // 인증번호 검증 함수
  const handleCodeVerification = async () => {
    try {
      setVerificationMessage('인증번호 확인 중...');
      const isVerified = await verifyEmailCode(email, verificationCode);
      if (isVerified) {
        setVerificationMessage('인증되었습니다.');
        setIsVerified(true);
      } else {
        setVerificationMessage('인증 실패. 다시 시도하세요.');
      }
    } catch (error) {
      setVerificationMessage(error.message);
    }
  };

  // 비밀번호 입력 핸들러: 정규식 검사 추가
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 정규식 검사: 조건에 맞지 않으면 에러 메시지 설정
    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        '비밀번호는 영어와 숫자를 포함하여 8자 이상 16자 이내로 설정해주세요.'
      );
    } else {
      setPasswordError('');
    }
    checkPasswordMatch(newPassword, confirmPassword);
  };

  // 비밀번호 확인 입력 핸들러
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  // 비밀번호 일치 여부 확인
  const checkPasswordMatch = (pwd, confirmPwd) => {
    const match = pwd === confirmPwd && pwd.length > 0;
    setPasswordMatch(match);
    setIsButtonEnabled(isVerified && match); // 인증 성공 + 비밀번호 일치 시 버튼 활성화
  };

  return (
    <SignupContainer>
      <img className="title" src={Title} alt="타이틀" />
      <img
        className="back-btn"
        src={Arrow}
        alt="뒤로가기"
        onClick={() => navigate('/login')}
      />
      <UserInputField
        labelText="이메일"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <UserInputField
        labelText=""
        placeholder="인증코드 입력"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />

      <span className="email-check" onClick={handleEmailVerification}>
        인증하기
      </span>

      <span className="duplicate-check" onClick={handleCodeVerification}>
        확인
      </span>

      {/* 인증 요청 결과 메시지 */}
      {verificationMessage && (
        <span
          className="verfication-result-message"
          style={{
            color:
              verificationMessage === '인증 코드가 전송되었습니다.'
                ? 'green'
                : 'red',
          }}
        >
          {verificationMessage}
        </span>
      )}

      {/* 비밀번호 입력 */}
      <PasswordInput
        labelText="비밀번호"
        placeholder="비밀번호 입력"
        className="password-input"
        value={password}
        onChange={handlePasswordChange}
      />
      {/* 비밀번호 양식 오류 메시지 */}
      {passwordError && <p className="pwd-error-msg">{passwordError}</p>}
      {/* 비밀번호 확인 입력 */}
      <PasswordInput
        labelText=""
        placeholder="비밀번호 확인"
        className="password-check"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      {/* 비밀번호 불일치 메시지 */}
      {!passwordMatch && !passwordError && (
        <p className="pwd-result-msg">비밀번호가 일치하지 않습니다.</p>
      )}
      {/* 회원가입 버튼 (활성화 조건: 인증 완료 + 비밀번호 일치) */}
      <BlueBtn
        text="다음"
        className="start-btn"
        disabled={!isButtonEnabled}
        onClick={handleBtnClick}
      />
    </SignupContainer>
  );
};

export default Signup;
