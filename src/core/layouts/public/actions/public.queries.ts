import { useQuery } from '@tanstack/react-query';
import { IMenu, IUsefulLinks, IPage } from '@/core/layouts/public/public';
import { getMenu, getUsefulLinks, getPage, getCategoryNews, getSliders } from '@/core/layouts/public/actions/public.service';

export const useUsefulLinks = () => {
    return useQuery<IUsefulLinks[], Error>({
      queryFn: async () => await getUsefulLinks(),
      queryKey: ['UsefulLinks'],
    });
  };
