import css from './mobile-menu-item.module.scss';
import {IMenu} from '@/core/layouts/public/public';
import {CloseIcon} from '@/assets/icons/menu';
import {ArrowNarrowRight} from '@/assets/icons/arrow-narrow-right';
import {ChevronRight} from '@/assets/icons/chevron';


const MobileMenuItemComponent = ({item, click}: { item: IMenu, click: (item:IMenu) => void }) => {

    return (
        <div className={css.wrapper} onClick={() => click(item)}>
            <div className={css.name}>{item.name}</div>
            <div className={css.items}>
                <div className={css.subs}>
                    {item.menuItems.map((sub: any) => sub.name).join(', ')}
                </div>
                <ChevronRight color={'#fff'}/>
            </div>
        </div>
    );
};

export default MobileMenuItemComponent;
