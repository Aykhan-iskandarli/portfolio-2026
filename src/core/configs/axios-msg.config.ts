import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {environment} from './app.config';
import {store} from '@/store/store.config';
import {setLoader} from '@/store/store.reducer';
import {errorToast, successToast} from '../shared/toast/toast';
import {getLocale, getToken} from '@/core/helpers/local-storage';
import {paginationConfig} from '@/core/configs/pagination.config';
import { toast } from 'react-hot-toast';
const axiosMsgInstance = axios.create({
    baseURL: environment.apiMain,
});
axiosMsgInstance.interceptors.request.use(
    (config: any) => {
        store.dispatch(setLoader(true));
        return {
            ...config,
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Accept-Language': getLocale(),
                ...config.headers,
            },
            params: {
                ...config.params,
            },

        };
    }, (error: any) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosMsgInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const method = response?.config?.method?.toUpperCase() ?? '';
        const url = response?.config?.url ?? '';
        // if (method === 'POST') {
        //     toast.success('Göndərildi');
        // }
        // if (method === 'PUT') {
        //     successToast('Müraciət dəyişdirildi');
        // }
        // if (response.data) {
        //     store.dispatch(setLoader(false));
        // }
        store.dispatch(setLoader(false));

        return response;
    },
    (error: any) => {
        let errMessage = '';
        const {
            response: {status, response},
        } = error;
        // TODO translate error messages


        switch (status) {
            case 401:
                errMessage = 'Sessiya müddəti bitmişdir';
                localStorage.removeItem(`${environment.applicationName}-token`);
                break;

            case 400:
                errMessage = response?.data;
                break;

            case 404:
                errMessage = 'Məlumat tapılmadı';
                // Router.navigate('/404');
                break;

            case 500:
                errMessage = 'Server xətası';
                break;

            default:
                errMessage = 'Xəta baş verdi';
        }

        toast.error( error.response.data);
        store.dispatch(setLoader(false));
        return Promise.reject(error);
    }
);
export default axiosMsgInstance;
