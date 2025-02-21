import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HeaderWrapper,
  Content,
  ErrorMessage,
  MatchMessage,
} from './Account.styles';
import leftarrow from '../../../assets/leftarrow.svg';
import PasswordInput from '../../signup/PasswordInput';
import PaswordConfirmed from './PasswordInput';
import BlueBtn from './BlueBtn';
import { changePassword } from '../../../apis/changePasswordApi';
const Account = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [apiError, setApiError] = useState('');

  // 비밀번호 정규식 (영어와 숫자 포함, 8~16자)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.warn('[WARNING] accessToken 없음 - 로그인 페이지로 이동');
      navigate('/login'); // 로그인 페이지로 리디렉트
      return;
    }
  });

  // 현재 비밀번호 입력 핸들러
  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
    setApiError(''); // 에러 메시지 초기화
  };

  // 새 비밀번호 입력 핸들러
  const handleNewPasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);

    // 정규식 검사
    if (!passwordRegex.test(newPasswordValue)) {
      setPasswordError(
        '비밀번호는 영어와 숫자를 포함하여 8자 이상 16자 이내로 설정해주세요.'
      );
    } else {
      setPasswordError('');
    }

    checkPasswordMatch(newPasswordValue, confirmPassword);
  };

  // 비밀번호 확인 입력 핸들러
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(newPassword, e.target.value);
  };

  // 비밀번호 일치 여부 검사
  const checkPasswordMatch = (pwd, confirmPwd) => {
    if (pwd === confirmPwd && pwd.length > 0) {
      setPasswordMatch(true);
      setIsButtonEnabled(passwordRegex.test(pwd)); // 정규식 만족하면 버튼 활성화
    } else {
      setPasswordMatch(false);
      setIsButtonEnabled(false);
    }
  };

  // 비밀번호 변경 요청 핸들러
  const handleBtnClick = async () => {
    const response = await changePassword(currentPassword, newPassword);

    if (response.success) {
      alert('비밀번호가 성공적으로 변경되었습니다.');
      navigate('/mypage');
    } else {
      setApiError(response.message);
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <img
          src={leftarrow}
          alt="뒤로가기"
          onClick={() => navigate('/mypage')}
          style={{ cursor: 'pointer' }}
        />
        <div>비밀번호 변경</div>
      </HeaderWrapper>
      <Content>
        <PasswordInput
          className="input1"
          labelText="현재 비밀번호"
          placeholder="현재 비밀번호"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <PasswordInput
          className="input2"
          labelText="새 비밀번호"
          placeholder="새 비밀번호 입력"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <PaswordConfirmed
          className="input3"
          labelText=""
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          isMatch={passwordMatch}
        />
        {confirmPassword && (
          <MatchMessage isMatch={passwordMatch}>
            {passwordMatch
              ? '비밀번호가 일치합니다'
              : '*비밀번호가 일치하지 않습니다'}
          </MatchMessage>
        )}
      </Content>
      {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
      {/* 
      <span className="forget-question">비밀번호를 잊으셨나요?</span>
      */}
      {/* 회원가입 버튼 (활성화 조건: 인증 완료 + 비밀번호 일치) */}
      <BlueBtn
        text="비밀번호 변경"
        className="start-btn"
        disabled={!isButtonEnabled}
        onClick={handleBtnClick}
      />
    </Container>
  );
};

export default Account;
