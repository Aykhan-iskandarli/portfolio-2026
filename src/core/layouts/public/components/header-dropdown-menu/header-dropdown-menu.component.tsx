import menu1 from '@/assets/images/statics/menu1.svg';
import menu2 from '@/assets/images/statics/menu2.svg';
import menu3 from '@/assets/images/statics/menu3.svg';
import css from './header-dropdown-menu.module.scss';
import HeaderMenuSubItemComponent
    from '@/core/layouts/public/components/header-menu-sub-item/header-menu-sub-item.component';
import {CloseIcon} from '@/assets/icons/close';
import {SearchIcon} from '@/assets/icons/search';
import ButtonComponent from '@/core/shared/button/button.component';
import {MenuIcon} from '@/assets/icons/menu';
import {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import {useMenu} from '@/core/layouts/public/actions/public.queries';

const HeaderDropdownMenuComponent = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {data: menus} = useMenu();
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuClasses = classNames({
        [css.menu]: true,
        [css.show]: dropdownVisible
    });

    const iconClasses = classNames({
        [css.dropdown_icon]: true,
        [css.dropdown_icon__active]: dropdownVisible
    });
    return (
        <div className={css.dropdown}>
            <div>
                <div className={iconClasses} onClick={() => setDropdownVisible(true)}>
                    <MenuIcon/>
                </div>
                <div className={menuClasses} ref={dropdownRef}>
                    <div className='row align-center mb-20'>
                        <div className='col-6'>
                            {/*<div className={css.search}>*/}
                            {/*    <div className={css.search_container}>*/}
                            {/*        <SearchIcon className={css.search_icon}/>*/}
                            {/*        <input type='text' className={css.input} placeholder='Açar söz daxil edin'/>*/}
                            {/*    </div>*/}
                            {/*    <ButtonComponent>*/}
                            {/*        Axtar*/}
                            {/*    </ButtonComponent>*/}
                            {/*</div>*/}
                        </div>
                        <div className='col-6 text-right'>
                            <div className={css.close} onClick={() => setDropdownVisible(false)}>
                                <CloseIcon/>
                            </div>
                        </div>
                    </div>

                    <div className={css.content}>
                        {menus?.map((item: any) => (
                            (item.menuItems && item.menuItems.length) ?
                                <div key={item.id} className={css.group}>
                                    <div className={css.title}>
                                        {item.name}
                                    </div>
                                    <ul>
                                        {
                                            item.menuItems?.map((sub: any) => (
                                                <HeaderMenuSubItemComponent key={sub.id} item={sub}
                                                                            closeDropdown={() => setDropdownVisible(false)}/>
                                            ))
                                        }
                                    </ul>
                                </div> : null

                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderDropdownMenuComponent;
