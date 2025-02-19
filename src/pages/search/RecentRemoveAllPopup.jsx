import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 393px; // 393px고정
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.42);
  z-index: 50;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 10%;
  width: 268px;
  height: 144px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 2.73px 2.73px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  z-index: 51;
`;

const PopupMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 23px;
  gap: 14px;
  padding-bottom: 25px;
  border-bottom: 1px solid #cecbcb;
`;

const PopupTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 18.2px */
`;
const PopupSubtitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular);
  line-height: 140%; /* 16.8px */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapperCancel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 12px;
  padding-bottom: 14px;
  border-right: 1px solid #cecbcb;
`;

const ButtonWrapperApply = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 12px;
  padding-bottom: 14px;
`;

const CancelButton = styled.button`
  color: #a3a3a3;
  width: 100%;
  height: 100%;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
  border: none;
  background: white;
  cursor: pointer;
`;
const ApplyButton = styled.button`
  color: #d25643;
  width: 100%;
  height: 100%;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 18.2px */
  border: none;
  background: white;
  cursor: pointer;
`;

const RecentRemoveAllPopup = ({ onClose, onApply }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <PopupMessage>
          <PopupTitle>최근 검색어 모두 삭제</PopupTitle>
          <PopupSubtitle>최근 검색어를 모두 삭제하시겠습니까?</PopupSubtitle>
        </PopupMessage>
        <ButtonContainer>
          <ButtonWrapperCancel>
            <CancelButton onClick={onClose}>취소</CancelButton>
          </ButtonWrapperCancel>
          <ButtonWrapperApply>
            <ApplyButton onClick={onApply}>삭제</ApplyButton>
          </ButtonWrapperApply>
        </ButtonContainer>
      </PopupContainer>
    </>
  );
};

export default RecentRemoveAllPopup;
