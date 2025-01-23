// RoomPasswordPopup.jsx
import React, { useState, useEffect } from 'react';
import closeBtn from '../../../assets/close.svg';

import {
  PopupContainer,
  PopupSubContainer,
  DescriptionContainer,
  Text,
  InfoContainer,
  PasswordDotsContainer,
  PasswordDot,
  DotIndicator,
  ErrorText,
  RoomTitle,
  HostNickname,
} from './RoomPasswordPopup.styles';

const RoomPasswordPopup = ({ title, hostNickname, password, onClose }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handlePasswordInput = (value) => {
    if (inputPassword.length < 4) {
      const newPassword = inputPassword + value;
      setInputPassword(newPassword);

      if (newPassword.length === 4) {
        if (newPassword !== password) {
          setIsError(true);
          setTimeout(() => {
            setInputPassword('');
            setIsError(false);
          }, 1000);
        } else {
          onClose(true);
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handlePasswordInput(e.key);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [inputPassword]);

  return (
    <PopupContainer>
      <PopupSubContainer>
        <img src={closeBtn} onClick={() => onClose(false)} />
        <DescriptionContainer>
          <Text>비밀번호를 입력해주세요</Text>
        </DescriptionContainer>

        <InfoContainer>
          <RoomTitle>{title}</RoomTitle>
          <HostNickname>{hostNickname}</HostNickname>
        </InfoContainer>

        <PasswordDotsContainer>
          {[0, 1, 2, 3].map((index) => (
            <PasswordDot key={index} isError={isError}>
              {inputPassword[index] && <DotIndicator isError={isError} />}
            </PasswordDot>
          ))}
        </PasswordDotsContainer>

        {isError && <ErrorText>* 비밀번호를 다시 확인해주세요</ErrorText>}
      </PopupSubContainer>
    </PopupContainer>
  );
};

export default RoomPasswordPopup;
