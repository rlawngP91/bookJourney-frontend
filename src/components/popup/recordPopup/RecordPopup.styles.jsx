import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed; /* 화면에 고정된 위치 */
  top: 50%; /* 화면의 중앙 */
  left: 50%; /* 화면의 중앙 */
  transform: translate(-50%, -50%); /* 완벽한 중앙 정렬 */
  z-index: 2000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  height: 350px;
  width: 360px;
  background-color: #fff;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    text-align: center;

    padding-top: 40px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */
  }

  .label {
    padding-top: 25px;
    color: #000;
    font-family: Pretendard;
    font-size: var(--sds-typography-body-size-small);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
  }

  .page {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .input {
      width: 60.682px;
      height: 48.545px;
      flex-shrink: 0;
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 17.53px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 24.542px */
      border-radius: 8px;
      background-color: #eae7e7;
      border: none; /* ✅ 테두리 없애기 */
      outline: none; /* ✅ 클릭(포커스) 시 테두리 없애기 */
      box-shadow: none; /* ✅ 그림자 제거 (일부 브라우저 기본 스타일) */

      border: 1px solid #6aa5f8;
    }
    .slash {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 17.53px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 24.542px */
      gap: 8px;
    }

    .last {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 17.53px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 24.542px */
      gap: 12px;
    }

    .totalpage {
      width: 45.682px;
      height: 48.545px;
      line-height: 46px;
      text-align: center;
    }

    .p {
    }
  }

  .last {
    padding-top: 25px;
    padding-bottom: 25px;
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 14.534px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.378px; /* 133.333% */
    letter-spacing: 0.484px;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 30px;
  border-radius: 9px;
  border: 1px solid #cecbcb;
  background: #6aa5f8;
  /* 기본 스타일 제거 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;
