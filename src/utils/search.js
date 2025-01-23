export const getFilteredResults = (
  searchQuery,
  searchType,
  books,
  rooms,
  filters
) => {
  // 초기 필터링: 검색어가 없으면서 필터도 없는 경우
  if (!searchQuery && (!filters || Object.keys(filters).length === 0)) {
    return { filteredBooks: [...books], filteredRooms: [...rooms] };
  }

  let filteredBooks = [...books];
  let filteredRooms = [...rooms];

  // 검색어 기반 필터링
  if (searchQuery) {
    switch (searchType) {
      case '책 제목':
        filteredBooks = filteredBooks.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        filteredRooms = filteredRooms.filter((room) =>
          room.book.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case '작가 이름':
        filteredBooks = filteredBooks.filter((book) =>
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        filteredRooms = filteredRooms.filter((room) =>
          room.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case '방 이름':
        filteredBooks = [];
        filteredRooms = filteredRooms.filter((room) =>
          room.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
    }
  }

  // 필터 기반 추가 필터링
  if (filters) {
    // 카테고리 필터링
    if (filters.category) {
      filteredBooks = filteredBooks.filter(
        (book) => book.category === filters.category
      );
      filteredRooms = filteredRooms.filter(
        (room) => room.category === filters.category
      );
    }

    // 모집 마감일 필터링 (중간일 기준)
    if (filters.deadline?.start && filters.deadline?.end) {
      filteredRooms = filteredRooms.filter((room) => {
        const start = new Date(room.startdate);
        const end = new Date(room.enddate);
        const middleDate = new Date(
          start.getTime() + (end.getTime() - start.getTime()) / 2
        );

        const filterStart = new Date(filters.deadline.start);
        const filterEnd = new Date(filters.deadline.end);

        return middleDate >= filterStart && middleDate <= filterEnd;
      });
    }

    // 방 기간 필터링 (기간 겹침 기준)
    if (filters.period?.start && filters.period?.end) {
      filteredRooms = filteredRooms.filter((room) => {
        const start = new Date(room.startdate);
        const end = new Date(room.enddate);
        const filterStart = new Date(filters.period.start);
        const filterEnd = new Date(filters.period.end);

        return !(end < filterStart || start > filterEnd);
      });
    }
  }

  return { filteredBooks, filteredRooms };
};
