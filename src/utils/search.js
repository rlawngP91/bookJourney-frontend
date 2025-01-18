export const getFilteredResults = (searchQuery, searchType, books, rooms) => {
  if (!searchQuery) return { filteredBooks: [], filteredRooms: [] };

  let filteredBooks = [];
  let filteredRooms = [];

  switch (searchType) {
    case '책 제목':
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      break;
    case '작가 이름':
      filteredBooks = books.filter((book) =>
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filteredRooms = rooms.filter((room) =>
        room.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      break;
    case '방 이름':
      filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      break;
  }

  return { filteredBooks, filteredRooms };
};
