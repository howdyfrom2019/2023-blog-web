import axios from 'axios';

export const useBlogPostAPI = () => {
  const fetchPostCategories = async () => {
    try {
      const data = await axios.get('/api/article');
      return data;
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return {
    fetchPostCategories,
  };
};
