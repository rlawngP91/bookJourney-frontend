import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Onboarding.styles';
import BlueBtn from '../../components/blueBtn/BlueBtn';
//import Circle from '../../assets/circle.svg';
import Title from '../../assets/title.svg';
import { signUp } from '../../apis/signUpApi';

const Onboarding = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  //sessionStorage에서 회원가입 정보 가져오기
  const email = sessionStorage.getItem('email');
  const password = sessionStorage.getItem('password');
  const nickName = sessionStorage.getItem('nickName');
  const imageUrl = sessionStorage.getItem('imageUrl');
  const handleBtnClick = async () => {
    try {
      let favoriteGenres =
        JSON.parse(sessionStorage.getItem('favoriteGenres')) || [];

      favoriteGenres = favoriteGenres.map((genre) => ({
        genreName: genre.genreName,
      }));

      //필수 값 검증
      if (
        !email ||
        !password ||
        !nickName ||
        !imageUrl ||
        favoriteGenres.length === 0
      ) {
        alert('회원가입 정보를 올바르게 입력해주세요.');
        return;
      }

      //console.log('[DEBUG] 회원가입 요청 시작');
      const responseData = await signUp(
        email,
        password,
        nickName,
        imageUrl,
        favoriteGenres
      );

      //회원가입 성공 시 토큰 저장
      localStorage.setItem('accessToken', responseData.accessToken);
      localStorage.setItem('refreshToken', responseData.refreshToken);
      localStorage.setItem('userId', responseData.userId);

      //console.log('[DEBUG] accessToken 저장 완료:', responseData.accessToken);
      //console.log('[DEBUG] refreshToken 저장 완료:', responseData.refreshToken);

      //회원가입 후 불필요한 sessionStorage 데이터 삭제
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('nickName');
      sessionStorage.removeItem('imageUrl');
      sessionStorage.removeItem('favoriteGenres');

      //회원가입 완료 후 홈으로 이동
      navigate('/home');
    } catch (error) {
      //console.error('[ERROR] 회원가입 요청 실패:', error);
      alert(error.message);
    }
  };

  return (
    <Container>
      <img className="logo" src={imageUrl} alt="로고" />
      <img className="title" src={Title} alt="제목" />
      <div className="user-hello">{nickName}님, 안녕하세요</div>
      <BlueBtn
        text={'시작하기'}
        className={'blue-btn'}
        onClick={handleBtnClick}
      />
    </Container>
  );
};

export default Onboarding;
