import instance from './instance';

export const deleteRecord = async (recordId) => {
  if (!recordId) {
    throw new Error('❌ recordId가 필요합니다.');
  }

  try {
    console.log(`📌 기록 삭제 요청: DELETE /records/${recordId}`);

    const response = await instance.delete(`/records/${recordId}`);

    console.log('✅ 기록 삭제 성공:', response.data);
    return response.data.message;
  } catch (error) {
    console.error('❌ 기록 삭제 실패:', error);

    const errorCode = error.response?.data?.code;
    const errorMessage =
      error.response?.data?.message || '기록 삭제 요청 중 오류가 발생했습니다.';

    switch (errorCode) {
      case 9004:
        alert('❌ 기록 작성자가 아닌 경우 삭제할 수 없습니다.');
        break;
      default:
        alert(errorMessage);
    }

    throw new Error(errorMessage);
  }
};
