import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // vite.config.js 프록시 설정
  headers: {
    'Content-Type': 'application/json',
    // 이건 user10 token
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1MDc2MzIsImV4cCI6MTczODUxMTIzMn0.83WaKIOl5tVI0hIDUTUIAJrmlLsYiiHV2QK9uINDj3g',
  },
});

export const recentsearchAPI = {
  // 최근 검색어 목록 조회
  getRecentSearches: async () => {
    try {
      const response = await api.get(`/recent-search`);
      return response.data.data.recentSearchList;
    } catch (error) {
      console.error('Failed to fetch recent searches:', error);
      throw error;
    }
  },

  // 최근 검색어 추가
  addRecentSearch: async (searchTerm) => {
    try {
      const response = await axios.post(`/recent-search`, { searchTerm });
      return response.data.data;
    } catch (error) {
      console.error('Failed to add recent search:', error);
      throw error;
    }
  },

  // 특정 최근 검색어 삭제
  removeRecentSearch: async (searchId) => {
    try {
      const response = await axios.delete(`/recent-search/${searchId}`);
      return response.data;
    } catch (error) {
      console.error('Failed to remove recent search:', error);
      throw error;
    }
  },

  // 모든 최근 검색어 삭제
  clearAllRecentSearches: async () => {
    try {
      const response = await axios.delete(`/recent-search/all`);
      return response.data;
    } catch (error) {
      console.error('Failed to clear all recent searches:', error);
      throw error;
    }
  },
};

export default recentsearchAPI;
