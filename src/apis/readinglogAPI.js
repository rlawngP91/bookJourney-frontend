import instance from './instance';

const RoomListNotReadAPIResponse = (record) => ({
  id: record.roomId,
  book: record.bookTitle,
  author: record.authorName,
  people: record.roomType === '같이읽기' ? '같이' : '혼자',
  recentEdit: record.modifiedAt,
  progress: record.userPercentage,
  coverImage: record.imageUrl,
});

const RoomListReadAPIResponse = (record) => ({
  id: record.roomId,
  book: record.bookTitle,
  author: record.authorName,
  people: record.roomType === '같이읽기' ? '같이' : '혼자',
  date: record.roomDate,
  coverImage: record.imageUrl,
});

export const fetchReadingRecordsNotRead = async () => {
  try {
    const responseNotRead = await instance.get(`/rooms/archive`);

    if (responseNotRead.data.code === 200) {
      return {
        success: true,
        data: responseNotRead.data.data.recordList.map(
          RoomListNotReadAPIResponse
        ),
        nickname: responseNotRead.data.data.nickName,
      };
    } else {
      throw new Error(responseNotRead.data.message || '서버 응답 오류');
    }
  } catch (error) {
    console.error('다 안읽었어요 API 요청 오류:', error);
    return {
      success: false,
      error: error.response?.data?.message || error.message,
      data: [],
    };
  }
};

export const fetchReadingRecordsRead = async () => {
  try {
    const responseRead = await instance.get(`/rooms/archive/completed`);

    if (responseRead.data.code === 200) {
      return {
        success: true,
        data: responseRead.data.data.recordList.map(RoomListReadAPIResponse),
        nickname: responseRead.data.data.nickName,
      };
    } else {
      throw new Error(responseRead.data.message || '서버 응답 오류');
    }
  } catch (error) {
    console.error('다 읽었어요 API 요청 오류:', error);
    return {
      success: false,
      error: error.response?.data?.message || error.message,
      data: [],
    };
  }
};
