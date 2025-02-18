import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper, Header, Body, Container } from './RoomInfo.styles';
import Footer from '../../components/commons/Footer/Footer';
import logo from '../../assets/logo.svg';
import exit from '../../assets/exit.svg';
import bookloading from '../../assets/bookloading.svg';
import ButtonGroup from '../../components/InfoBody/ButtonGroup';
import ButtonGroup2 from '../../components/InfoBody/ButtonGroup2';
import TabGroup2 from '../../components/InfoBody/TapGroup2';
import TabGroup1 from '../../components/InfoBody/TabGroup1';
import InfoBody from '../../components/InfoBody/InfoBody';
import { getRoomInfo } from '../../apis/getRoomInfo';

export default function RoomInfo() {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!roomId) {
        console.warn('🚨 roomId가 없습니다. API 요청을 중단합니다.');
        return;
      }

      console.log('🔥 API 요청 시작! roomId:', roomId);

      try {
        const data = await getRoomInfo(roomId);
        console.log('✅ API 응답 데이터:', data);
        setRoomData(data);
      } catch (error) {
        console.error('❌ API 요청 실패:', error);
        setError('❌ 방 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [roomId]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <div className="title">
            <img src={logo} className="logo" alt="로고" />
            <img
              src={exit}
              className="exit"
              alt="나가기"
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {loading ? (
            <div className="book">
              <div>장르</div>
              <img src={bookloading} alt="책 이미지" />
            </div>
          ) : error ? (
            <div style={{ color: 'red' }}>❌ 오류: {error}</div>
          ) : (
            <div className="book">
              <div>{roomData.genre}</div>
              <img src={roomData.imageUrl} alt="책 이미지" />
            </div>
          )}
        </Header>
        <Body>
          <InfoBody roomData={roomData} />
          {roomData?.recruitCount === 1 && roomData?.member ? (
            <>
              <ButtonGroup />
              <TabGroup1 roomData={roomData} />
            </>
          ) : (
            <>
              {roomData?.member ? (
                <ButtonGroup />
              ) : (
                <ButtonGroup2 roomData={roomData} roomId={roomId} />
              )}
              <TabGroup2 roomData={roomData} />
            </>
          )}
        </Body>
      </Container>
      <Footer />
    </Wrapper>
  );
}
