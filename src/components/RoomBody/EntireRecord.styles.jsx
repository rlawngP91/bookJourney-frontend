import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed; /* 화면에 고정된 위치 */
  z-index: 2000; /* 다른 요소 위로 올림 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.42);
  width: 100%;
  height: 100%;
`;

export const Title = styled.input`
  height: 36px;
  width: 343px;
  background-color: transparent;
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 나오는 아웃라인 제거 */
  box-sizing: border-box;
  border-radius: 9px;
  background-color: rgba(217, 217, 217, 0.31);
  padding: 0px 10px;
  text-align: center;
`;

export const Box = styled.div`
  position: fixed;
  display: flex;
  height: 535px;
  width: 393px;
  background-color: #fff;
  flex-direction: column;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  .close {
    position: absolute;
    left: 25px;
    top: 25px;
  }

  .inputpage {
    justify-content: space-between;
    .p {
      color: #a3a3a3;
      text-align: center;
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }

  .title {
    text-align: center;
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    padding-top: 55px;
    padding-bottom: 10px;
  }
  .bottom {
    box-sizing: border-box;
    padding: 25px 25px 85px 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .page {
      display: flex;
      flex-direction: row;

      .slash {
      }
      .now {
      }
    }

    .send {
      color: #6aa5f8;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
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

export const Input = styled.textarea`
  width: 345px;
  height: 292px;
  color: #000;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid #6aa5f8;
  background-color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 17.53px;
  font-style: normal;
  font-weight: 400;
  border-radius: 8px;
  outline: none; /* ✅ 클릭(포커스) 시 테두리 없애기 */
  box-shadow: none; /* ✅ 그림자 제거 (일부 브라우저 기본 스타일) */
  margin-top: 15px;

  resize: none; /* ✅ 크기 조절 방지 */
  overflow-y: auto; /* ✅ 넘치면 스크롤 */
  word-break: break-word; /* ✅ 자동 줄바꿈 */
  white-space: pre-wrap; /* ✅ 줄바꿈 유지 */
`;
