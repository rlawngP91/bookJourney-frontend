import React from 'react';
import { Container } from './InfoPopup.styles';
//import InfoCircle from './InfoCircle.svg';
//import Trash from './trash.svg';

const InfoPopup = ({ onLine1Click, onLine2Click, className }) => {
  return (
    <Container className={className}>
      <div className="first-line" onClick={onLine1Click}>
        {/* 
        <img className="left-img" src={InfoCircle} alt="인포아이콘" />
        */}
        <p className="info">책 및 방정보</p>
      </div>
      <div className="second-line" onClick={onLine2Click}>
        {/* 
        <img className="left-img" src={Trash} alt="쓰레기통" />
        */}
        <p className="delete-record">진행중인 기록에서 삭제</p>
      </div>
    </Container>
  );
};

export default InfoPopup;
