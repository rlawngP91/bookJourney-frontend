import React, { useState } from 'react';
import {
  Container,
  RoomItem,
  BookInfo,
  Tag,
  MetaItem,
} from './RoomListNotRead.styles';
import BookInfoPopup from './BookInfoPopup';
import clockIcon from '../../assets/clock3.svg';
import progressIcon from '../../assets/note3.svg';
import menuIcon from '../../assets/menudot.svg';

const RoomListNotRead = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookInfoClick = (roomId) => {
    setSelectedRoom(roomId);
  };

  const handleClosePopup = () => {
    setSelectedRoom(null);
  };

  const handleBookInfoButtonClick = () => {
    handleClosePopup();
  };

  return (
    <Container>
      {rooms.map((room) => (
        <RoomItem key={room.id}>
          <img src={room.coverImage} className="book-cover" />
          <BookInfo>
            <p className="roomAuthor">{room.author}</p>
            <div className="bookMetaContainer">
              <span className="roomBook">{room.book}</span>
              <img
                src={menuIcon}
                alt="menu"
                className="bookInfoBtn"
                onClick={() => handleBookInfoClick(room.id)}
              />
            </div>
            <div className="roomMeta">
              <Tag>{room.people}</Tag>
              <MetaItem>
                <img src={clockIcon} alt="recentEdited" className="icon" />
                <span className="data">{room.recentEdit}</span>
              </MetaItem>
              <MetaItem>
                <img src={progressIcon} alt="progress" className="icon" />
                <span className="data">{room.progress}%</span>
              </MetaItem>
            </div>
          </BookInfo>
        </RoomItem>
      ))}
      {selectedRoom && (
        <BookInfoPopup
          onClose={handleClosePopup}
          onBookInfoClick={handleBookInfoButtonClick}
          roomId={selectedRoom}
        />
      )}
    </Container>
  );
};

export default RoomListNotRead;
