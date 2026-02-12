import ButtonComponent from '@/core/shared/button/button.component';
import HeaderMenuItemComponent from '../header-menu-item/header-menu-item.component';
import css from './header-menu.module.scss';
import menu from './menu';
import { MenuItemType } from './menu-type';

const HeaderMenuComponent = () => {
  return (
    <div className=''>
      <nav className='d-flex align-center'>
        <ul className={css.menu}>
          {
            menu.map((item:MenuItemType)=>(
              <HeaderMenuItemComponent key={item.id} item={item}/>
            ))
          }
        </ul>
        <div className='mx-5'>
          <ButtonComponent className={css.contactBtn}>_CONTACT </ButtonComponent>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenuComponent;
