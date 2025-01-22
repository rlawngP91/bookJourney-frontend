import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupSubContainer = styled.div`
  width: 268px;
  height: 248px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 12px;
    height: 12px;
    display: flex;
    margin-left: 240px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-top: 11px;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  flex: 1;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
`;

export const RoomTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
`;

export const HostNickname = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
`;

export const PasswordDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 35px;
  margin-bottom: 24px;
`;

export const PasswordDot = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid ${(props) => (props.isError ? '#EF4444' : '#3B82F6')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
`;

export const DotIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.isError ? '#EF4444' : '#3B82F6')};
`;

export const ErrorText = styled.div`
  color: #ef4444;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
`;
