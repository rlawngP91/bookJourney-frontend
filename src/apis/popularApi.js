import apiClient from '../apis/instance/apiClient';

// 인기 도서 API 요청 함수
export const fetchPopularBook = async () => {
  try {
    const response = await apiClient.get('/books/popular');

    if (response.data.code === 200 && response.data.data) {
      return response.data.data; //book 객체가 아닌 data 자체를 반환
    } else {
      return null;
    }
  } catch (error) {
    console.error('[ERROR] 인기 도서 데이터 가져오기 실패:', error);
    return null;
  }
};
