import css from './footer-contacts.module.scss';
import SafeImage from '@/core/shared/safe-image/safe-image.component';
import FooterMailsComponent from '@/core/layouts/public/components/footer-mails/footer-mails.component';

const FooterContactsComponent = ({ items }: any) => {
  return (
    <div className={css.contacts}>
      <ul>
        {items.map((item: any) => (
          <li key={item.id} className={css.item}>
            <div className={css.icon}>
              <SafeImage src={item.icon} alt={item.icon} fill/>
            </div>
            <div className={css.text}>
              {item.text}
            </div>
          </li>
        ))}
      </ul>
      <div className='d-lg-none d-block'>
        <FooterMailsComponent/>
      </div>
    </div>
  );
};

export default FooterContactsComponent;
