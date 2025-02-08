import React, { useState } from 'react';
import { Wrapper, Title, Container, Box, Input } from './EntireRecord.styles';
import xbox from '../../assets/xbox.svg';
export default function EntireRecord({ onClose }) {
  const [title, setTitle] = useState(''); // ✅ 페이지 입력값
  const [text, setText] = useState(''); // ✅ 기록 입력값

  return (
    <>
      <Wrapper>
        <Box>
          <Container>
            <div
              className="close"
              onClick={onClose}
              style={{ cursor: 'pointer' }}
            >
              <img src={xbox} />
            </div>
            <div className="title">전체 기록의 제목을 정해주세요</div>
            <Title
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={25}
              placeholder="제목"
            />
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={5000}
              type="text"
            />
            <div className="bottom">
              <div className="page">
                <div className="now">{text.length}</div>
                <div className="slash">/</div>
                <div>5000</div>
              </div>
              <div className="send">기록</div>
            </div>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}
