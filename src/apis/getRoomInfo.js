import instance from './instance';

/* 
// ✅ 모든 요청에 `Authorization` 헤더 자동 추가 (Interceptor 활용)
api.interceptors.request.use(
  (config) => {
    const ACCESS_TOKEN = localStorage.getItem('accessToken'); // 저장된 토큰 가져오기
    if (ACCESS_TOKEN) {
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 방 정보 가져오기 (GET /rooms/{roomId})
export const getRoomInfo = async (roomId) => {
  try {
    const response = await api.get(`/rooms/${roomId}`);
    return response.data.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        console.error(
          `❌ 400 Bad Request: 요청이 잘못되었습니다. (roomId: ${roomId})`
        );
        throw new Error('잘못된 요청입니다. 방 정보를 찾을 수 없습니다.');
      } else if (status === 403) {
        console.error(`❌ 403 Forbidden: 인증 오류 (토큰 만료 또는 권한 없음)`);
        throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
      } else {
        console.error(`❌ HTTP ${status} 오류 발생:`, data);
        throw new Error(
          `서버 오류 (${status}): ${data.message || '잠시 후 다시 시도해주세요.'}`
        );
      }
    } else {
      console.error(`❌ 서버에 연결할 수 없습니다:`, error);
      throw new Error('서버에 연결할 수 없습니다. 인터넷 상태를 확인하세요.');
    }
  }
};
 */
export const getRoomInfo = async (roomId) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODUwNzUxOCwiZXhwIjoxNzM4NTExMTE4fQ.qBQ7J3981LIq-ViGcre-y5mcTYOrjvp6e-f9m1La5Eo';

  try {
    const response = await instance.get(`/rooms/${roomId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      'Content-Type': 'application/json',
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        console.error(
          `❌ 400 Bad Request: 요청이 잘못되었습니다. (roomId: ${roomId})`
        );
        throw new Error('잘못된 요청입니다. 방 정보를 찾을 수 없습니다.');
      } else if (status === 403) {
        console.error(`❌ 403 Forbidden: 인증 오류 (토큰 만료 또는 권한 없음)`);
        throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
      } else {
        console.error(`❌ HTTP ${status} 오류 발생:`, data);
        throw new Error(
          `서버 오류 (${status}): ${data.message || '잠시 후 다시 시도해주세요.'}`
        );
      }
    } else {
      console.error(`❌ 서버에 연결할 수 없습니다:`, error);
      throw new Error('서버에 연결할 수 없습니다. 인터넷 상태를 확인하세요.');
    }
  }
};
