import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Popup = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 200px;
  margin: 20px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 40px;
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50%;
    height: 40px;
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(50%);
  }
`;

const PickerColumn = styled.div`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  width: 80px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  padding: 80px 0;
`;

const PickerItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  font-size: 16px;
  color: ${(props) => (props.$selected ? '#000' : '#666')};
  font-weight: ${(props) => (props.$selected ? '600' : '400')};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

const DateSelectorPopup = ({ onClose, onSelect, currentDate }) => {
  const [selectedYear, selectedMonth] = currentDate.split(' ');
  const [selected, setSelected] = useState({
    year: selectedYear,
    month: selectedMonth,
  });

  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const years = [
    '2027년',
    '2026년',
    '2025년',
    '2024년',
    '2023년',
    '2022년',
    '2021년',
  ];
  const months = [
    '전체보기',
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const handleScroll = (ref, items, type) => {
    if (!ref.current) return;

    const itemHeight = 40;
    const scrollTop = ref.current.scrollTop;
    const selectedIndex = Math.round(scrollTop / itemHeight);

    setSelected((prev) => ({
      ...prev,
      [type]: items[selectedIndex],
    }));
  };

  useEffect(() => {
    const yearIndex = years.indexOf(selected.year);
    const monthIndex = months.indexOf(selected.month);

    if (yearRef.current) {
      yearRef.current.scrollTop = yearIndex * 40;
    }
    if (monthRef.current) {
      monthRef.current.scrollTop = monthIndex * 40;
    }
  }, []);

  return (
    <>
      <Overlay onClick={onClose} />
      <Popup>
        <PickerContainer>
          <PickerColumn
            ref={yearRef}
            onScroll={() => handleScroll(yearRef, years, 'year')}
          >
            {years.map((year) => (
              <PickerItem key={year} $selected={selected.year === year}>
                {year}
              </PickerItem>
            ))}
          </PickerColumn>
          <PickerColumn
            ref={monthRef}
            onScroll={() => handleScroll(monthRef, months, 'month')}
          >
            {months.map((month) => (
              <PickerItem key={month} $selected={selected.month === month}>
                {month}
              </PickerItem>
            ))}
          </PickerColumn>
        </PickerContainer>
        <ButtonContainer>
          <ConfirmButton
            onClick={() => onSelect(`${selected.year} ${selected.month}`)}
          >
            기간 선택 완료
          </ConfirmButton>
        </ButtonContainer>
      </Popup>
    </>
  );
};

export default DateSelectorPopup;
