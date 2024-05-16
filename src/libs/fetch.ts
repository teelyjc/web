import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const fetch = axios.create({
  baseURL: publicRuntimeConfig.BACKEND_URL,
  withCredentials: true,
});
