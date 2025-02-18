import instance from './instance';

export const mypageReadingCalendarAPI = {
  fetchCalendarData: async (selectedDate) => {
    try {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      const paramsCalendar = new URLSearchParams({
        month: month,
        year: year,
        // userId: 5,
      });

      const response = await instance.get(
        `/users/mypage/calendar?${paramsCalendar.toString()}`
      );

      if (response.data.code === 200 && response.data.data.calendarList) {
        // const transformedData = response.data.data.calendarList.reduce(
        //   (acc, item) => {
        //     const day = parseInt(item.date.split('.')[2]);
        //     acc[day] = item.imageUrl;
        //     return acc;
        //   },
        //   {}
        // );
        const transformedData = response.data.data.calendarList.reduce(
          (acc, item) => {
            const day = parseInt(item.date.split('.')[2]);
            if (!acc[day]) {
              acc[day] = [];
            }
            acc[day].push(item.imageUrl);
            return acc;
          },
          {}
        );
        return transformedData;
      }
    } catch (error) {
      console.error('Failed to fetch calendar data:', error);
      return {};
    }
  },

  fetchCalendarDataDetail: async (selectedDate, day) => {
    try {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      const paramsCalendar = new URLSearchParams({
        month: month,
        year: year,
        day: day,
        // userId: userId,
      });

      const response = await instance.get(
        `/users/mypage/calendar/info?${paramsCalendar.toString()}`
      );

      if (response.data.code === 200 && response.data.data.calendarList) {
        return response.data.data.calendarList.map((item) => ({
          image: item.imageUrl,
          author: item.authorName,
          title: item.bookTitle,
          status: item.roomType === '혼자읽기' ? '혼자' : '같이',
          period: item.date,
        }));
      }
      return {};
    } catch (error) {
      console.error('Failed to fetch calendar data detail:', error);
      return {};
    }
  },
};
