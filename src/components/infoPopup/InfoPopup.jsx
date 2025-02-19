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
        <div className="info2">책 및 방정보</div>
      </div>
      <div className="second-line" onClick={onLine2Click}>
        {/* 
        <img className="left-img" src={Trash} alt="쓰레기통" />
        */}
        <div className="delete-record2">진행중인 기록에서 삭제</div>
      </div>
    </Container>
  );
};

export default InfoPopup;
