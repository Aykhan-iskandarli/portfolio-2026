import Home from '@/app/[locale]/home/page';
import { Suspense } from 'react';
import LoaderComponent from '@/core/shared/loader/loader.component';

const Page = () => {
  return <Suspense fallback={<LoaderComponent/>}>
    <Home/>
  </Suspense>;
};

export default Page;
