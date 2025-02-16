import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ItemWrapper = styled.div`
  display: flex;
  height: 123px;
  padding: 12px 24px;
  gap: 16px;
  align-items: flex-start;
`;

const BookCover = styled.img`
  width: 84px;
  height: 123px;
  object-fit: cover;
  border-radius: 4px;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 8px;
`;

const Author = styled.p`
  color: #757373;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  stroke-linejoin: 160%;
  margin: 0;
`;

const Title = styled.span`
  color: var(--sds-color-text-default-default);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
  letter-spacing: var(--Label-Small-Tracking, 0.5px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 32px;
`;

// 클릭되면 /books/:isbn 넘기기 (isbn=book.id임)
export const BookItem = ({ id, title, author, coverImage }) => {
  return (
    <StyledLink
      to={`/info/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <ItemWrapper>
        <BookCover src={coverImage || '/api/placeholder/100/150'} alt={title} />
        <BookInfo>
          <Author>{author} 저</Author>
          <Title>{title}</Title>
        </BookInfo>
      </ItemWrapper>
    </StyledLink>
  );
};
