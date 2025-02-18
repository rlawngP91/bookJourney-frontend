import styled, { keyframes } from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  width: 393px; //없으면 반응형으로 됨
  flex-direction: column;
  min-height: 100vh; // min-height 대신 height 사용
  background: #f6f7f9;
  position: relative;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: #f6f7f9;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 130px 0 88px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 10;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px;
`;

export const BookListSection = styled.section`
  margin-top: 0px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 12px;

  span {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  button {
    font-family: Pretendard;
    font-size: 12px;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoResultsMessage = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 144px;
  margin-top: 190px; // 459 -> 419
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
`;

export const ListTypeContainer = styled.div`
  display: ${(props) => (props.$searchQuery ? 'flex' : 'none')};
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 5px;
  margin-left: 32px;
  margin-right: 120px;
  margin-top: 10px;
`;

export const ListTypeButton = styled.button`
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  font-family: Pretendard;
  font-size: 14px;
  color: ${(props) => (props.$isSelected ? '#6AA5F8' : '#666666')};
  font-weight: ${(props) => (props.$isSelected ? '600' : '400')};
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    min-width: ${(props) => (props.$isSelected ? 'calc(100% - 15px)' : '0')};
    height: 2px;
    background-color: ${(props) => (props.$isSelected ? '#6AA5F8' : '#FFF')};
  }
`;

export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const LoadingContent = styled.div`
  color: #4b96f8;
  font-style: normal;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    animation: ${float} 2s ease-in-out infinite;
    animation-delay: ${(props) => props.$delay}s;
  }
`;
