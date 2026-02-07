import HeaderMenuItemComponent from '@/core/layouts/public/components/header-menu-item/header-menu-item.component';
import {useMenu} from '@/core/layouts/public/actions/public.queries';
import css from './header-menu.module.scss';
import {IMenu} from "@/core/layouts/public/public";

const HeaderMenuComponent = ({scrolled, menus}: { scrolled: boolean, menus:IMenu[] }) => {
    return (
        <div className={scrolled ? css.scrolled : ''}>
            <nav>
                <ul className={css.menu}>
                    {
                        menus?.map((item: any) => (
                            <HeaderMenuItemComponent key={item.id} item={item}/>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenuComponent;
