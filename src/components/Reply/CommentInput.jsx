import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import sendIcon from '../../assets/send.svg'; // 전송 버튼 이미지

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  background: #fff; /* 배경색 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;
  transition: height 0.2s ease-out;

  .input {
    display: flex;
    flex-direction: column;
    width: 343px;
    background-color: #eff1f5;
    border-radius: 9px;
    box-sizing: border-box;
    padding: 23px 17px 17px 17px;
    position: relative;
    transition: all 0.3s ease-in-out;
    min-height: 115px;
  }

  .before {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .input2 {
      width: 343px;
      text-align: left;
      color: #a09cab;
      font-size: 14px;
      cursor: text;

      color: #a09cab;
      font-family: Pretendard;
      font-style: normal;
      font-weight: 400;
    }
  }

  .hidden {
    display: none;
  }

  .textarea {
    width: 100%;
    font-size: 14px;
    resize: none;
    overflow-y: auto; /* 내부 스크롤 */
    border: none;
    outline: none;
    background-color: transparent;
    max-height: 244px; /* ✅ 최대 높이 설정 */
    padding-bottom: 5px; /* ✅ 글자 수 카운트와 간격 확보 */
    height: 47px;

    /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox */
  }

  .textarea::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  .after {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .char-count {
      color: #a3a3a3;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }

    .send-button {
      cursor: pointer;
    }
  }
`;

export default function CommentInput() {
  const [newComment, setNewComment] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef(null);
  const maxLength = 1000; // 최대 글자 수

  const handleInput = (e) => {
    setNewComment(e.target.value);
    setIsTyping(true); // ✅ 입력 시작하면 isTyping을 true로 변경

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이 초기화
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        244
      )}px`; // 최대 200px까지만 증가
    }
  };

  const handleSendComment = () => {
    if (!newComment.trim()) return; // 빈 입력 방지
    console.log('댓글 전송:', newComment);
    setNewComment('');
    setIsTyping(false); // ✅ 입력이 끝나면 원래 상태로 돌아감
  };

  return (
    <Footer>
      <div className={`input ${isTyping ? '' : 'hidden'}`}>
        <textarea
          ref={textareaRef}
          className="textarea"
          value={newComment}
          onChange={handleInput}
          maxLength={maxLength}
        />
        <div className="aftercontainer">
          <div className="after">
            <div className="char-count">
              {newComment.length} / {maxLength}
            </div>
            <div>
              <img
                src={sendIcon}
                alt="댓글 추가"
                className="send-button"
                onClick={handleSendComment}
              />
            </div>
          </div>
        </div>
      </div>

      {!isTyping && (
        <div className="before">
          <div className="input2" onClick={() => setIsTyping(true)}>
            기록을 입력해주세요
          </div>
          <div>
            <img src={sendIcon} />
          </div>
        </div>
      )}
    </Footer>
  );
}
