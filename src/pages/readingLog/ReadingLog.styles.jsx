import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 393px; // 100% 393px고정
  min-height: 100vh;
  background: #f6f7f9;

  .readinglog-title {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding-top: 35px;
    margin-bottom: 29px;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 24px;
  border-radius: 100px;
  background: #f6f7f9;
  padding: 4px;
`;

export const FilterLeftButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border: none;
  font-family: Pretendard;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.$active ? '#2E90FA' : '#FFF')};
  color: ${(props) => (props.$active ? '#FFFFFF' : '#000000')};

  &:hover {
    background-color: ${(props) => (props.$active ? '#1570CD' : '#FFF')};
  }
`;

export const FilterRightButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border: none;
  font-family: Pretendard;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.$active ? '#2E90FA' : '#FFF')};
  color: ${(props) => (props.$active ? '#FFFFFF' : '#000000')};

  &:hover {
    background-color: ${(props) => (props.$active ? '#1570CD' : '#F1F5F9')};
  }
`;

export const DateSelector = styled.div`
  display: flex;
  height: 18px;
  justify-content: center;
  align-items: flex-start;
  gap: 191px;
  flex-shrink: 0;

  .roomcontainer {
    display: flex;
    width: fit-content;
    height: 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    flex-shrink: 0;
  }
  .room {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
  .roomtotal {
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
  .datecontainer {
    display: flex;
    width: fit-content;
    height: 18px;
    padding-right: 0px;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    flex-shrink: 0;
  }
  .date {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 123.077% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
  .arrowBtn {
    display: flex;
    width: 18px;
    height: 18px;
    transform: rotate(-90deg);
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const NoItems = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 147px;
  margin-top: 275px;
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fbfbfb;
  z-index: 10;
`;
