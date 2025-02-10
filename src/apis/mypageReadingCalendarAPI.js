import instance from './instance';

export const mypageReadingCalendarAPI = {
  fetchCalendarData: async (selectedDate) => {
    try {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      const response = await instance.get(
        `/users/mypage/calendar?userId=5&month=${month}&year=${year}`
      );

      if (response.code === 200 && response.data.calendarList) {
        const transformedData = response.data.calendarList.reduce(
          (acc, item) => {
            const day = parseInt(item.date.split('.')[2]);
            acc[day] = {
              bookIcon: item.imageUrl,
            };
          },
          {}
        );
        return transformedData;
      }
    } catch (error) {
      console.error('Failed to fetch calendar data:', error);
    }
  },
};
