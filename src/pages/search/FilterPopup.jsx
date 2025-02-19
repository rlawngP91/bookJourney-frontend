import React, { useState } from 'react';
import resetIcon from '../../assets/reset.svg';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import CountSlider from './CountSlider';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 393px; // 393px고정
  background-color: rgba(0, 0, 0, 0.42);
  z-index: 50;
`;

const PopupContainer = styled.div`
  position: fixed;
  width: 393px; // 393px고정
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 51;
  max-height: 90vh;
  overflow-y: auto;
`;

const PopupSubContainer = styled.div`
  margin: 24px; // PopupConatienr에서 padding처리 안돼 overlay때문에
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 70px;
`;

const CategoryButton = styled.button`
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: ${(props) => (props.$isSelected ? '#A3C7FA' : 'white')};
  color: ${(props) => (props.$isSelected ? 'white' : 'black')};
`;

const ResetContainer = styled.button`
  display: flex;
  width: fit-content;
  height: 14px;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex-shrink: 0;
  border: none;
  background: white;
  color: #999;
  margin-left: auto;

  .img {
    display: flex;
    width: 12px;
    height: 12px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
  .span {
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 14px */
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #6aa5f8;
  margin-top: 24px;
  border-radius: 8.795px;
  border: 0.977px solid #cecbcb;

  color: #fff;
  font-family: var(--Label-Small-Font, Roboto);
  font-size: 14.658px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.635px; /* 106.667% */
  letter-spacing: 0.489px;
`;

const FilterPopup = ({ onClose, onApply, $currentFilters }) => {
  // DatePicker 하나만
  const [activeCalendar, setActiveCalendar] = useState(null);
  const handleCalendarOpen = (calendarId) => {
    setActiveCalendar(calendarId);
  };

  const handleCalendarClose = () => {
    setActiveCalendar(null);
  };

  const [selectedCategory, setSelectedCategory] = useState(
    $currentFilters.category || ''
  );
  const [deadlineStartDate, setDeadlineStartDate] = useState(
    $currentFilters?.deadline?.start || null
  );
  const [deadlineEndDate, setDeadlineEndDate] = useState(
    $currentFilters?.deadline?.end || null
  );
  const [periodStartDate, setPeriodStartDate] = useState(
    $currentFilters?.period?.start || null
  );
  const [periodEndDate, setPeriodEndDate] = useState(
    $currentFilters?.period?.end || null
  );
  const [recordCount, setRecordCount] = useState(
    $currentFilters?.recordcnt || 0
  );

  const categories = [
    '소설/시/희곡',
    '좋은부모',
    '사회과학',
    '만화',
    '경제경영',
    '자기계발',
    '역사',
    '건강/취미',
    '예술/대중문화',
    '과학',
    '종교/역학',
    '청소년',
    '인문학',
    '어린이',
    '에세이',
    '유아',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? '' : category
    );
  };

  const handleApply = () => {
    onApply({
      category: selectedCategory,
      deadline: {
        start: deadlineStartDate,
        end: deadlineEndDate,
      },
      period: {
        start: periodStartDate,
        end: periodEndDate,
      },
      recordcnt: recordCount,
    });
  };

  const handleReset = () => {
    setSelectedCategory('');
    setDeadlineStartDate(null);
    setDeadlineEndDate(null);
    setPeriodStartDate(null);
    setPeriodEndDate(null);
    setRecordCount(100);
    setActiveCalendar(null);
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <PopupSubContainer>
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                $isSelected={selectedCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryContainer>

          <DatePicker
            label="모집 기간"
            startDate={deadlineStartDate}
            endDate={deadlineEndDate}
            onStartDateChange={setDeadlineStartDate}
            onEndDateChange={setDeadlineEndDate}
            isCalendarOpen={activeCalendar === 'deadline'}
            onCalendarOpen={() => handleCalendarOpen('deadline')}
            onCalendarClose={handleCalendarClose}
          />

          <DatePicker
            label="방 기간"
            startDate={periodStartDate}
            endDate={periodEndDate}
            onStartDateChange={setPeriodStartDate}
            onEndDateChange={setPeriodEndDate}
            isCalendarOpen={activeCalendar === 'period'}
            onCalendarOpen={() => handleCalendarOpen('period')}
            onCalendarClose={handleCalendarClose}
          />

          <CountSlider
            initialValue={$currentFilters.recordcnt || 0}
            value={recordCount}
            onValueChange={(value) => setRecordCount(value)}
          />

          <ResetContainer onClick={handleReset}>
            <img src={resetIcon} />
            <span>전체해제</span>
          </ResetContainer>
          <ApplyButton onClick={handleApply}>적용</ApplyButton>
        </PopupSubContainer>
      </PopupContainer>
    </>
  );
};

export default FilterPopup;
