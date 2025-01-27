import React from 'react';
import {
  Container,
  RoomItem,
  BookInfo,
  Tag,
  MetaItem,
} from './RoomListNotRead.styles';
import clockIcon from '../../assets/clock3.svg';
import progressIcon from '../../assets/note3.svg';
import menuIcon from '../../assets/menudot.svg';

const RoomListNotRead = ({ rooms }) => {
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
              <MetaItem>
                <img src={clockIcon} alt="recentEdited" className="icon" />
                <span className="data">{room.recentEdit}전</span>
              </MetaItem>
              <MetaItem>
                <img src={progressIcon} alt="progress" className="icon" />
                <span className="data">{room.progress}%</span>
              </MetaItem>
            </div>
            <img src={menuIcon} alt="menu" className="bookMenu" />
          </BookInfo>
        </RoomItem>
      ))}
    </Container>
  );
};

export default RoomListNotRead;
