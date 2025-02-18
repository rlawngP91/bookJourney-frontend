import React, { useState } from 'react';
import {
  Container,
  Item,
  BookInfo,
  Tag,
  MetaItem,
  StyledLink,
} from './Item.styles';
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
        <StyledLink
          key={room.id} // key를 여기로 이동
          to={`/rooms/${room.id}/info`}
        >
          <Item key={room.id}>
            <img src={room.coverImage} className="book-cover" />
            <BookInfo>
              <Tag $status={room.people}>{room.people}</Tag>
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
        </StyledLink>
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
