import apiClient from './instance/apiClient';

export const deleteRecord = async (roomId) => {
  try {
    const response = await apiClient.put(`/rooms/${roomId}/records`);
    console.log('[DEBUG] 삭제 API 응답:', response.data);

    if (response.data.code === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(
      '[ERROR] 책 기록 삭제 중 오류 발생:',
      error.response?.data || error
    );
    return false;
  }
};
