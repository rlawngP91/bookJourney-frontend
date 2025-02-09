import instance from './instance'; // Axios 인스턴스 가져오기

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczOTA4Nzc4MCwiZXhwIjoxNzM5NjkyNTgwfQ.JIYHIBYGnKVhoRwTNUPI6ymx3GyXkoF-zTb1mnoAyjI';

export const getReplys = async (recordId) => {
  try {
    const response = await instance.get(`/comments/${recordId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    if (error.response) {
      const { code, message } = error.response.data;

      if (code === 5001) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      } else if (code === 9001) {
        console.error(`❌ ${message}`);
        throw new Error(message);
      }
    }

    console.error(`❌ 서버 오류 발생`);
    throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
};
