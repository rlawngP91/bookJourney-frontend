import apiClient from './instance/apiClient';

// 비밀번호 변경 API 요청
export const changePassword = async (currentPassword, newPassword) => {
  try {
    const response = await apiClient.patch('/users/mypage/password', {
      currentPassword,
      newPassword,
    });

    console.log('[DEBUG] 비밀번호 변경 응답:', response.data);

    if (response.data.code === 200) {
      return { success: true, message: '비밀번호 변경 성공' };
    }
  } catch (error) {
    console.error('[ERROR] 비밀번호 변경 실패:', error);

    if (error.response) {
      const { code, message } = error.response.data;
      return { success: false, code, message };
    }
    return { success: false, message: '알 수 없는 오류 발생' };
  }
};
