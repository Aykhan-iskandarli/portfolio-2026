import { Link } from '@/i18n/routing';
import css from './header-menu-item.module.scss';
import React, { useState, useEffect, useRef } from 'react';

const HeaderMenuItemComponent = ({ item }: any) => {
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


  console.log(item.length);

  return (
    <li className={css.item}>
      <Link href={`/${item.link}/`}>
        {
          item && (
            <div>{item.name}</div>
          )
        }
      </Link>
    </li>
  );
};

export default HeaderMenuItemComponent;
