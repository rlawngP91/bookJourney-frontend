import React from 'react';
import {
  BookListSection,
  BookList,
  NoResultsMessage,
} from '../../pages/search/search.styles';
import { BookItem } from './BookItem';
import { RoomItem } from './RoomItem';

export const SearchResults = ({
  searchQuery,
  searchType,
  filteredBooks,
  filteredRooms,
  listType,
}) => {
  const hasResults = filteredBooks.length > 0 || filteredRooms.length > 0;

  if (!searchQuery) {
    return null;
  }

  if (!hasResults) {
    return <NoResultsMessage>검색 결과가 없습니다</NoResultsMessage>;
  }

  return (
    <>
      {listType === '책 목록' &&
        searchType !== '방 이름' &&
        filteredBooks.length > 0 && (
          <BookListSection>
            <BookList>
              {filteredBooks.map((book) => (
                <BookItem
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                />
              ))}
            </BookList>
          </BookListSection>
        )}

      {listType === '같이읽기 목록' && filteredRooms.length > 0 && (
        <BookListSection>
          <BookList>
            {filteredRooms.map((room) => (
              <RoomItem
                key={room.id}
                book={room.book}
                author={room.author}
                title={room.title}
                currentpeople={room.currentpeople}
                totalpeople={room.totalpeople}
                progress={room.progress}
                startdate={room.startdate}
                enddate={room.enddate}
                coverImage={room.coverImage}
                isLocked={room.isLocked}
              />
            ))}
          </BookList>
        </BookListSection>
      )}
    </>
  );
};
