'use client';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/store/store.config';
import RootLoaderComponent from '@/core/layouts/root/components/root-loader/root-loader.component';
import AuthProtectedComponent from '@/router/protected/auth-protected.component';
import { usePage } from '../public/actions/public.queries';

const RootLayoutComponent = ({children}: { children: React.ReactNode }) => {

    return (
        <>
            <Provider store={store}>
                <RootLoaderComponent/>
                <AuthProtectedComponent>
                    {children}
                </AuthProtectedComponent>
            </Provider>
            {/*<AnimatedCursor*/}
            {/*    innerSize={8}*/}
            {/*    outerSize={40}*/}
            {/*    innerScale={1}*/}
            {/*    outerScale={1.7}*/}
            {/*    outerAlpha={0.4}*/}
            {/*    outerStyle={{*/}
            {/*        mixBlendMode: 'exclusion',*/}
            {/*        border: '3px solid white',*/}
            {/*        backgroundColor: 'transparent',*/}
            {/*        zIndex: '10000',*/}
            {/*    }}*/}
            {/*    innerStyle={*/}
            {/*        {*/}
            {/*            mixBlendMode: 'exclusion',*/}
            {/*            backgroundColor: 'white',*/}
            {/*            zIndex: '10000',*/}
            {/*        }*/}
            {/*    }*/}
            {/*/>*/}
        </>
    );
};


export default RootLayoutComponent;

