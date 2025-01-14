import React from 'react';
import RWHeader from '../../components/RWHeader/RWHeader';
import RWFooter from '../../components/RWFooter/RWFooter';
import { Wrapper, Button } from './MakeReadwith.styles';

export default function MakeReadwith() {
  return (
    <>
      <RWHeader />
      <Wrapper>
        {/* 공개/비공개 버튼 */}
        <div className="buttoncontainer">
          <Button>
            <div>공개</div>
          </Button>
          <Button>
            <div>비공개</div>
          </Button>
        </div>

        {/* 같이 읽기방 이름 입력 */}
        <div className="name">
          <div className="countcontainer">
            <div className="label">같이 읽기방 이름</div>
            <div className="count">0/20</div>
          </div>
          <input placeholder="다른 사람들에게 보여질 방 이름이에요." />
        </div>

        {/* 세부 정보 */}
        <div className="detail">
          <div className="section-title">세부 정보</div>

          {/* 기간 입력 */}
          <div className="duration">
            <div className="date-input">
              <div className="label">기간</div>
              <div className="inputWrap">
                <input placeholder="0000.00.00" />
                <div className="separator">~</div>
                <input placeholder="0000.00.00" />
              </div>
            </div>
          </div>

          {/* 인원 입력 */}
          <div className="num">
            <div className="label">인원</div>
            <input placeholder="0 명" />
          </div>
        </div>

        {/* 비밀번호 설정 */}
        <div className="password">
          <div className="label">비밀번호 설정</div>
          <input placeholder="비밀번호 4자리를 입력해주세요." />
        </div>
      </Wrapper>
      <RWFooter />
    </>
  );
}
