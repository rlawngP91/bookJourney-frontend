import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Comment,
  Container,
  Review,
  ReviewList,
  Footer,
} from './Reply.styles';
import send from '../../assets/send.svg';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import good from '../../assets/good.svg';
import alreadygood from '../../assets/alreadygood.svg';
import reply from '../../assets/reply.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { getReplys } from '../../apis/getReplys';
import { postReplyLike } from '../../apis/postReplyLike'; // ✅ 좋아요 API 추가
import userimage from '../../assets/userimage.svg';

export default function Reply() {
  const [recordInfo, setRecordInfo] = useState(null); // ✅ 기록 상세 정보
  const [comments, setComments] = useState([]); // ✅ 댓글 목록
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const recordId = 1; // ✅ recordId 설정

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getReplys(recordId);
        setRecordInfo(data.recordInfo);
        setComments(data.comments); // ✅ 댓글 목록에 liked 값 포함
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  /**
   * ✅ 좋아요 버튼 클릭 핸들러
   * @param {number} commentId - 좋아요를 누를 댓글 ID
   */
  const handleLike = async (commentId) => {
    try {
      const liked = await postReplyLike(commentId); // ✅ 좋아요 API 호출
      console.log(`✅ 댓글 ${commentId} 좋아요 상태 변경:`, liked);

      // ✅ comments 상태에서 해당 댓글의 liked 값 업데이트
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.commentId === commentId
            ? {
                ...comment,
                like: liked,
                commentLikeCount: liked
                  ? comment.commentLikeCount + 1
                  : comment.commentLikeCount - 1,
              }
            : comment
        )
      );
    } catch (error) {
      console.error('❌ 좋아요 요청 실패:', error);
    }
  };

  if (loading) return <div>📖 댓글을 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;
  if (!recordInfo) return <div>📭 기록 정보를 불러올 수 없습니다.</div>;
  if (comments.length === 0) return <div>📭 댓글이 없습니다.</div>;

  return (
    <Wrapper>
      <Container>
        <Comment>
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
            <img src={good} alt="좋아요" />
            <div>{recordInfo.recordLikeCount}</div>
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
                <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
                {isMenuOpen && (
                  <HamburgerMenu onClose={() => setIsMenuOpen(false)} />
                )}
              </div>
              <div className="body">
                <div className="content">{comment.content}</div>
              </div>
              <div className="bottom">
                {/* ✅ 좋아요 버튼 클릭 이벤트 추가 */}
                <img
                  src={comment.like ? alreadygood : good}
                  alt="좋아요"
                  onClick={() => handleLike(comment.commentId)}
                  style={{ cursor: 'pointer' }} // ✅ 클릭 가능하게 변경
                />
                <div>{comment.commentLikeCount}</div>
              </div>
            </Review>
          ))}
        </ReviewList>
        <Footer>
          <div className="input">
            <div>댓글 추가하기</div>
            <img src={send} alt="댓글 추가" />
          </div>
        </Footer>
      </Container>
    </Wrapper>
  );
}
