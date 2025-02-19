import instance from './instance';

const favoriteBookAPIResponse = (item) => ({
  id: item.favoriteId,
  imgSrc: item.bookInfo.imageUrl,
  writer: item.bookInfo.authorName,
  bookTitle: item.bookInfo.bookTitle,
  isbn: item.bookInfo.isbn,
  isChecked: false,
});

export const bookmarkAPI = {
  // 최근 검색어 목록 조회
  getBookmarks: async () => {
    try {
      const response = await instance.get(`/favorites`);
      if (response.data.code === 200) {
        return response.data.data.favoriteList.map(favoriteBookAPIResponse);
      } else {
        throw new Error(response.data.message || '서버 응답 오류');
      }
    } catch (error) {
      console.error('Failed to fetch recent searches:', error);
      throw error;
    }
  },

  removeBookmarks: async (favoriteList) => {
    try {
      const response = await instance.delete(`/favorites`, {
        data: { favoriteList },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to delete BookMark:', error);
      throw error;
    }
  },
};
