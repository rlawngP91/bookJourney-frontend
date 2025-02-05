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
import userimage from '../../assets/userimage.svg';

export default function Reply() {
  const [recordInfo, setRecordInfo] = useState(null); // ✅ 기록 상세 정보
  const [comments, setComments] = useState([]); // ✅ 댓글 목록
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const recordId = 2; // ✅ 하드코딩된 recordId (필요 시 prop 또는 상태 관리로 대체 가능)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getReplys(recordId); // ✅ recordId 전달
        setRecordInfo(data.recordInfo); // ✅ 기록 정보 저장
        setComments(data.comments); // ✅ 댓글 목록 저장
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) return <div>📖 댓글을 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;
  if (!recordInfo) return <div>📭 기록 정보를 불러올 수 없습니다.</div>;

  if (loading) return <div>📖 댓글을 불러오는 중...</div>;
  if (error) return <div style={{ color: 'red' }}>❌ {error}</div>;
  if (comments.length === 0) return <div>📭 댓글이 없습니다.</div>;

  return (
    <Wrapper>
      <Container>
        <Comment>
          <div className="head">
            <div className="main">
              <img src={recordInfo.imgUrl} />
              <div className="name">{recordInfo.nickName}</div>
              <div className="time">{recordInfo.createdAt}</div>
            </div>
            <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <HamburgerMenu onClose={() => setIsMenuOpen(false)} />
            )}
          </div>
          <div className="body">
            <div className="page">{recordInfo.recordPage}p</div>
            <div className="content">{recordInfo.content}</div>
          </div>
          <div className="bottom">
            <img src={reply} />
            <div>{recordInfo.commentCount}</div>
            <img src={good} alt="좋아요" />
            <div>{recordInfo.commentLikeCount}</div>
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
                {/* ✅ 좋아요 상태에 따라 이미지 변경 */}
                <img src={comment.like ? alreadygood : good} alt="좋아요" />
                <div>{comment.commentLikeCount}</div>{' '}
              </div>
            </Review>
          ))}
        </ReviewList>
        <Footer>
          <div className="input">
            <div>댓글 추가하기</div>
            <img src={send} />
          </div>
        </Footer>
      </Container>
    </Wrapper>
  );
}
