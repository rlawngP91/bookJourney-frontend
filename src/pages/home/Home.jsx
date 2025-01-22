import React, { useState } from 'react';
import { Container, Wrapper } from './Home.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import Title from '../../assets/title.svg';
import Star from './star.svg';
import Bell from './bell.svg';
import Book from './book.svg';
import Second from '../../assets/second.svg';
import Footer from '../../components/commons/Footer/Footer';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Book2 from './book2.svg';
import Room from './Room';
import Arrow from './arrow.svg';
import BookFrame from '../../components/bookFrame/BookFrame';
import DummyBook1 from '../../assets/dummyBook1.svg';
import DummyBook2 from '../../assets/dummyBook2.svg';
//import DummyBook3 from '../../assets/dummyBook3.svg';
const Home = () => {
  //const [bookCount, setBookCount] = useState(0); // 백엔드에서 가져올 값
  const [bookCount] = useState(4); // 진행중인 기록 - 백엔드에서 가져올 값
  const [readingCount] = useState(31); // 읽기 횟수 - 백엔드에서 가져올 값
  return (
    <Wrapper>
      <Container>
        <StatusBar />
        <img className="title" src={Title} alt="제목" />
        <img className="star" src={Star} alt="별 아이콘" />
        <img className="bell" src={Bell} alt="벨 아이콘" />
        <span className="user-name">
          닉네임 <span>님</span>
        </span>
        <span className="welcome">환영합니다!</span>
        <img className="book" src={Book} alt="책" />
        <span className="description">*자기계발 베스트 셀러</span>
        <img className="circles" src={Second} alt="두번째 토글" />
        <div className="record-container">
          <div className="progress">
            <span className="progress-title">
              진행중인 기록&nbsp;&nbsp;
              <span className="recording-count">{bookCount}</span>
            </span>
            {/* 조건부 렌더링 */}
            <div
              className={`place-holder-descrip ${
                bookCount === 0 ? '' : 'hidden'
              }`}
            >
              <p className="line1">
                여기는 <span className="nickname">닉네임</span> 님의
              </p>
              <p className="line2">독서 기록과 이야기가 담길</p>
              <p className="line3">특별한 공간입니다.</p>
              <p className="line4">지금 책을 찾으러 가보세요!</p>
              <BlueBtn className={'btn'} text="책 찾기" width={'351px'} />
            </div>
            <div
              className={`place-holder-list ${bookCount === 0 ? 'hidden' : ''}`}
            >
              <img className="arrow" src={Arrow} alt="화살표" />
              <div className="book-scroll-container">
                <BookFrame
                  imageSrc={DummyBook1}
                  bookTitle="밤의 여행자들"
                  hour={1}
                  percentage={50}
                  readType="같이"
                  writer="윤고은"
                />
                <BookFrame
                  imageSrc={DummyBook2}
                  bookTitle="모든 삶은 흐른다"
                  hour={1}
                  percentage={50}
                  readType="혼자"
                  writer="로랑스 드빌레르"
                />
                <BookFrame
                  imageSrc={DummyBook2}
                  readType="혼자"
                  bookTitle="말의 품격"
                  hour={1}
                  percentage={50}
                  writer="이기주"
                />
                <BookFrame
                  imageSrc={DummyBook1}
                  readType="같이"
                  bookTitle="말의 품격"
                  hour={1}
                  percentage={50}
                  writer="이기주"
                />
              </div>
            </div>
            <span className="read-count-text">읽기 횟수가 많은 책</span>
          </div>
          <div className="book-room-info">
            <div className="book-info-container">
              <img className="left-side" src={Book2} alt="책표지" />
              <div className="right-side">
                <div className="top-side">
                  <span className="book-title">어른의 행복은 조용하다</span>
                  <div className="reading-count">{readingCount}회</div>
                </div>
                <span className="writer-name">태수 저</span>
                <div className="bottom-side">
                  <p className="introduction-letter">
                    “ 우습지만 이곳에 이 글 하나가 삶을 등지고 싶었던 나를 다시
                    일으켜 세워줬습니다. 선한 영향력 본받아 다시 사는 삶 ...”
                  </p>
                </div>
              </div>
            </div>
            <div className="recruiting-room-info">
              <span className="recruiting-title">1월 첫째주 모집중인 방</span>
              <div className="room-wrapper">
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <Room
                  currentPeople={4}
                  maxPeople={6}
                  roomTitle="여기모여라 방"
                  bookTitle="이기적 유전자"
                  period="2024.12.30 ~ 2025.01.14"
                />
                <div className="footer-place-holder"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;
