import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchServiceProviderProfile = async () => {
  try {
    const userId = localStorage.getItem('skillspot_userId');
    const response = await axios.get(`${API_URL}/api/serviceProvider/profile/${userId}`, {
      headers: {
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
  }
};
