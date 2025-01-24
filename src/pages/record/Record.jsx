import React from 'react';
import { Container } from './Record.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BackBtn from '../../assets/arrow.svg';
import Sort from './sort.svg';
const Record = () => {
  return (
    <Container>
      <StatusBar />
      <div className="header">
        <img className="back-btn" src={BackBtn} alt="뒤로가기" />
        <p className="title-message">
          <span className="nickname">닉네임</span>님의 진행중 기록
        </p>
        <p className="total">
          전체 <span className="number">5</span>
        </p>
        <p className="sort">
          최신순
          <img className="sort-img" src={Sort} alt="정렬 이미지" />
        </p>
      </div>
    </Container>
  );
};

export default Record;
