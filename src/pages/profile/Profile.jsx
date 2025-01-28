import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Profile.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import ValidTestInput from '../signup/ValidTestInput';
import Title from '../../assets/title.svg';
import ProfileImg from './profileImg.svg';
import Plus from './plus.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';
const Profile = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handlerBackBtnClick = () => {
    navigate('/signup');
  };

  // 닉네임 중복 여부를 확인하는 함수
  const validateNickname = (value) => {
    const existingNicknames = ['testUser', 'admin', 'user123']; // 서버에서 받아온 데이터라고 가정
    return !existingNicknames.includes(value); // 중복이면 false 반환
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
        validateInput={validateNickname}
      />
      <span
        className="duplicate-check"
        onClick={() => console.log('중복확인 클릭!')}
      >
        중복확인
      </span>
      <div className="btn-container">
        <div className="back-btn" onClick={handlerBackBtnClick}>
          <p>이전</p>
        </div>
        <BlueBtn className={'next'} text="다음" width={'167px'} />
      </div>
    </Container>
  );
};

export default Profile;
