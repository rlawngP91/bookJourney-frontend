import instance from './instance';

export const mypageAPI = {
  fetchProfileData: async () => {
    try {
      const response = await instance.get('/users/mypage');

      if (response.data.code === 200) {
        return {
          imageUrl: response.data.data.imageUrl,
          nickname: response.data.data.nickname,
          email: response.data.data.email,
        };
      }
      return null;
    } catch (error) {
      console.error('Failed to fetch profile data:', error);
      return null;
    }
  },
};
