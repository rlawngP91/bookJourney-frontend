import instance from './instance';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODkxOTQwNCwiZXhwIjoxNzM5NTI0MjA0fQ.MxRvVeY3ChrPulDS1uSYDH78fSTT2HafXuD5sWp1kN8';

export const postRecordLike = async (recordId) => {
  if (!recordId) {
    throw new Error('❌ recordId가 필요합니다.');
  }

  try {
    console.log(`📌 좋아요 요청: POST /records/${recordId}/likes`);

    const response = await instance.post(`/records/${recordId}/likes`, null, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('✅ 좋아요 응답:', response.data);

    return response.data.data.liked; // ✅ 서버 응답에서 liked 값 반환
  } catch (error) {
    const errorCode = error.response?.data?.code;

    // ✅ 서버에서 정의된 에러 코드에 맞는 메시지 출력
    switch (errorCode) {
      case 5001:
        console.error('❌ 유저를 찾을 수 없습니다.');
        alert('❌ 유저를 찾을 수 없습니다.');
        break;
      case 9001:
        console.error('❌ 기록을 찾을 수 없습니다.');
        alert('❌ 기록을 찾을 수 없습니다.');
        break;
      case 8005:
        console.error('❌ 방에 참여해있지 않습니다.');
        alert('❌ 방에 참여해있지 않습니다.');
        break;
      case 8009:
        console.error('❌ 기간이 지난 방에는 좋아요를 남길 수 없습니다.');
        alert('❌ 기간이 지난 방에는 좋아요를 남길 수 없습니다.');
        break;
      default:
        console.error(
          '❌ 좋아요 요청 실패:',
          error.response?.data || error.message
        );
        alert('❌ 좋아요 요청 중 오류가 발생했습니다.');
    }

    throw new Error(
      error.response?.data?.message || '좋아요 요청 중 오류가 발생했습니다.'
    );
  }
};
