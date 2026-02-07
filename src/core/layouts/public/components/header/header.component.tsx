'use client';
import css from './header.module.scss';
import {Select} from 'antd';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {Logo} from '@/assets/icons/logo';
import HeaderMenuComponent from '@/core/layouts/public/components/header-menu/header-menu.component';
import HeaderDropdownMenuComponent
    from '@/core/layouts/public/components/header-dropdown-menu/header-dropdown-menu.component';
import Link from 'next/link';
import {getLocale, setLocale} from '@/core/helpers/local-storage';
import {CloseIcon, HamburgerIcon} from '@/assets/icons/menu';
import MobileMenuComponent from '@/core/layouts/public/components/mobile-menu/mobile-menu.component';
import {useMenu, usePage} from '@/core/layouts/public/actions/public.queries';
import logo from '@/assets/images/statics/logo-white.png';
import Image from 'next/image';
import { ContentTranslations } from '@/core/helpers/dynamic-content';

const HeaderComponent = () => {
    const router = useRouter();
    const {data: menus} = useMenu();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const locale = useMemo(() => {
        return pathname.split('/')[1];
    }, [pathname]);
     const {data: pages} = usePage(20);
     const mainLogo = ContentTranslations(pages?.dynamicContents, 'web.common-logo');
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
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={css.content}>
                                <div className='d-flex align-center'>
                                    <Link href={getLocale() ? `/${getLocale()}`: '/az'} className={css.logo}>
                                        {/* <Logo/> */}
                                         <Image src={logo} alt={''}/>
                                    </Link>
                                </div>
                                <div className='menu d-none d-lg-block'>
                                    <HeaderMenuComponent menus={menus ? menus : []} scrolled={scrolled}/>
                                </div>
                                <div className={'d-block d-lg-none'} style={{cursor:'pointer'}}>
                                    {
                                        !isShowMobileMenu ? <HamburgerIcon onClick={() => toggleMobileMenu()}/> :
                                            <CloseIcon onClick={() => toggleMobileMenu()}/>

                                    }
                                    {
                                        <MobileMenuComponent onClose={toggleMobileMenu} isShowMobileMenu={isShowMobileMenu} menus={menus ? menus : []} locale={locale}
                                                             onLanguageChange={onLanguageChange}/>
                                    }
                                </div>
                                <div className='align-center d-none d-lg-flex'>
                                    <div className={css.select}>
                                        <Select className='d-flex align-center' onChange={onLanguageChange}
                                                defaultValue={locale} options={[
                                            {label: 'Az', value: 'az'},
                                            {label: 'En', value: 'en'},
                                            {label: 'Ru', value: 'ru'},
                                        ]}/>
                                    </div>
                                    <HeaderDropdownMenuComponent/>
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
