import styled from 'styled-components';

export const ReadingCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  padding-top: 155px;
`;

export const CalendarHandlerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 393px; // 100% 393px
  margin-bottom: 34px;
  background-color: #f6f7f9;
`;

export const CalendarContentWrapper = styled.div`
  flex: 1;
  width: 393px; // 100% 393px
  background: #fff;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
`;
