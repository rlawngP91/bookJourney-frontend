import instance from './instance';

const parseDateParams = (currentDate) => {
  if (currentDate.includes('전체보기')) {
    const year = currentDate.split('년')[0];
    return { year };
  }

  const matches = currentDate.match(/(\d{4})년\s*(\d{1,2})월/);
  if (!matches) {
    throw new Error('잘못된 날짜 형식입니다');
  }

  return {
    year: matches[1],
    month: matches[2],
  };
};

const RoomListNotReadAPIResponse = (record) => ({
  id: record.roomId,
  book: record.bookTitle,
  author: record.authorName,
  people: record.roomType === '같이읽기' ? '같이' : '혼자',
  roomTitle: record.roomName,
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

export const fetchReadingRecordsNotRead = async (currentDate) => {
  try {
    const dateParams = parseDateParams(currentDate);
    const queryParams = new URLSearchParams(dateParams).toString();
    const responseNotRead = await instance.get(`/rooms/archive?${queryParams}`);

    if (responseNotRead.data.code === 200) {
      return {
        success: true,
        data: responseNotRead.data.data.recordList.map(
          RoomListNotReadAPIResponse
        ),
        signupDate: responseNotRead.data.data.userCreatedAt,
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

export const fetchReadingRecordsRead = async (currentDate) => {
  try {
    const dateParams = parseDateParams(currentDate);
    const queryParams = new URLSearchParams(dateParams).toString();
    const responseRead = await instance.get(
      `/rooms/archive/completed?${queryParams}`
    );

    if (responseRead.data.code === 200) {
      return {
        success: true,
        data: responseRead.data.data.recordList.map(RoomListReadAPIResponse),
        signupDate: responseRead.data.data.userCreatedAt,
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
