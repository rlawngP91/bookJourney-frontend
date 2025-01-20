import React from 'react';
import { Wrapper, Header, Body, Container } from './Info.styles';
import Footer from '../../components/commons/Footer/Footer';
import InfoBody from '../../components/InfoBody/InfoBody';
import logo from '../../assets/logo.svg';
import exit from '../../assets/exit.svg';
import bookexample from '../../assets/bookexample.svg';

export default function Info() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <div className="title">
            <img src={logo} className="logo" />
            <img src={exit} className="exit" />
          </div>
          <div className="book">
            <div>문학</div>
            <img src={bookexample} />
          </div>
        </Header>
        <Body>
          <InfoBody />
        </Body>
      </Container>
      <Footer />
    </Wrapper>
  );
}
