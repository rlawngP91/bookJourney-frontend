import instance from './instance';

const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const fetchBookSearchResults = async ({
  searchQuery,
  searchType,
  filters,
  setBooks,
  page = 0,
  isLoadingMore = false,
}) => {
  try {
    const paramsBook = new URLSearchParams({
      searchTerm: searchQuery,
      searchType: searchType,
      page: page.toString(),
    });

    if (filters.category) {
      paramsBook.append('genre', filters.category);
    }

    const responseBook = await instance.get(
      `/books/search?${paramsBook.toString()}`
    );

    if (responseBook.data.code === 200 && responseBook.data.data.bookList) {
      const mappedBooks = responseBook.data.data.bookList.map((book) => ({
        id: book.isbn,
        title: book.bookTitle.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
        author: book.authorName,
        coverImage: book.imageUrl,
      }));

      if (isLoadingMore) {
        setBooks((prevBooks) => [...prevBooks, ...mappedBooks]);
      } else {
        setBooks(mappedBooks);
      }

      console.log(mappedBooks.length);
      console.log('book search success!');
      return mappedBooks.length >= 4;
    } else {
      if (!isLoadingMore) setBooks([]);
      return false;
    }
  } catch (error) {
    console.error('Book search failed:', error);
    if (!isLoadingMore) setBooks([]);
    throw error;
  }
};

export const fetchRoomSearchResults = async ({
  searchQuery,
  searchType,
  filters,
  setRooms,
  page = 0,
  isLoadingMore = false,
}) => {
  try {
    const paramsRoom = new URLSearchParams({
      searchTerm: searchQuery,
      searchType: searchType,
      page: page.toString(),
    });

    if (filters.category) {
      paramsRoom.append('genre', filters.category);
    }
    if (filters.deadline?.start) {
      paramsRoom.append('recruitStartDate', formatDate(filters.deadline.start));
    }
    if (filters.deadline?.end) {
      paramsRoom.append('recruitEndDate', formatDate(filters.deadline.end));
    }
    if (filters.period?.start) {
      paramsRoom.append('roomStartDate', formatDate(filters.period.start));
    }
    if (filters.period?.end) {
      paramsRoom.append('roomEndDate', formatDate(filters.period.end));
    }
    if (filters.recordcnt) {
      let realrecordval = 0;
      if (filters.recordcnt == 0) {
        realrecordval = 0;
      } else if (filters.recordcnt == 25) {
        realrecordval = 10;
      } else if (filters.recordcnt == 50) {
        realrecordval = 50;
      } else if (filters.recordcnt == 75) {
        realrecordval = 100;
      }
      if (filters.recordcnt !== 100) {
        paramsRoom.append('recordCount', realrecordval);
      }
    }

    const responseRoom = await instance.get(
      `/rooms/search?${paramsRoom.toString()}`
    );

    if (responseRoom.data.code === 200 && responseRoom.data.data.roomList) {
      const mappedRooms = responseRoom.data.data.roomList.map((room) => ({
        id: room.roomId,
        book: room.bookTitle,
        author: room.authorName,
        coverImage: room.imageUrl,
        title: room.roomName,
        // 추가
        member: room.member,
        currentpeople: room.memberCount,
        totalpeople: room.recruitCount,
        progress: room.roomPercentage,
        startdate: room.progressStartDate,
        enddate: room.progressEndDate,
        isLocked: !room.public,
      }));

      if (isLoadingMore) {
        setRooms((prevRooms) => [...prevRooms, ...mappedRooms]);
      } else {
        setRooms(mappedRooms);
      }

      console.log(mappedRooms.length);
      console.log('room search success!');
      return mappedRooms.length >= 4;
    } else {
      if (!isLoadingMore) setRooms([]);
      return false;
    }
  } catch (error) {
    console.error('Room search failed:', error);
    if (!isLoadingMore) setRooms([]);
    throw error;
  }
};
