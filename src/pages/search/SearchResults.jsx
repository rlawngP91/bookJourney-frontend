import React from 'react';
import { BookListSection, BookList, NoResultsMessage } from './search.styles';
import { BookItem } from './BookItem';
import { RoomItem } from './RoomItem';

export const SearchResults = ({
  $searchQuery,
  $searchType,
  filteredBooks,
  filteredRooms,
  listType,
}) => {
  // const hasResults = filteredBooks.length > 0 || filteredRooms.length > 0;
  const hasBookResults = filteredBooks.length === 0;
  const hasRoomResults = filteredRooms.length === 0;

  if (!$searchQuery) {
    return null;
  }

  // if (!hasResults) {
  //   return <NoResultsMessage>검색 결과가 없습니다</NoResultsMessage>;
  // }

  return (
    <>
      {listType === '책 목록' && $searchType !== '방 이름' && (
        <>
          {hasBookResults ? (
            <NoResultsMessage>검색 결과가 없습니다</NoResultsMessage>
          ) : (
            <BookListSection>
              <BookList>
                {filteredBooks.map((book) => (
                  <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                  />
                ))}
              </BookList>
            </BookListSection>
          )}
        </>
      )}

      {listType === '같이읽기 목록' && (
        <>
          {hasRoomResults ? (
            <NoResultsMessage>검색 결과가 없습니다</NoResultsMessage>
          ) : (
            <BookListSection>
              <BookList>
                {filteredRooms.map((room) => (
                  <RoomItem
                    key={room.id}
                    id={room.id}
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
      )}
    </>
  );
};
