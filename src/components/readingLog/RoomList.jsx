import React from 'react';
import { Container, RoomItem, BookInfo } from './RoomList.styles';

const RoomList = ({ rooms }) => {
  return (
    <Container>
      {rooms.map((room) => (
        <RoomItem key={room.id}>
          <img src={room.coverImage} alt={room.title} className="book-cover" />
          <BookInfo>
            <p className="roomAuthor">{room.author}</p>
            <span className="rooomBook">{room.book}</span>
            <div className="roomMeta">
              <span className="date">
                {room.startdate} ~ {room.enddate}
              </span>
            </div>
          </BookInfo>
        </RoomItem>
      ))}
    </Container>
  );
};

export default RoomList;
