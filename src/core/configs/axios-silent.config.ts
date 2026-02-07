import axios, {AxiosResponse} from 'axios';
import {environment} from './app.config';
import {store} from '@/store/store.config';
import {setLoader} from '@/store/store.reducer';
import {errorToast} from '../shared/toast/toast';
import {getLocale, getToken} from '@/core/helpers/local-storage';
const axiosSilentInstance = axios.create({
    baseURL: environment.apiMain,
});
axiosSilentInstance.interceptors.request.use(
    (config: any) => {
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
        return Promise.reject(error);
    });

axiosSilentInstance.interceptors.response.use(
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
        return response;
    },
    (error: any) => {
        let errMessage = '';
        const {
            response: {status,},
        } = error;
        // TODO translate error messages

        switch (status) {
            case 401:
                errMessage = 'Sessiya müddəti bitmişdir';
                localStorage.removeItem(`${environment.applicationName}-token`);
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

        errorToast(error.response.data);
        return Promise.reject(error);
    }
);
export default axiosSilentInstance;
