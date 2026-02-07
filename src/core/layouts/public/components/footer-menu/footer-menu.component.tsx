import React, {useMemo} from 'react';
import css from './footer-menu.module.scss';
import Link from 'next/link';

const FooterMenuComponent = ({menu}: any) => {
    const itemCount = 4;
    const [firstGroup, secondGroup] = useMemo(() => {
        const first = menu?.slice(0, itemCount);
        const second = menu?.slice(itemCount);
        return [first, second];
    }, [menu]);
    return (
        <div className={css.menu}>
            <ul className='mr-50'>
                {firstGroup?.map((item: any) => (
                    <li key={item.id} className={css.item}>
                        <Link href={`${item.url}`} className={css.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <ul>
                {secondGroup?.map((item: any) => (
                    <li key={item.id} className={css.item}>
                        <Link href={`${item.url}`} className={css.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterMenuComponent;
