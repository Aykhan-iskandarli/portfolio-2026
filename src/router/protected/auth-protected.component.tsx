'use client';
import {useDispatch} from 'react-redux';
import {useEffect, useMemo, useState} from 'react';
import {getLocale, getToken, setLocale} from '@/core/helpers/local-storage';
import {setUser} from '@/store/store.reducer';
import {Routes} from '@/router/routes';
import {IAuthProtectedRouteProps} from '@/router/protected/auth-protected';
import Navigate from '@/router/navigate/navigate';
import {useParams, usePathname} from 'next/navigation';
import PublicLayout from '@/core/layouts/public/public.layout';

const AuthProtectedComponent = ({children}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [childNode, setChildNode] = useState<React.ReactNode>(null);
    const {locale} = useParams();

    const layout = useMemo(() => {
        if (pathname.includes(Routes.auth)) {
            return 'auth';
        }
        return 'public';
    }, [pathname]);

    useEffect(() => {
        const token = getToken();
        if (token) {
            dispatch(setUser(token));
        }
        switch (layout) {
            // case 'auth':
            //     if (token) setChildNode(<Navigate replace to={Routes.home}/>);
            //     else setChildNode(children);
            //     break;
            // case 'public':
            //     if (token) setChildNode(<PublicLayout>{children}</PublicLayout>);
            //     else setChildNode(<Navigate replace to={Routes.auth}/>);
            //     break;
            default:
                // setChildNode(children);
                setChildNode(<PublicLayout>{children}</PublicLayout>);
                break;
        }
    }, [children, dispatch, layout]);

    useEffect(() => {
        // const currentLocale = getLocale();
        // if (currentLocale !== locale) {
        //     // Navigate()
        // }
        // let name = pathname.split('/');
        // // const url = pathname.replace(`/${}/`, `/${dynamicValue}/`);
        // console.log(locale, currentLocale);
        //
        const path = pathname.split('/');
        setLocale(path[1]);
    }, []);

    return childNode;
};

export default AuthProtectedComponent;
