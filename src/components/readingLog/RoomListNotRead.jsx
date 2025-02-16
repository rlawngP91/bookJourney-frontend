import React, { useState } from 'react';
import { Container, Item, BookInfo, Tag, MetaItem } from './Item.styles';
import BookInfoPopup from './BookInfoPopup';
import clockIcon from '../../assets/clock3.svg';
import progressIcon from '../../assets/note3.svg';
// import menuIcon from '../../assets/menudot.svg';

const RoomListNotRead = ({ rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // const handleBookInfoClick = (roomId) => {
  //   setSelectedRoom(roomId);
  // };

  const handleClosePopup = () => {
    setSelectedRoom(null);
  };

  const handleBookInfoButtonClick = () => {
    handleClosePopup();
  };

  return (
    <Container>
      {rooms.map((room) => (
        <Item key={room.id}>
          <img src={room.coverImage} className="book-cover" />
          <BookInfo>
            <Tag>{room.people}</Tag>
            <p className="roomAuthor">{room.author}</p>
            <div className="BookContainer">
              <span className="BookTitle">{room.book}</span>
            </div>
            <div className="roomMeta">
              <MetaItem>
                <img src={clockIcon} alt="recentEdited" className="icon" />
                <span className="data">{room.recentEdit}</span>
              </MetaItem>
              <MetaItem>
                <img src={progressIcon} alt="progress" className="icon" />
                <span className="data">{Math.floor(room.progress)}%</span>
              </MetaItem>
            </div>
          </BookInfo>
        </Item>
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
