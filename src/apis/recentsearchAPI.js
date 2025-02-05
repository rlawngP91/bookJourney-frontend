import instance from './instance';

export const recentsearchAPI = {
  // 최근 검색어 목록 조회
  getRecentSearches: async () => {
    try {
      const response = await instance.get(`/recent-search`);
      return response.data.data.recentSearchList.map((item) => ({
        id: item.recentSearchId,
        text: item.recentSearch,
      }));
    } catch (error) {
      console.error('Failed to fetch recent searches:', error);
      throw error;
    }
  },

  // 최근 검색어 추가 - search get요청으로 백엔드에서 처리

  // 특정 최근 검색어 삭제
  removeRecentSearch: async (searchId) => {
    try {
      const response = await instance.delete(`/recent-search/${searchId}`);
      console.log('delete searchId');
      console.log(searchId);
      return response.data;
    } catch (error) {
      console.error('Failed to remove recent search:', error);
      throw error;
    }
  },

  // 모든 최근 검색어 삭제
  clearAllRecentSearches: async () => {
    try {
      const response = await instance.delete(`/recent-search/all`);
      return response.data;
    } catch (error) {
      console.error('Failed to clear all recent searches:', error);
      throw error;
    }
  },
};

export default recentsearchAPI;
