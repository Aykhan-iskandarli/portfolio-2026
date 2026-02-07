'use client';
import { ContentTranslations } from '@/core/helpers/dynamic-content';
import { usePage } from '@/core/layouts/public/actions/public.queries';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {useState} from 'react';

const ReactQueryProvider = ({children}: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default ReactQueryProvider;