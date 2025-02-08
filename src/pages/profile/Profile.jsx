import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Profile.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import ValidTestInput from '../signup/ValidTestInput';
import Title from '../../assets/title.svg';
import ProfileImg from './profileImg.svg';
import Plus from './plus.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import { checkNicknameAvailability } from '../../apis/verification';

const Profile = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // 닉네임 중복 확인 함수
  const handleNicknameCheck = async () => {
    try {
      setNicknameMessage('닉네임 확인 중...');
      console.log('[DEBUG] 닉네임 확인 요청:', nickname);

      const isAvailable = await checkNicknameAvailability(nickname);
      if (isAvailable) {
        setNicknameMessage('사용 가능한 닉네임입니다.');
        setIsNicknameValid(true);
        setIsButtonEnabled(true); // 닉네임 사용 가능하면 버튼 활성화
      } else {
        setNicknameMessage('*이미 존재하는 닉네임입니다.');
        setIsNicknameValid(false);
        setIsButtonEnabled(false);
      }
    } catch (error) {
      setNicknameMessage(error.message);
      setIsNicknameValid(false);
      setIsButtonEnabled(false);
    }
  };

  const handleNextButtonClick = () => {
    sessionStorage.setItem('nickname', nickname); // 세션에 닉네임 저장
    navigate('/category'); // "/category"로 이동
  };

  const handlerBackBtnClick = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <StatusBar />
      <img className="title" src={Title} alt="타이틀" />
      <img className="profileImg" src={ProfileImg} alt="프사" />
      <div className="plus-btn">
        <img
          className="plus-icon"
          src={Plus}
          alt="플러스"
          onClick={() => console.log('프로필 추가버튼 클릭!')}
        />
      </div>
      <ValidTestInput
        labelText="닉네임"
        placeholder="닉네임 설정"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      {/* 닉네임 중복 확인 버튼 */}
      <span className="duplicate-check" onClick={handleNicknameCheck}>
        중복확인
      </span>
      {/* 닉네임 중복 확인 결과 메시지 */}
      {nicknameMessage && (
        <p
          className="nickname-result-msg"
          style={{ color: isNicknameValid ? 'green' : '#FD7472', margin: '0' }}
        >
          {nicknameMessage}
        </p>
      )}
      <div className="btn-container">
        <div className="back-btn" onClick={handlerBackBtnClick}>
          <p>이전</p>
        </div>
        <BlueBtn
          className={'next'}
          text="다음"
          width={'167px'}
          disabled={!isButtonEnabled}
          onClick={handleNextButtonClick}
        />
      </div>
    </Container>
  );
};

export default Profile;
