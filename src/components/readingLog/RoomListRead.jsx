import React from 'react';
import { Container, RoomItem, BookInfo, Tag } from './RoomListRead.styles';

const RoomListRead = ({ rooms }) => {
  return (
    <Container>
      {rooms.map((room) => (
        <RoomItem key={room.id}>
          <img src={room.coverImage} alt={room.title} className="book-cover" />
          <BookInfo>
            <p className="roomAuthor">{room.author}</p>
            <span className="roomBook">{room.book}</span>
            <div className="roomMeta">
              <Tag>{room.people}</Tag>
              <span className="date">{room.date}</span>
            </div>
          </BookInfo>
        </RoomItem>
      ))}
    </Container>
  );
};

export default RoomListRead;
