import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {environment} from '@/core/configs/app.config';
import { getLocale } from '../helpers/local-storage';
import { getServerLocale } from '../helpers/server-locale.helper';

const serverAxiosInstance: AxiosInstance = axios.create({
    baseURL: environment.apiMain,
});

serverAxiosInstance.interceptors.request.use((config) => {
    const locale = getServerLocale(config.params?.locale); 
    config.headers.set('Accept-Language', locale);
    return config;
  });


serverAxiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default serverAxiosInstance;