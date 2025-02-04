import React, { useEffect, useState } from 'react';
import { Wrapper, Header, Body, Container } from './RoomInfo.styles';
import Footer from '../../components/commons/Footer/Footer';
import logo from '../../assets/logo.svg';
import exit from '../../assets/exit.svg';
import ButtonGroup2 from '../../components/InfoBody/ButtonGroup2';
import TabGroup1 from '../../components/InfoBody/TabGroup1';
import InfoBody from '../../components/InfoBody/InfoBody';
import { getBookInfo } from '../../apis/getBookInfo';

export default function BookInfo() {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const data = await getBookInfo();
        console.log('📌 서버에서 받아온 책 정보:', data);
        setBookData(data);
      } catch (err) {
        console.error('❌ 책 정보 가져오기 실패:', err);
        setError('❌ 책 정보를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookInfo();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>
          <div className="title">
            <img src={logo} className="logo" alt="로고" />
            <img src={exit} className="exit" alt="나가기" />
          </div>
          {loading ? (
            <div>📖 책 정보를 불러오는 중...</div>
          ) : error ? (
            <div style={{ color: 'red' }}>❌ 오류: {error}</div>
          ) : (
            <div className="book">
              <div>{bookData.genre}</div> {/* 장르 표시 */}
              <img src={bookData.imageUrl} alt="책 이미지" />
            </div>
          )}
        </Header>
        <Body>
          <InfoBody bookData={bookData} />
          <ButtonGroup2 />
          <TabGroup1 bookData={bookData} />
        </Body>
      </Container>
      <Footer />
    </Wrapper>
  );
}
