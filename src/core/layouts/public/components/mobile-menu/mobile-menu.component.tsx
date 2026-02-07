'use client';
import css from './mobile-menu.module.scss';
import {IMenu} from '@/core/layouts/public/public';
import MobileMenuItemComponent from '@/core/layouts/public/components/mobile-menu-item/mobile-menu-item.component';
import {useCallback, useEffect, useState} from 'react';
import MobileMenuSubComponent from '@/core/layouts/public/components/mobile-menu-sub/mobile-menu-sub.component';
import classNames from 'classnames';
import {Button} from "antd";
import {setLocale} from "@/core/helpers/local-storage";
import {router} from "next/client";
import {usePathname} from "next/navigation";


const MobileMenuComponent = ({menus, isShowMobileMenu, onClose, locale,
                                 onLanguageChange}: {
    menus: IMenu[],
    isShowMobileMenu: boolean,
    onClose: () => void,
    locale: string,
    onLanguageChange: (value: string) => void
}) => {
    const [selectedItem, setSelectedItem] = useState<IMenu | null>(null);
    const pathname = usePathname();
    const onClickItem = useCallback((item: IMenu | null) => {
        setSelectedItem(item);
        if (item === null) {
            onClose();
        }
    }, [onClose]);

    const subClasses = classNames({
        [css.sub_wrapper]: true,
        [css.sub_wrapper__active]: selectedItem !== null
    });

    const cardClasses = classNames({
        [css.card]: true,
        [css.card__active]: isShowMobileMenu
    });

    useEffect(() => {
        if (!isShowMobileMenu) {
            setSelectedItem(null);
        }
    }, [isShowMobileMenu]);
    return (
        <div className={cardClasses}>
            {
                menus?.map((item: any) => (
                    <MobileMenuItemComponent click={onClickItem} key={item.id} item={item}/>
                ))
            }
            <div className={subClasses}>
                <MobileMenuSubComponent subMenus={selectedItem} onClickItem={onClickItem}/>
            </div>
            <div className='d-flex justify-center'>
                <div className={css.lang_switcher}>

                    <Button className={locale === 'az' ? css.active : ''}
                            onClick={() => onLanguageChange('az')}>AZE</Button>
                    <Button className={locale === 'en' ? css.active : ''}
                            onClick={() => onLanguageChange('en')}>EN</Button>
                    <Button className={locale === 'ru' ? css.active : ''}
                            onClick={() => onLanguageChange('ru')}>RU</Button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuComponent;
