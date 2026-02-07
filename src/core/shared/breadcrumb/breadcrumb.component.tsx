'use client';
import css from './breadcrumb.module.scss';
import classNames from 'classnames';
import {useParams, usePathname} from 'next/navigation';
import {IBreadcrumb} from '@/core/shared/breadcrumb/breadcrumb';
import {ChevronRight} from '@/assets/icons/chevron';
import {HomeIcon} from '@/assets/icons/home';
import Link from 'next/link';
import {useCallback, useMemo, useState} from 'react';
import {getLocale} from '@/core/helpers/local-storage';
import {usePage} from '@/core/layouts/public/actions/public.queries';
import {ContentTranslations} from '@/core/helpers/dynamic-content';

const BreadcrumbComponent = ({classes = '', lastItem, title}: IBreadcrumb) => {
    const {data: pages} = usePage(20);
    const breadCrumbClasses = classNames({
        [classes]: classes,
        [css.breadcrumb]: true,
    });
const {id} = useParams();

    const breadCrumbItemClasses = (active: boolean) => classNames({
        [css.item]: true,
        [css.active]: active,
    });
    const paths = usePathname();
    const [pathNames, setPathNames] = useState(paths.split('/').filter(path => path));
    const isNumber = isNaN(Number(id));
    const currentBreadcrumbText = useCallback((path: any) => {
        if (pages?.dynamicContents) {
            const text = ContentTranslations(
                pages?.dynamicContents,
                `web.breadcrumb.${path}`
            );
            if (text) return text.content;
        }
        return path;
    }, [pages?.dynamicContents]);
    const currentBreadcrumbContent = useCallback((index: number, path: string) => {
        let redirectLink = '';
        for (let i = 0; i <= index; i++) {
            redirectLink += '/';
            redirectLink += pathNames[i];
        }
        return !((index === pathNames.length - 1) && lastItem) ?
            <Link href={redirectLink}>{currentBreadcrumbText(path)}</Link> : <>{currentBreadcrumbText(lastItem)}</>;
    }, [currentBreadcrumbText, lastItem, pathNames]);

    return (
        <ul className={breadCrumbClasses}>
            <li className={css.item}>
                <Link href={`/${getLocale()}`}>
                    <HomeIcon/>
                </Link>
            </li>
            {
               isNumber ?    pathNames.map((path, index) => {
                    if (index !== 0) return (
                        <li key={index}
                            className={!lastItem ? breadCrumbItemClasses(index === pathNames.length - 1) : breadCrumbItemClasses(false)}>
                            <ChevronRight className={css.icon}/>
                            <span>
                                  {currentBreadcrumbContent(index, path)}
                            </span>
                        </li>
                    );
                }): pathNames.slice(0, -1).map((path, index) => {
                    if (index !== 0) return (
                        <li key={index}
                            className={!lastItem ? breadCrumbItemClasses(index === pathNames.length - 1) : breadCrumbItemClasses(false)}>
                            <ChevronRight className={css.icon}/>
                            <span>
                                  {currentBreadcrumbContent(index, path)}
                            </span>
                           <ChevronRight className='d-flex align-center mx-8'/>
                            <span className={css.breadcrumbName}>
                                 {title}
                            </span>
                        </li>
                    );
                })
            }
         
        </ul>
    );
};

export default BreadcrumbComponent;
