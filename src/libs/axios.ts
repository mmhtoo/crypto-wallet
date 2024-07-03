import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://crypto-wallet-django.up.railway.app/api',
  timeout: 1000 * 3, // 3 mins
});
