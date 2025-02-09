import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 95px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .title {
    font-family: Pretendard;
    font-size: 12.574px;
    font-style: normal;
    font-weight: 500;
    line-height: 17.963px;
  }

  .nickname {
    color: #939393;
    font-family: Pretendard;
    font-size: 11.158px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.963px;
  }

  .percent {
    width: 40px;
    height: 20px;
    border-radius: 13.976px;
    background: #6aa5f8;
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'dlig' on;
    font-family: Roboto;
    font-size: 7.321px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.073px;
    display: flex;
    justify-content: center;
    line-height: 20px;
  }
`;

/* ✅ 프로필 이미지와 hostdot을 포함하는 컨테이너 */
export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

/* ✅ hostdot을 프로필 이미지의 오른쪽 하단에 겹치게 설정 */
export const HostDot = styled.img`
  position: absolute;
  bottom: 5px; /* 아래쪽으로 살짝 이동 */
  right: 0; /* 오른쪽으로 살짝 이동 */
  width: 12px !important; /* ✅ 강제 적용 */
  height: 12px !important;
`;
