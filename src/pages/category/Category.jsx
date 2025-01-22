import React, { useState } from 'react';
import { Container } from './Category.styles';
import StatusBar from '../../components/statusbar/StatusBar';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Title from '../../assets/title.svg';
import Item from './Item';

const genres = [
  '문학',
  '인문학',
  '사회과학',
  '자기계발',
  '비즈니스 및 경제',
  '과학 및 기술',
  '예술 및 디자인',
  '실용 / 생활',
  '건강 및 웰니스',
  '교육 및 학습',
  '여행 및 취미',
  '만화',
];

const Category = () => {
  // 선택 상태를 배열로 관리
  const [selectedStates, setSelectedStates] = useState(
    Array(genres.length).fill(false)
  );

  // 선택된 항목 개수 계산
  const selectedCount = selectedStates.filter((state) => state).length;

  // 항목 클릭 시 상태 업데이트
  const handleSelect = (index) => {
    setSelectedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index]; // 클릭된 항목 상태 토글
      return newStates;
    });
  };

  // 선택 가능 여부 판단
  const canSelectMore = selectedCount < 3;

  return (
    <Container>
      <StatusBar />
      <img className="title" src={Title} alt="제목" />
      <p className="interest">
        관심 장르 선택&nbsp;
        <span className="count">{selectedCount}/3</span>
      </p>
      <p className="question">어떤 장르에 관심 있으신가요?</p>
      <div className="item-grid">
        {genres.map((genre, index) => (
          <Item
            key={index}
            text={genre}
            isSelected={selectedStates[index]} // 선택 상태 전달
            canSelectMore={canSelectMore} // 선택 가능 여부 전달
            onToggleSelect={() => handleSelect(index)} // 상태 업데이트 함수 전달
          />
        ))}
      </div>
      <BlueBtn
        text="선택완료"
        disabled={selectedCount !== 3} // 3개 선택 시만 활성화
        className="start-btn"
      />
    </Container>
  );
};

export default Category;
