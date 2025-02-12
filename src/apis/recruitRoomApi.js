import apiClient from './instance/apiClient';

export const fetchRecruitRooms = async () => {
  try {
    const response = await apiClient.get('/rooms/recruitments');
    if (response.data.code === 200) {
      return response.data.data;
    }
    console.warn(
      '[WARNING] 모집 중인 방 API 응답이 올바르지 않습니다:',
      response.data
    );
    return null;
  } catch (error) {
    console.error('[ERROR] 모집 중인 방 데이터 가져오기 실패:', error);
    return null;
  }
};
