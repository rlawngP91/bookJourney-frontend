import React, { useState } from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button, ButtonContainer } from './MakeReadwith.styles';
import MakeReadwithTogether from '../../components/MakeReadwithTogether/MakeReadwithTogether';

export default function MakeReadwith() {
  const [selected, setSelected] = useState('혼자');
  const handleButtonClick = (option) => {
    setSelected(option); // 클릭한 버튼의 상태를 선택
  };

  return (
    <>
      <Wrapper>
        <RWHeader />
        {/* 공개/비공개 버튼 */}
        <ButtonContainer>
          <Button
            $isSelected={selected === '혼자'}
            onClick={() => handleButtonClick('혼자')}
          >
            <div>혼자 기록할래요</div>
          </Button>
          <Button
            $isSelected={selected === '같이'}
            onClick={() => handleButtonClick('같이')}
          >
            <div>여러명이서 기록할래요</div>
          </Button>
        </ButtonContainer>
        {selected === '같이' && <MakeReadwithTogether />}
        <RWFooter />
      </Wrapper>
    </>
  );
}
