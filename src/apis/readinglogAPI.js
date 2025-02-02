import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // vite.config.js 프록시 설정
  headers: {
    'Content-Type': 'application/json',
    // 이건 user10 token
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3Mzg1MDc2MzIsImV4cCI6MTczODUxMTIzMn0.83WaKIOl5tVI0hIDUTUIAJrmlLsYiiHV2QK9uINDj3g',
  },
});

const RoomListNotReadAPIResponse = (record) => ({
  id: record.roomId,
  book: record.bookTitle,
  author: record.authorName,
  people: record.roomType === '같이읽기' ? '같이' : '혼자',
  recentEdit: record.modifiedAt,
  progress: record.userPercentage,
  coverImage: record.imageUrl,
});

export const fetchReadingRecords = async (userId) => {
  try {
    const response = await api.get(`/rooms/records`, {
      params: { userId },
    });

    if (response.data.code === 200) {
      return {
        success: true,
        data: response.data.data.recordList.map(RoomListNotReadAPIResponse),
        nickname: `user${userId}`,
      };
    } else {
      throw new Error(response.data.message || '서버 응답 오류');
    }
  } catch (error) {
    console.error('API 요청 오류:', error);
    return {
      success: false,
      error: error.response?.data?.message || error.message,
      data: [],
    };
  }
};
