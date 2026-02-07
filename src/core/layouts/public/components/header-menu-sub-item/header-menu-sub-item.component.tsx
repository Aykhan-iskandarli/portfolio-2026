import Image from 'next/image';
import css from './header-menu-sub-item.module.scss';
import Link from 'next/link';

const HeaderMenuSubItemComponent = ({item, closeDropdown}: any) => {
    return (
        <li className={css.item}>
            <Link href={item.url} className={css.link} onClick={closeDropdown}>
                <div className={css.image}>
                    <Image src={item.fileUrl} alt={item.fileAltText} className={css.icon} fill/>
                </div>
                <div className={css.text}>
                    <div className={css.name}>
                        {item.name}
                    </div>
                    <div className={css.description}>
                        {item.description}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default HeaderMenuSubItemComponent;
