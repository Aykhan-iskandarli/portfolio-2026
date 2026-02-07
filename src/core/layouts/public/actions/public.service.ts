import {API} from '@/core/configs/api.config';
import axiosInstance from '@/core/configs/axios.config';
import { UsefulLinksModel } from '@/core/layouts/public/models/useful-links.model';
import { MenuModel } from '@/core/layouts/public/models/menu-items.model';
import { PageModel } from '@/core/layouts/public/models/page.model';
import { GetCategoryNewsModel } from '../models/get-category-news.model';
import { SliderModel } from '@/core/models/slider.model';
import serverAxiosInstance from '@/core/configs/server-axios.config';

export const getUsefulLinks = async () => {
    const res = await axiosInstance.get(API.usefulLinks);
    return res.data.map((item: any)=>new UsefulLinksModel(item));
};

export const getMenu = async () => {
    const res = await axiosInstance.get(API.menuItems);
    return res.data.map((item: any)=>new MenuModel(item));
};

export const getPage = async (id:number) => {
    const res = await axiosInstance.get(API.pages + '/' + id);
    return new PageModel(res.data);
};

export const getCategoryNews = async (id: number) => {
    const res = await axiosInstance.get(`${API.categoryNews}/${id}`);
    return  res.data.items.map((item: any) => new GetCategoryNewsModel(item));
};


export const getSliders = async (id: number) => {
    const res = await axiosInstance.get(API.slider + '/' + id,);
    return res.data.map((item: any) => new SliderModel(item));
};


export const getPageServer = async (id:number, locale:string) => {
    const res = await serverAxiosInstance.get(API.pages + '/' + id, {params:{locale}});
    return new PageModel(res.data);
};
