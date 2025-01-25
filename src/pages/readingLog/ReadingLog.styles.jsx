import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: #f6f7f9;

  .readinglog-title {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 35px;
    margin-bottom: 29px;
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 100px;
    background: #fff;
    padding: 4px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

export const FilterButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 100px;
  font-family: Pretendard;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.$active ? '#2E90FA' : 'transparent')};
  color: ${(props) => (props.$active ? '#FFFFFF' : '#000000')};

  &:hover {
    background-color: ${(props) => (props.$active ? '#1570CD' : '#F1F5F9')};
  }
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--Label-Medium-Line-Height, 16px); /* 123.077% */
  letter-spacing: var(--Label-Medium-Tracking, 0.5px);

  .img {
    margin-left: 5px;
    width: 18px;
    height: 18px;
  }

  .roomtotal {
    margin-left: auto;
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
`;

export const NoItems = styled.div`
  text-align: center;
  color: #64748b;
  font-family: Pretendard;
  font-size: 16px;
  margin-top: 200px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fbfbfb;
  z-index: 10;
`;
