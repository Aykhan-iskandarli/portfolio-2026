'use client';
import css from './mobile-menu-sub.module.scss';
import {IMenu} from '@/core/layouts/public/public';
import React from 'react';
import HeaderMenuSubItemComponent
    from '@/core/layouts/public/components/header-menu-sub-item/header-menu-sub-item.component';


const MobileMenuSubComponent = ({subMenus, onClickItem}: {
    subMenus: IMenu | null,
    onClickItem: (sub: IMenu | null) => void
}) => {


    return (
        <div className={css.card}>
            <div className={css.title}>
                {subMenus?.name}
            </div>
            {
                subMenus?.menuItems?.map((item: any) => (
                    <ul key={item.id} onClick={() => onClickItem(null)}>
                        <HeaderMenuSubItemComponent item={item}/>
                    </ul>
                ))
            }
        </div>
    );
};

export default MobileMenuSubComponent;
