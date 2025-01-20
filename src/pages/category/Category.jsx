import React from 'react';
import { Container } from './Category.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Title from '../../assets/title.svg';
import Item from './Item';
const Category = () => {
  return (
    <Container>
      <StatusBar />
      <img className="title" src={Title} alt="제목" />
      <p className="interest">관심 장르 선택</p>
      <p className="question">어떤 장르에 관심 있으신가요?</p>
      <div className="item-grid">
        <Item text="문학1" />
        <Item text="문학2" />
        <Item text="문학3" />
        <Item text="문학4" />
        <Item text="문학5" />
        <Item text="문학6" />
        <Item text="문학7" />
        <Item text="문학8" />
        <Item text="문학9" />
        <Item text="문학10" />
        <Item text="문학11" />
        <Item text="문학12" />
      </div>
      <BlueBtn text="선택완료" disabled="true" className="start-btn" />
    </Container>
  );
};

export default Category;
