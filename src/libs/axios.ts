import axios from 'axios';
import {store} from 'redux/store';

export const axiosInstance = axios.create({
  baseURL: 'https://crypto-wallet-django.up.railway.app/api',
  timeout: 1000 * 3 * 60, // 3 mins
});

axiosInstance.interceptors.request.use(config => {
  const token = store.getState().user.token;

  // append Auth token to header
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }

  return config;
});
