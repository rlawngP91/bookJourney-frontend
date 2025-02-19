import React from 'react';
import {
  Container,
  Item,
  BookInfo,
  Tag,
  MetaItem,
  StyledLink,
} from './Item.styles';

const RoomListRead = ({ rooms }) => {
  return (
    <Container>
      {rooms.map((room) => (
        <StyledLink
          key={room.id} // key를 여기로 이동
          to={`/rooms/${room.id}/info`}
        >
          <Item key={room.id}>
            <img
              src={room.coverImage}
              alt={room.title}
              className="book-cover"
            />

            <BookInfo>
              <Tag $status={room.people}>{room.people}</Tag>
              <p className="roomAuthor">{room.author}</p>
              <div className="BookContainer">
                <span className="BookTitle">{room.book}</span>
              </div>
              <div className="roomMetaRead">
                <MetaItem>
                  <span className="data">{room.date}</span>
                </MetaItem>
              </div>
            </BookInfo>
          </Item>
        </StyledLink>
      ))}
    </Container>
  );
};

export default RoomListRead;
