import React, { useState } from 'react';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import reply from '../../assets/reply.svg';
import good from '../../assets/good.svg';
import alreadygood from '../../assets/alreadygood.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styled from 'styled-components';
import { postRecordLike } from '../../apis/postRecordLike';
import Reply from '../../components/Reply/Reply';

export const Review = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding-bottom: 20px;
  gap: 14px;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;

    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }

    .page {
      color: #6aa5f8;
      text-align: center;
      font-size: 10.778px;
      font-weight: 600;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: auto;

    .head {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;

      .front {
        display: flex;
        flex-direction: row;

        gap: 20px;
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
      }
    }

    .content {
      height: auto;
      color: #000;
      font-size: 12px;
      font-weight: 400;
      width: 90%;
      padding-bottom: 10px;
      word-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      overflow-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      white-space: pre-wrap; /* ✅ 줄바꿈 유지 */
    }

    .bottom {
      display: flex;
      flex-direction: row;
      gap: 7px;
      align-items: center;
      justify-content: end;

      font-size: 10.012px;
      font-weight: 400;
      padding-right: 12px;

      .like-count {
        color: #000;
      }

      .like-count.liked {
        color: #6aa5f8;
      }
    }
  }
`;

export const Review2 = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
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
      border-radius: 50%;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 41px;
    align-items: flex-start;

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
      width: 90%;
      height: auto;
      word-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      overflow-wrap: break-word; /* ✅ 긴 단어 줄바꿈 */
      white-space: pre-wrap; /* ✅ 줄바꿈 유지 */
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    font-size: 10.012px;
    font-weight: 400;
    padding-right: 12px;

    .like-count {
      color: #000;
    }

    .like-count.liked {
      color: #6aa5f8;
    }
  }
`;

export default function Record({ record, activeTab, isPreview }) {
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
      {activeTab === '페이지별' ? (
        <Review>
          <div className="main">
            <img src={record.imageUrl} alt="User Profile" />
            <div className="page">{record.recordPage}p</div>
          </div>
          <div className="body">
            <div className="head">
              <div className="front">
                <div className="name">{record.nickName}</div>
                <div className="time">{record.createdAt}</div>
              </div>
              {!isPreview && (
                <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
              )}
              {isMenuOpen && (
                <HamburgerMenu
                  onClose={() => setIsMenuOpen(false)}
                  recordId={record.recordId}
                />
              )}
            </div>
            <div className="content">{record.content}</div>
            {!isPreview && (
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
                <div className={`like-count ${isLiked ? 'liked' : ''}`}>
                  {likeCount}
                </div>
              </div>
            )}
          </div>
        </Review>
      ) : (
        <Review2>
          <div className="head">
            <div className="main">
              <img src={record.imageUrl} alt="User Profile" />
              <div className="name">{record.nickName}</div>
              <div className="time">{record.createdAt}</div>
            </div>
            {!isPreview && (
              <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
            )}
            {isMenuOpen && (
              <HamburgerMenu
                onClose={() => setIsMenuOpen(false)}
                recordId={record.recordId}
              />
            )}
          </div>
          <div className="body">
            <div className="page">{record.recordTitle}</div>
            <div className="content">{record.content}</div>
          </div>
          {!isPreview && (
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
              <div className={`like-count ${isLiked ? 'liked' : ''}`}>
                {likeCount}
              </div>
            </div>
          )}
        </Review2>
      )}
    </>
  );
}
