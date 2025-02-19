import React from 'react';
import { Container } from './Popup.styles';
import exp from './exp.svg';
import profile1 from './profile1.svg';
import profile2 from './profile2.svg';
import profile3 from './profile3.svg';
import profile4 from './profile4.svg';
import BlueBtn from '../../components/blueBtn/BlueBtn';

const Popup = ({ onClose, onFileSelect, onProfileSelect }) => {
  return (
    <Container>
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <div className="profile-choice-text">프로필 이미지 선택</div>
        <div className="profile-img-container">
          <img src={exp} alt="탐색기" onClick={onFileSelect} />
          <img
            src={profile1}
            alt="프로필1"
            onClick={() => onProfileSelect(profile1)}
          />
          <img
            src={profile2}
            alt="프로필2"
            onClick={() => onProfileSelect(profile2)}
          />
          <img
            src={profile3}
            alt="프로필3"
            onClick={() => onProfileSelect(profile3)}
          />
          <img
            src={profile4}
            alt="프로필4"
            onClick={() => onProfileSelect(profile4)}
          />
        </div>

        <BlueBtn
          className={'save'}
          text="저장하기"
          width={'351px'}
          onClick={onClose}
        />
      </div>
    </Container>
  );
};

export default Popup;
