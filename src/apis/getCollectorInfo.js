import instance from './instance'; // Axios 인스턴스 가져오기

export const getCollectorInfo = async () => {
  try {
    const response = await instance.get('/users/mypage/collector-nickname');
    return response.data.data; // ✅ API 응답에서 data 부분만 반환
  } catch (error) {
    console.error(`❌ API 요청 실패:`, error);
    throw new Error(
      error.response?.data?.message || '데이터를 가져오는 중 오류 발생'
    );
  }
};
