import React from 'react';
import { Wrapper } from './Footer.styles';
import home from '../../../assets/home.svg';
import bookwrite from '../../../assets/bookwrite.svg';
import search from '../../../assets/search.svg';
import relationship from '../../../assets/relationship.svg';
import my from '../../../assets/my.svg';

export default function Footer() {
  return (
    <Wrapper>
      <img src={home} alt="홈"></img>
      <img src={bookwrite} alt="도서기록장"></img>
      <img src={search} alt="책찾기"></img>
      <img src={relationship} alt="등장인물관계도"></img>
      <img src={my} alt="마이페이지"></img>
      <img src={my} alt="마이페이지"></img>
      <img src={my} alt="마이페이지"></img>
    </Wrapper>
  );
}
