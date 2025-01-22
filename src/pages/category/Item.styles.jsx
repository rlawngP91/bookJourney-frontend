import styled from 'styled-components';

export const CategoryItem = styled.div`
  width: 104px;
  height: 37px;
  border-radius: 21px;
  border: 1.3px solid ${(props) => (props.isSelected ? '#6AA5F8' : '#a3a3a3')};
  background: #fff;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: ${(props) => (props.isSelected ? '#6AA5F8' : '#a3a3a3')};
    padding: 0;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: var(--Label-Medium-Tracking, 0.5px);
  }
`;
