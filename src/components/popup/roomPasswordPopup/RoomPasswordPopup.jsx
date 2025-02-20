import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import closeBtn from '../../../assets/close.svg';
import { getPasswordInfo } from '../../../apis/getPasswordInfo';
import { postEnterRoom } from '../../../apis/postEnter';
import ToastPopup from '../../ToastPopup/ToastPopup';
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
  const [toastMessage, setToastMessage] = useState(null);

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

  // ✅ 비밀번호 입력 이벤트 핸들링
  const handlePasswordInput = (value) => {
    if (value === 'Backspace') {
      setInputPassword((prev) => prev.slice(0, -1));
      return;
    }

    if (inputPassword.length < 4) {
      const newPassword = inputPassword + value;
      setInputPassword(newPassword);

      // 🔹 4자리 입력 완료되면 자동으로 검증
      if (newPassword.length === 4) {
        handlePasswordSubmit(newPassword);
      }
    }
  };

  // ✅ 키보드 입력 이벤트 추가
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handlePasswordInput(e.key);
      } else if (e.key === 'Backspace') {
        handlePasswordInput('Backspace');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [inputPassword]);

  // ✅ 비밀번호 검증 및 입장 처리
  const handlePasswordSubmit = async (enteredPassword) => {
    try {
      if (parseInt(enteredPassword) !== password) {
        setIsError(true);
        setErrorMessage('비밀번호가 틀렸습니다.');

        setTimeout(() => {
          setInputPassword('');
          setIsError(false);
          setErrorMessage('');
        }, 2000);
        return;
      }

      // ✅ 비밀번호 맞으면 방 입장 API 호출
      const response = await postEnterRoom(roomId, enteredPassword);
      console.log('✅ 방 입장 성공:', response);

      if (response.roomId) {
        setTimeout(() => {
          onClose();
          navigate(`/rooms/${roomId}/info`);

          // ✅ 네비게이션 후 토스트 팝업 표시
          setTimeout(() => {
            setToastMessage('성공적으로 방에 입장했습니다');
          }, 10);
        }, 10);
      }

      setToastMessage('성공적으로 방에 입장했습니다');
    } catch (error) {
      console.error('❌ 방 입장 실패:', error);

      setIsError(true);
      setErrorMessage(error.message);

      setTimeout(() => {
        setInputPassword('');
        setIsError(false);
      }, 1000);
    }
  };

  return (
    <PopupContainer>
      <PopupSubContainer>
        <img src={closeBtn} onClick={() => onClose(false)} />
        <DescriptionContainer>
          <Text>비밀번호를 입력해주세요</Text>
        </DescriptionContainer>
        {loading ? (
          <div>
            <InfoContainer>
              <RoomTitle>방 이름</RoomTitle>
              <HostNickname>HOST 이름</HostNickname>
            </InfoContainer>
            <PasswordDotsContainer>
              {[0, 1, 2, 3].map((index) => (
                <PasswordDot key={index} isError={isError}>
                  {inputPassword[index] && <DotIndicator isError={isError} />}
                </PasswordDot>
              ))}
            </PasswordDotsContainer>
          </div>
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

      {/* ✅ 토스트 팝업 추가 */}
      {toastMessage && (
        <ToastPopup
          title="방 참가 성공"
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </PopupContainer>
  );
};

export default RoomPasswordPopup;
