import apiClient from '../apis/instance/apiClient';

// 프로필 이미지 업로드 API
export const uploadProfileImage = async (file) => {
  try {
    if (!file) {
      throw new Error('업로드할 이미지를 선택해주세요.');
    }

    const formData = new FormData();
    formData.append('image', file);
    console.log('[DEBUG] FormData 생성됨:', formData);

    console.log('[DEBUG] 프로필 이미지 업로드 요청 시작:', file.name);
    for (let pair of formData.entries()) {
      console.log(`[DEBUG] FormData Key: ${pair[0]}, Value:`, pair[1]);
    }
    const response = await apiClient.post('/users/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 파일 업로드 시 필수
        Accept: 'application/json',
      },
    });

    console.log('[DEBUG] 프로필 이미지 업로드 API 응답:', response);
    console.log('[DEBUG] 프로필 이미지 업로드 요청 시작:', file.name);

    if (!(file instanceof File)) {
      console.error('[ERROR] 선택한 파일이 File 객체가 아닙니다:', file);
      throw new Error('올바른 파일을 선택해주세요.');
    }

    console.log('[DEBUG] 프로필 이미지 업로드 API 응답:', response);
    console.log('[DEBUG] 서버에서 반환한 데이터:', response?.data);

    if (response.data.code === 200) {
      console.log('[DEBUG] 업로드 성공:', response.data.data);
      return response.data.data; // 업로드된 이미지 URL 반환
    } else {
      throw new Error(response.data.message || '이미지 업로드 실패');
    }
  } catch (error) {
    console.error('[ERROR] 프로필 이미지 업로드 실패:', error);

    if (error.response) {
      throw new Error(
        error.response.data?.message || '이미지 업로드 중 오류 발생'
      );
    } else {
      throw new Error('네트워크 오류 또는 서버 응답 없음');
    }
  }
};
