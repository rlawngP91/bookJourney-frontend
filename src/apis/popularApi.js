import apiClient from '../apis/instance/apiClient';

// 인기 도서 API 요청 함수
export const fetchPopularBook = async () => {
  try {
    const response = await apiClient.get('/books/popular');
    console.log('[DEBUG] 인기 도서 API 응답:', response.data);

    if (response.data.code === 200 && response.data.data) {
      console.log(
        '[DEBUG] 성공적으로 받아온 인기 도서 데이터:',
        response.data.data
      );
      return response.data.data; // ✅ book 객체가 아닌 data 자체를 반환
    } else {
      console.warn(
        '[WARNING] 응답이 성공적이지만 데이터가 없음:',
        response.data
      );
      return null;
    }
  } catch (error) {
    console.error('[ERROR] 인기 도서 데이터 가져오기 실패:', error);
    return null;
  }
};
