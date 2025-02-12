import apiClient from '../apis/instance/apiClient';

// 진행중인 기록 가져오기 API
export const fetchProgressRecords = async (sortType = '최신순') => {
  try {
    const response = await apiClient.get('/rooms/records', {
      params: { sort: sortType }, // ✅ Query Parameter로 정렬 방식 전달
    });

    console.log('[DEBUG] 진행 기록 API 응답:', response.data);

    if (response.data.code === 200 && response.data.data) {
      console.log(
        '[DEBUG] 성공적으로 받아온 진행 기록 데이터:',
        response.data.data.recordList
      );
      return response.data.data.recordList; // ✅ recordList 배열 반환
    } else {
      console.warn(
        '[WARNING] 응답이 성공적이지만 데이터가 없음:',
        response.data
      );
      return [];
    }
  } catch (error) {
    console.error('[ERROR] 진행 기록 데이터 가져오기 실패:', error);
    return [];
  }
};
