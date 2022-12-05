import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  DETAIL_USER: (id) => `${CONFIG.BASE_URL}/user/${id}`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  USERS: `${CONFIG.BASE_URL}/user`,
};

export default API_ENDPOINT;
