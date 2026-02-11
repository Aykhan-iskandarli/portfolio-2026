import Link from 'next/link';
import css from './header-menu-item.module.scss';
import React, {useState, useEffect, useRef} from 'react';

import classNames from 'classnames';
const HeaderMenuItemComponent = ({item}: any) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const subClasses = classNames({
        [css.sub]: true,
        [css.show]: dropdownVisible
    });

    const nameClasses = classNames({
        [css.name]: true,
        [css.active]: dropdownVisible
    });

    const firstColumnItems = item?.menuItems?.slice(0, 3) || [];
    const secondColumnItems = item?.menuItems?.slice(3) || [];

    return (
        <li className={css.item}>
            {item?.menuItems?.length > 0 ? (
                <div className={css.dropdown} ref={dropdownRef}>
                    <div className={nameClasses} onClick={toggleDropdown}>
                        {item.name}
                    </div>
                 
                </div>
            ) : (
                <Link href={`${item?.url}`} className={css.name}>{item.name}</Link>
            )}
        </li>
    );
};

export default HeaderMenuItemComponent;
