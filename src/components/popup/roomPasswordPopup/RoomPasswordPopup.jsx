import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import closeBtn from '../../../assets/close.svg';
import { getPasswordInfo } from '../../../apis/getPasswordInfo';
import { postEnterRoom } from '../../../apis/postEnter';
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

const RoomPasswordPopup = ({ roomId, onClose }) => {
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [hostName, setHostName] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchRoomData = async () => {
      setLoading(true);
      try {
        const { roomName, hostName, password } = await getPasswordInfo(roomId);
        setRoomName(roomName);
        setHostName(hostName);
        setPassword(password);
        setErrorMessage('');
      } catch (error) {
        console.error('❌ 방 정보 가져오기 실패:', error);
        setErrorMessage(
          error.message || '방 정보를 가져오는 중 오류가 발생했습니다.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomId]);

  // ✅ 사용자가 입력할 때마다 호출
  const handlePasswordInput = async (value) => {
    if (inputPassword.length < 4) {
      const newPassword = inputPassword + value;
      setInputPassword(newPassword);

      // 🔹 4자리 입력 완료되면 자동으로 검증
      if (newPassword.length === 4) {
        await handlePasswordSubmit(newPassword);
      }
    }
  };

  // ✅ 비밀번호 검증 및 입장 처리
  const handlePasswordSubmit = async (enteredPassword) => {
    try {
      if (parseInt(enteredPassword) !== password) {
        // ❌ 비밀번호 틀림 → 에러 표시 후 리셋
        setIsError(true);
        setErrorMessage('비밀번호가 틀렸습니다.');

        setTimeout(() => {
          setInputPassword('');
          setIsError(false);
          setErrorMessage('');
        }, 1000);
        return;
      }

      // ✅ 비밀번호 맞으면 서버로 입장 요청
      const response = await postEnterRoom(roomId, enteredPassword);
      console.log('✅ 방 입장 성공:', response);

      if (response.roomId) {
        onClose();
        navigate(`/rooms/${roomId}/info`);
      }
    } catch (error) {
      console.error('❌ 방 입장 실패:', error);

      // ✅ 서버에서 받은 에러 메시지를 그대로 출력
      setIsError(true);
      setErrorMessage(error.message);

      setTimeout(() => {
        setInputPassword('');
        setIsError(false);
      }, 1000);
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
        {loading ? (
          <div>방 정보를 불러오는 중...</div>
        ) : (
          <>
            <InfoContainer>
              <RoomTitle>{roomName}</RoomTitle>
              <HostNickname>{hostName}</HostNickname>
            </InfoContainer>
            <PasswordDotsContainer>
              {[0, 1, 2, 3].map((index) => (
                <PasswordDot key={index} isError={isError}>
                  {inputPassword[index] && <DotIndicator isError={isError} />}
                </PasswordDot>
              ))}
            </PasswordDotsContainer>

            {isError && <ErrorText>{errorMessage}</ErrorText>}
          </>
        )}
      </PopupSubContainer>
    </PopupContainer>
  );
};

export default RoomPasswordPopup;
