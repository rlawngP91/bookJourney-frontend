import apiClient from './instance/apiClient';

export const fetchRecruitRooms = async () => {
  try {
    const response = await apiClient.get('/rooms/recruitments');
    if (response.data.code === 200) {
      return response.data.data;
    }

    return null;
  } catch (error) {
    console.error('[ERROR] 모집 중인 방 데이터 가져오기 실패:', error);
    return null;
  }
};
