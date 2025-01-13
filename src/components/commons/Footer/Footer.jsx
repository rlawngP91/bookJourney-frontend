import React from 'react';
import { Wrapper, Button } from './Footer.styles';
import home from '../../../assets/home.svg';
import bookwrite from '../../../assets/bookwrite.svg';
import search from '../../../assets/search.svg';
import my from '../../../assets/my.svg';

export default function Footer() {
  return (
    <Wrapper>
      <Button>
        <img src={home} alt="홈" />
        <div>홈</div>
      </Button>
      <Button>
        <img src={bookwrite} alt="도서기록장" />
        <div>도서기록장</div>
      </Button>
      <Button>
        <img src={search} alt="책찾기" />
        <div>책찾기</div>
      </Button>
      <Button>
        <img src={my} alt="마이페이지" />
        <div>마이페이지</div>
      </Button>
    </Wrapper>
  );
}
