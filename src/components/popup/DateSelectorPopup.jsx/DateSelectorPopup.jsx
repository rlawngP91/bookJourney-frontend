import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 393px; // 393px고정
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Popup = styled.div`
  position: fixed;
  width: 345px; // 393px고정 padding고려
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 24px;
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
  color: #fff;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 106.667%; /* 106.667% */
  cursor: pointer;
`;

const DateSelectorPopup = ({ onClose, onSelect, currentDate, signupDate }) => {
  // signupDate 파싱 (예: "2025.02.10" -> { year: "2025년", month: "2월" })
  const [signupYear, signupMonth] = signupDate
    .split('.')
    .map((value, index) => {
      if (index === 0) return `${value}년`;
      if (index === 1) return `${value}월`;
      return value;
    });

  const [selectedYear, selectedMonth] = currentDate.split(' ');
  const [selected, setSelected] = useState({
    year: selectedYear,
    month: selectedMonth,
  });

  const yearRef = useRef(null);
  const monthRef = useRef(null);

  // 기본 연도 배열
  // 2020년부터 2100년까지의 연도 배열 생성
  const allYears = Array.from(
    { length: 81 },
    (_, index) => `${2100 - index}년`
  );

  // signupYear 이후의 연도만 필터링
  const years = allYears.filter((year) => {
    const yearNum = parseInt(year);
    const signupYearNum = parseInt(signupYear);
    return yearNum >= signupYearNum;
  });

  const allMonths = [
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

  // 선택된 연도가 가입 연도와 같을 경우, 가입월 이후의 월만 표시
  // const months = useMemo(() => {
  //   if (selected.year === signupYear) {
  //     const signupMonthNum = parseInt(signupMonth);
  //     return allMonths.filter((month, index) => {
  //       if (index === 0) return true; // '전체보기' 항상 포함
  //       return index === 0 || parseInt(month) >= signupMonthNum;
  //     });
  //   }
  //   return allMonths;
  // }, [selected.year, signupYear, signupMonth]);

  const handleScroll = (ref, items, type) => {
    if (!ref.current) return;

    const itemHeight = 40;
    const scrollTop = ref.current.scrollTop;
    const selectedIndex = Math.round(scrollTop / itemHeight);

    // 선택된 값이 유효한 범위 내에 있는지 확인
    if (selectedIndex >= 0 && selectedIndex < items.length) {
      setSelected((prev) => ({
        ...prev,
        [type]: items[selectedIndex],
      }));
    }
  };

  useEffect(() => {
    // 초기 스크롤 위치 설정
    const yearIndex = years.indexOf(selected.year);
    const monthIndex = allMonths.indexOf(selected.month);

    if (yearRef.current && yearIndex !== -1) {
      yearRef.current.scrollTop = yearIndex * 40;
    }
    if (monthRef.current && monthIndex !== -1) {
      monthRef.current.scrollTop = monthIndex * 40;
    }
  }, []);

  // 연도가 변경될 때 월 선택 초기화
  useEffect(() => {
    if (selected.year === signupYear) {
      // 가입 연도일 경우, 가입월 이전의 월이 선택되어 있다면 가입월로 변경
      const currentMonthNum = parseInt(selected.month);
      const signupMonthNum = parseInt(signupMonth);
      if (currentMonthNum < signupMonthNum) {
        setSelected((prev) => ({
          ...prev,
          month: signupMonth,
        }));
      }
    }
  }, [selected.year]);

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
            onScroll={() => handleScroll(monthRef, allMonths, 'month')}
          >
            {allMonths.map((month) => (
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
