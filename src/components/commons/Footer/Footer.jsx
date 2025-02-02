import React from 'react';
import { Wrapper, Button } from './Footer.styles';
import home from '../../../assets/home.svg';
import bookwrite from '../../../assets/bookwrite.svg';
import search from '../../../assets/search.svg';
import my from '../../../assets/my.svg';
import homeActive from '../../../assets/homeActive.svg';
import bookwriteActive from '../../../assets/bookwriteActive.svg';
import searchActive from '../../../assets/searchActive.svg';
import myActive from '../../../assets/myActive.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이션 함수

  // 현재 페이지와 버튼이 매칭되면 파란색 적용
  const isActive = (path) => location.pathname === path;

  return (
    <Wrapper>
      <Button onClick={() => navigate('/home')} $isActive={isActive('/home')}>
        <img src={isActive('/home') ? homeActive : home} alt="홈" />
        <div>홈</div>
      </Button>
      <Button
        onClick={() => navigate('/bookmark')}
        $isActive={isActive('/bookmark')}
      >
        <img
          src={isActive('/bookmark') ? bookwriteActive : bookwrite}
          alt="도서기록장"
        />{' '}
        <div>도서기록장</div>
      </Button>
      <Button
        onClick={() => navigate('/search')}
        $isActive={isActive('/search')}
      >
        <img src={isActive('/search') ? searchActive : search} alt="책찾기" />
        <div>책찾기</div>
      </Button>
      <Button
        onClick={() => navigate('/mypage')}
        $isActive={isActive('/mypage')}
      >
        <img src={isActive('/mypage') ? myActive : my} alt="마이페이지" />
        <div>마이페이지</div>
      </Button>
    </Wrapper>
  );
}
