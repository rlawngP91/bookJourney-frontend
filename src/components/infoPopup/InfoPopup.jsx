import React from 'react';
import { Container } from './InfoPopup.styles';
import Bar from './bar.svg';
import InfoCircle from './infoCircle.svg';
import Trash from './trash.svg';

const InfoPopup = ({ onLine1Click, onLine2Click }) => {
  return (
    <Container>
      <img className="line" src={Bar} alt="선" />
      <div className="line1" onClick={onLine1Click}>
        <img className="left-img" src={InfoCircle} alt="인포아이콘" />
        <p className="info">책 및 방정보</p>
      </div>
      <div className="line2" onClick={onLine2Click}>
        <img className="left-img" src={Trash} alt="쓰레기통" />
        <p className="delete-record">진행중인 기록에서 삭제</p>
      </div>
    </Container>
  );
};

export default InfoPopup;
