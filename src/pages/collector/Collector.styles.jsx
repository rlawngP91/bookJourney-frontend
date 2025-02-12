import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 393px;
  height: 853px;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  box-sizing: border-box;

  .center {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    .title {
      color: #000;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      text-align: center;
    }
    img {
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 25px;
  gap: 108px;

  width: 393px;
  height: 105px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-top: 81px;
`;

// 트랙 스타일
export const TrackContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* 길이 조절 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SVGTrack = styled.svg`
  position: absolute;
  width: 90%;
  height: 80%;
`;

export const ProgressPath = styled.path`
  stroke: ${(props) => (props.completed ? '#6aa5f8' : '#d3d3d3')};
  stroke-width: 10;
  fill: none;
  transition: stroke 0.3s ease-in-out;
`;

export const Milestone = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  color: ${(props) => (props.completed ? '#000' : '#888')};
`;

export const LockIcon = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.completed ? 'transparent' : 'gray')};
  border-radius: 50%;
`;
