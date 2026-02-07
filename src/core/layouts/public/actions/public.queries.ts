import { useQuery } from '@tanstack/react-query';
import { IMenu, IUsefulLinks, IPage } from '@/core/layouts/public/public';
import { getMenu, getUsefulLinks, getPage, getCategoryNews, getSliders } from '@/core/layouts/public/actions/public.service';
import { ISlider } from '@/core/types/common';
import {ICategoryNews} from '@/app/[locale]/about/organization';

export const useUsefulLinks = () => {
    return useQuery<IUsefulLinks[], Error>({
      queryFn: async () => await getUsefulLinks(),
      queryKey: ['UsefulLinks'],
    });
  };

  export const useMenu = () => {
    return useQuery<IMenu[], Error>({
      queryFn: async () => await getMenu(),
      queryKey: ['Menu'],
    });
  };

  export const usePage = (id:number) => {
    return useQuery<any, Error>({
      queryFn: async () => await getPage(id),
      queryKey: ['Page', id],
    });
  };

  export const useGetCategoryNews = (id: number) => {
    return useQuery<ICategoryNews[], Error>({
        queryFn: async () => await getCategoryNews(id),
        queryKey: ['CategoryNews', id],
        enabled: !!id,
    });
};

export const useGetSliders = (id: number) => {
  return useQuery<ISlider[], Error>({
      queryFn: async () => await getSliders(id),
      queryKey: ['Sliders', id],
      enabled: !!id,
  });
};
