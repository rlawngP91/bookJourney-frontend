import React, { useState } from 'react';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import reply from '../../assets/reply.svg';
import good from '../../assets/good.svg';
import alreadygood from '../../assets/alreadygood.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styled from 'styled-components';
import { postRecordLike } from '../../apis/postRecordLike';
import Reply from '../../components/Reply/Reply'; // ✅ Reply 컴포넌트 추가

export const Review = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  padding-bottom: 20px;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-size: 12.574px;
        font-weight: 500;
      }

      .time {
        color: #939393;
        font-size: 11.158px;
        font-weight: 400;
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25.5px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-size: 10.778px;
      font-weight: 600;
    }

    .content {
      color: #000;
      font-size: 12px;
      font-weight: 400;
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    color: #000;
    font-size: 10.012px;
    font-weight: 400;
  }
`;

export default function Record({ record }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(record.like);
  const [likeCount, setLikeCount] = useState(record.recordLikeCount);
  const [isReplyOpen, setIsReplyOpen] = useState(false); // ✅ 댓글 팝업 상태 추가

  // ✅ 좋아요 버튼 클릭 이벤트
  const handleLikeClick = async () => {
    try {
      const liked = await postRecordLike(record.recordId);
      setIsLiked(liked);
      setLikeCount((prevCount) => (liked ? prevCount + 1 : prevCount - 1));
    } catch (error) {
      console.error(`❌ 좋아요 처리 중 오류: ${error.message}`);
    }
  };

  return (
    <>
      <Review>
        <div className="head">
          <div className="main">
            <img src={record.imageUrl} alt="User Profile" />
            <div className="name">{record.nickName}</div>
            <div className="time">{record.createdAt}</div>
          </div>
          <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
          {isMenuOpen && <HamburgerMenu onClose={() => setIsMenuOpen(false)} />}
        </div>
        <div className="body">
          <div className="page">
            {record.recordPage ? `${record.recordPage}p` : ''}
          </div>
          <div className="content">{record.content}</div>
        </div>
        <div className="bottom">
          <img
            src={reply}
            alt="댓글"
            onClick={() => setIsReplyOpen(true)} // ✅ 댓글 버튼 클릭 시 팝업 열기
            style={{ cursor: 'pointer' }}
          />
          {isReplyOpen && (
            <Reply
              recordId={record.recordId}
              onClose={() => setIsReplyOpen(false)}
            />
          )}
          <div>{record.commentCount}</div>

          <img
            src={isLiked ? alreadygood : good}
            alt="좋아요"
            onClick={handleLikeClick}
            style={{ cursor: 'pointer' }}
          />
          <div>{likeCount}</div>
        </div>
      </Review>
    </>
  );
}
