import React from 'react';
import { Wrapper, Header, Body, Container } from './RoomInfo.styles';
import Footer from '../../components/commons/Footer/Footer';
import logo from '../../assets/logo.svg';
import exit from '../../assets/exit.svg';
import bookexample from '../../assets/bookexample.svg';
import ButtonGroup2 from '../../components/InfoBody/ButtonGroup2';
import TabGroup2 from '../../components/InfoBody/TapGroup2';
import InfoBody from '../../components/InfoBody/InfoBody';

export default function RoomInfo() {
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
          <ButtonGroup2 />
          <TabGroup2 />
        </Body>
      </Container>
      <Footer />
    </Wrapper>
  );
}
