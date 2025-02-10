import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Category.styles';
import BlueBtn from '../../components/blueBtn/BlueBtn';
import Title from '../../assets/title.svg';
import Item from './Item';
import X from './x.svg';

const genres = [
  '소설/ 시/ 희곡',
  '사회 과학',
  '경제 경영',
  '역사',
  '예술/ 대중문화',
  '종교/ 역학',
  '인문학',
  '에세이',
  '좋은 부모',
  '만화',
  '자기계발',
  '건강/ 취미/레저',
  '과학',
  '청소년',
  '어린이',
  '유아',
];

const Category = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [popupVisible, setPopupVisible] = useState(false); // #popup1 상태
  // 선택 상태를 배열로 관리
  const [selectedStates, setSelectedStates] = useState(
    Array(genres.length).fill(false)
  );

  // 선택된 항목 개수 계산
  const selectedCount = selectedStates.filter((state) => state).length;
  //const canSelectMore = selectedCount < 3;
  const handleBtnClick = () => {
    const selectedGenres = genres
      .filter((_, index) => selectedStates[index])
      .map((genre) => ({ genreName: genre.trim() })); // JSON 형식 변환

    sessionStorage.setItem('favoriteGenres', JSON.stringify(selectedGenres)); // 세션 스토리지 저장
    console.log('[DEBUG] 저장된 favoriteGenres:', selectedGenres);

    navigate('/onboarding');
  };

  // 항목 클릭 시 상태 업데이트
  const handleSelect = (index) => {
    setSelectedStates((prevStates) => {
      const newStates = [...prevStates];

      // 선택 상태를 변경
      newStates[index] = !newStates[index];
      const newSelectedCount = newStates.filter((state) => state).length;

      // 선택 후 초과 여부 확인
      if (newSelectedCount > 3) {
        handleShowPopup(); // 초과 선택 시 팝업 표시
        return prevStates; // 상태 업데이트 방지
      }
      console.log(`몇개선택했는지 > `, newSelectedCount);
      return newStates; // 정상적으로 상태 업데이트
    });
  };

  const handleShowPopup = () => {
    console.log('최대 3개까지만 선택합시다!'); // 호출 여부 확인
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <Container>
      {popupVisible && <div className="overlay"></div>}

      {popupVisible && ( // popup1Visible 상태에 따라 조건부 렌더링 추가
        <div id="pop-up">
          <span className="pop-up-text">최대 3개 선택 가능합니다</span>
          <img className="x-icon" src={X} alt="x표시" onClick={closePopup} />
        </div>
      )}

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
            onToggleSelect={() => handleSelect(index)} // 상태 업데이트 함수 전달
          />
        ))}
      </div>
      <BlueBtn
        text="선택완료"
        disabled={selectedCount !== 3} // 3개 선택 시만 활성화
        className="start-btn"
        onClick={handleBtnClick}
      />
    </Container>
  );
};

export default Category;
