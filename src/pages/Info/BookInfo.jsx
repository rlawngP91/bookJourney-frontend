import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper, Header, Body, Container } from './RoomInfo.styles';
import Footer from '../../components/commons/Footer/Footer';
import logo from '../../assets/logo.svg';
import exit from '../../assets/exit.svg';
import ButtonGroup3 from '../../components/InfoBody/ButtonGroup3';
import TabGroup1 from '../../components/InfoBody/TabGroup1';
import InfoBody from '../../components/InfoBody/InfoBody';
import { getBookInfo } from '../../apis/getBookInfo';

export default function BookInfo() {
  const navigate = useNavigate();
  const { isbn } = useParams();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookInfo = async () => {
      if (!isbn) {
        console.warn('🚨 책 정보가 없습니다. API 요청을 중단합니다.');
      }

      try {
        const data = await getBookInfo(isbn);
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
            <img
              src={exit}
              className="exit"
              alt="나가기"
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />{' '}
          </div>
          {loading ? (
            <></>
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
          <ButtonGroup3 />
          <TabGroup1 bookData={bookData} />
        </Body>
      </Container>
      <Footer />
    </Wrapper>
  );
}
