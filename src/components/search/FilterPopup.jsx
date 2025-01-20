import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from './DataPicker';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

const PopupContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 24px;
  z-index: 51;
  max-height: 90vh;
  overflow-y: auto;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`;

const CategoryButton = styled.button`
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: ${(props) => (props.selected ? '#4F8BFF' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #4f8bff;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
`;

const FilterPopup = ({ onClose, onApply }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deadlineStartDate, setDeadlineStartDate] = useState(null);
  const [deadlineEndDate, setDeadlineEndDate] = useState(null);
  const [periodStartDate, setPeriodStartDate] = useState(null);
  const [periodEndDate, setPeriodEndDate] = useState(null);

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

  const handleApply = () => {
    onApply({
      category: selectedCategory,
      deadlineStart: deadlineStartDate,
      deadlineEnd: deadlineEndDate,
      periodStart: periodStartDate,
      periodEnd: periodEndDate,
    });
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryContainer>

        <DatePicker
          label="모집 마감일"
          startDate={deadlineStartDate}
          endDate={deadlineEndDate}
          onStartDateChange={setDeadlineStartDate}
          onEndDateChange={setDeadlineEndDate}
        />

        <DatePicker
          label="방 기간"
          startDate={periodStartDate}
          endDate={periodEndDate}
          onStartDateChange={setPeriodStartDate}
          onEndDateChange={setPeriodEndDate}
        />

        <ApplyButton onClick={handleApply}>적용</ApplyButton>
      </PopupContainer>
    </>
  );
};

export default FilterPopup;
