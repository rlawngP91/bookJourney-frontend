const API_ENDPOINTS = {
  READING_RECORDS: 'http://13.48.61.179/rooms/records',
};
const RoomListNotReadAPIResponse = (record) => ({
  id: record.roomId,
  book: record.bookTitle,
  author: record.authorName,
  people: record.roomType === '같이읽기' ? '같이' : '혼자',
  recentEdit: record.modifiedAt,
  progress: record.userPercentage,
  coverImage: record.imageUrl,
});

// "다 안읽었어요" API 함수
export const fetchReadingRecords = async (userId) => {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.READING_RECORDS}?userId=${userId}`
    );

    if (!response.ok) {
      throw new Error('독서 기록을 불러오는데 실패했습니다.');
    }

    const data = await response.json();

    if (data.code === 200) {
      return {
        success: true,
        data: data.data.recordList.map(RoomListNotReadAPIResponse),
        nickname: `user${userId}`,
      };
    } else {
      throw new Error(data.message || '서버 응답 오류');
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
};
