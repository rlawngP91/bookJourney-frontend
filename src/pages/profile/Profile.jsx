import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Profile.styles';
import ValidTestInput from '../signup/ValidTestInput';
import Title from '../../assets/title.svg';
import ProfileImgPlaceholder from './profileImg.svg';
import Plus from './plus.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import { checkNicknameAvailability } from '../../apis/verification';
import { uploadProfileImage } from '../../apis/profileApi';

const Profile = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // 프로필 이미지 관련 state (미리보기 URL과 파일 객체)
  const [profileImg, setProfileImg] = useState(ProfileImgPlaceholder);
  const [profileFile, setProfileFile] = useState(null);

  // file input DOM 접근을 위한 ref 생성
  const fileInputRef = useRef(null);

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

  const handleNextButtonClick = async () => {
    try {
      let uploadedImageUrl = '';

      if (!profileFile) {
        console.error('[ERROR] 업로드할 프로필 이미지가 없습니다!');
        alert('업로드할 프로필 이미지를 선택해주세요.');
        return;
      }

      console.log('[DEBUG] 프로필 이미지 업로드 시작...');
      uploadedImageUrl = await uploadProfileImage(profileFile); // 프로필 이미지 업로드 요청
      console.log('[DEBUG] 업로드된 프로필 이미지 URL:', uploadedImageUrl);

      sessionStorage.setItem('nickname', nickname); // 닉네임 저장
      sessionStorage.setItem('profileImage', uploadedImageUrl); // 프로필 이미지 URL 저장
      navigate('/category'); // "/category"로 이동
    } catch (error) {
      console.error('[ERROR] 프로필 업로드 또는 세션 저장 실패:', error);
      alert(error.message); // 실패 시 사용자에게 알림
    }
  };

  const handlerBackBtnClick = () => {
    navigate('/signup');
  };

  // plus 버튼 클릭 시 파일 입력창 열기
  const handlePlusBtnClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일이 선택되었을 때 미리보기 URL 생성 및 state 업데이트
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error('[ERROR] 선택된 파일이 없습니다!');
      return;
    }

    console.log(`[DEBUG] 선택된 파일:`, file);
    setProfileFile(file);
    // 브라우저에서 제공하는 URL.createObjectURL로 미리보기 URL 생성
    const previewUrl = URL.createObjectURL(file);
    setProfileImg(previewUrl);
    console.log(`previewUrl =  ${previewUrl}`);
  };

  return (
    <Container>
      <img className="title" src={Title} alt="타이틀" />
      {/* 프로필 이미지 (미리보기) */}
      <img className="profileImg" src={profileImg} alt="프로필" />
      {/* 파일 선택을 위한 hidden input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div className="plus-btn" onClick={handlePlusBtnClick}>
        <img className="plus-icon" src={Plus} alt="플러스" />
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
