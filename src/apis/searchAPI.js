import instance from './instance';

export const searchAPI = {
  fetchSearchResults: async ({
    searchQuery,
    searchType,
    filters,
    setBooks,
    setRooms,
  }) => {
    try {
      // API 요청 URL 구성
      const paramsBook = new URLSearchParams({
        searchTerm: searchQuery,
        searchType: searchType,
        page: '1',
      });

      const paramsRoom = new URLSearchParams({
        searchTerm: searchQuery,
        searchType: searchType,
        page: '0',
      });

      // 카테고리 필터 추가
      if (filters.category) {
        paramsBook.append('genre', filters.category);
        paramsRoom.append('genre', filters.category);
      }
      // deadline 필터 추가
      if (filters.deadline?.start) {
        paramsRoom.append('recruitStartDate', filters.deadline.start);
      }
      if (filters.deadline?.end) {
        paramsRoom.append('recruitEndDate', filters.deadline.end);
      }

      // period 필터 추가
      if (filters.period?.start) {
        paramsRoom.append('roomStartDate', filters.period.start);
      }
      if (filters.period?.end) {
        paramsRoom.append('roomEndDate', filters.period.end);
      }
      // recordcnt 필터 추가
      if (filters.recordcnt) {
        paramsRoom.append('recordCount', filters.recordcnt);
      }

      const responseBook = await instance.get(
        `/books/search?${paramsBook.toString()}`
      );
      const responseRoom = await instance.get(
        `/rooms/search?${paramsRoom.toString()}`
      );

      if (responseBook.data.code === 200 && responseBook.data.data.bookList) {
        const mappedBooks = responseBook.data.data.bookList.map((book) => ({
          id: book.isbn, // ISBN을 id로 사용
          title: book.bookTitle.replace(/&lt;/g, '<').replace(/&gt;/g, '>'), // HTML 엔티티 디코딩
          author: book.authorName,
          coverImage: book.imageUrl,
        }));
        setBooks(mappedBooks);
        console.log(mappedBooks.length);
        console.log('book search success!');
      } else {
        setBooks([]);
      }

      if (responseRoom.data.code === 200 && responseRoom.data.data.roomList) {
        const mappedRooms = responseRoom.data.data.roomList.map((room) => ({
          id: room.roomId,
          book: room.bookTitle, // 책 제목
          author: room.authorName, // 작가 이름
          coverImage: room.imageUrl, // 이미지 URL
          title: room.roomName, // 방 이름
          currentpeople: room.memberCount, // 현재 인원
          totalpeople: room.recruitCount, // 총 모집 인원
          progress: room.roomPercentage, // 진행률
          startdate: room.progressStartDate, // 시작일
          enddate: room.progressEndDate, // 종료일
          isLocked: !room.public, // public이 false면 잠김
        }));
        setRooms(mappedRooms);
        console.log(mappedRooms.length);
        console.log('room search success!');
      } else {
        setRooms([]);
      }
    } catch (error) {
      console.error('Search failed:', error);
      setBooks([]);
      setRooms([]);
      throw error;
    }
  },
};
