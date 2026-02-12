'use client';
import css from './header.module.scss';
import { Select } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import HeaderMenuComponent from '@/core/layouts/public/components/header-menu/header-menu.component';

import Link from 'next/link';
import { getLocale, setLocale } from '@/core/helpers/local-storage';

const HeaderComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const locale = useMemo(() => {
    return pathname.split('/')[1];
  }, [pathname]);
  const onLanguageChange = useCallback((value: string) => {
    const path = pathname.split('/');
    path[1] = value;
    setLocale(path[1]);
    router.replace(path.join('/'));

  }, [pathname, router]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsShowMobileMenu(!isShowMobileMenu);
  }, [isShowMobileMenu]);
  useEffect(()=>{
    console.log(getLocale());
  }, []);
  return (
    <header className={scrolled ? css.scrolled : ''}>
      <div className={css.header}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className={css.content}>
                <div className='d-flex align-center'>
                  <Link href={getLocale() ? `/${getLocale()}`: '/az'} className={css.logo}>
                    {/* <Logo/> */}
                    <p>Nebula</p>
                    <span>Dev</span>
                  </Link>
                </div>
                <div className='d-flex align-center'>
                  <HeaderMenuComponent/>
                  {/* <div className='align-center d-none d-lg-flex'>
                    <div className={css.select}>
                      <Select className='d-flex align-center' onChange={onLanguageChange}
                        defaultValue={locale} options={[
                          { label: 'Az', value: 'az' },
                          { label: 'En', value: 'en' },
                          { label: 'Ru', value: 'ru' },
                        ]}/>
                    </div>
                  </div> */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default HeaderComponent;
