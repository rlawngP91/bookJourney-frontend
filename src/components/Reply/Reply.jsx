import React, { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  Comment,
  Container,
  Review,
  ReviewList,
  Footer,
  Textarea,
} from './Reply.styles';
import xbox from '../../assets/xbox.svg';
import send from '../../assets/send.svg';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import good from '../../assets/good.svg';
import alreadygood from '../../assets/alreadygood.svg';
import reply from '../../assets/reply.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { getReplys } from '../../apis/getReplys';
import { postReply } from '../../apis/postReply';
import { postReplyLike } from '../../apis/postReplyLike';
import { postRecordLike } from '../../apis/postRecordLike';
import userimage from '../../assets/userimage.svg';

export default function Reply({ recordId, onClose }) {
  const [recordInfo, setRecordInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textareaRef = useRef(null);

  // ✅ 좋아요 상태 및 카운트
  const [isLikedRecord, setIsLikedRecord] = useState(null);
  const [likeCountRecord, setLikeCountRecord] = useState(0);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const data = await getReplys(recordId);
      setRecordInfo(data.recordInfo);
      setIsLikedRecord(Boolean(data.recordInfo.like));
      setLikeCountRecord(data.recordInfo.recordLikeCount);
      const updatedComments = data.comments.map((comment) => ({
        ...comment,
        isLiked: Boolean(comment.like),
      }));
      setComments(updatedComments);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recordInfo) {
      setIsLikedRecord(Boolean(recordInfo.like));
      setLikeCountRecord(recordInfo.recordLikeCount);
    }
  }, [recordInfo]);

  // ✅ 댓글 전송
  const handleSendComment = async () => {
    if (!newComment.trim()) return;
    try {
      await postReply(recordId, newComment);
      setNewComment('');
      fetchComments();
      if (textareaRef.current) {
        textareaRef.current.style.height = '20px';
      }
    } catch (error) {
      console.error('❌ 댓글 전송 오류:', error);
    }
  };

  // ✅ 기록 좋아요
  const handleRecordLike = async () => {
    try {
      const liked = await postRecordLike(recordId);
      setIsLikedRecord(liked);
      setLikeCountRecord((prev) => (liked ? prev + 1 : prev - 1));
      setTimeout(fetchComments, 300); // ✅ 좋아요 후 최신 데이터 불러오기
    } catch (error) {
      console.error('❌ 기록 좋아요 오류:', error);
    }
  };

  // ✅ 댓글 좋아요
  const handleCommentLike = async (commentId) => {
    try {
      const liked = await postReplyLike(commentId);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.commentId === commentId
            ? {
                ...comment,
                isLiked: liked,
                commentLikeCount: liked
                  ? comment.commentLikeCount + 1
                  : comment.commentLikeCount - 1,
              }
            : comment
        )
      );
      setTimeout(fetchComments, 300); // ✅ 좋아요 후 최신 데이터 불러오기
    } catch (error) {
      console.error('❌ 댓글 좋아요 오류:', error);
    }
  };

  if (loading) return <div>📖 댓글을 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;
  if (!recordInfo) return <div>📭 기록 정보를 불러올 수 없습니다.</div>;

  return (
    <Wrapper>
      <Container>
        <Comment>
          <div className="close">
            <img src={xbox} onClick={onClose} style={{ cursor: 'pointer' }} />
          </div>
          <div className="head">
            <div className="main">
              <img src={recordInfo.imageUrl} alt="User" />
              <div className="name">{recordInfo.nickName}</div>
              <div className="time">{recordInfo.createdAt}</div>
            </div>
            <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <HamburgerMenu onClose={() => setIsMenuOpen(false)} />
            )}
          </div>
          <div className="body">
            <div className="content">{recordInfo.content}</div>
          </div>
          <div className="bottom">
            <img src={reply} alt="댓글" />
            <div>{recordInfo.commentCount}</div>
            <img
              src={isLikedRecord ? alreadygood : good}
              alt="좋아요"
              onClick={handleRecordLike}
              style={{ cursor: 'pointer' }}
            />
            <div>{likeCountRecord}</div>
          </div>
        </Comment>
        <ReviewList>
          {comments.map((comment) => (
            <Review key={comment.commentId}>
              <div className="head">
                <div className="main">
                  <img src={comment.imageUrl || userimage} alt="User Profile" />
                  <div className="name">{comment.nickName}</div>
                  <div className="time">{comment.createdAt}</div>
                </div>
              </div>
              <div className="body">
                <div className="content">{comment.content}</div>
              </div>
              <div className="bottom">
                <img
                  src={comment.isLiked ? alreadygood : good}
                  alt="좋아요"
                  onClick={() => handleCommentLike(comment.commentId)}
                  style={{ cursor: 'pointer' }}
                />
                <div>{comment.commentLikeCount}</div>
              </div>
            </Review>
          ))}
        </ReviewList>
        <Footer>
          <div className="input">
            <Textarea
              ref={textareaRef}
              placeholder="댓글 추가하기"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              maxLength={1000}
            />
            <img
              src={send}
              alt="댓글 추가"
              onClick={handleSendComment}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Footer>
      </Container>
    </Wrapper>
  );
}
