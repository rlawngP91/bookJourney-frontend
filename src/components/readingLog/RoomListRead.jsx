import React from 'react';
import { Container, Item, BookInfo, Tag, MetaItem } from './Item.styles';

const RoomListRead = ({ rooms }) => {
  return (
    <Container>
      {rooms.map((room) => (
        <Item key={room.id}>
          <img src={room.coverImage} alt={room.title} className="book-cover" />

          <BookInfo>
            <Tag $status={room.people}>{room.people}</Tag>
            <p className="roomAuthor">{room.author}</p>
            <div className="BookContainer">
              <span className="BookTitle">{room.book}</span>
            </div>
            <div className="roomMeta">
              <MetaItem>
                <span className="data">{room.date}</span>
              </MetaItem>
            </div>
          </BookInfo>
        </Item>
      ))}
    </Container>
  );
};

export default RoomListRead;
