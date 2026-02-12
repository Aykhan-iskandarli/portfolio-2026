'use client';
import css from './footer.module.scss';
import HeadingComponent from '@/core/shared/heading/heading.component';
import FooterCardItemComponent from '@/core/layouts/public/components/footer-card-item/footer-card-item.component';
import FooterMenuComponent from '@/core/layouts/public/components/footer-menu/footer-menu.component';
import FooterContactsComponent from '@/core/layouts/public/components/footer-contacts/footer-contacts.component';
import FooterSocialsComponent from '@/core/layouts/public/components/footer-socials/footer-socials.component';
import { useRef } from 'react';
import { ChevronLeftLarge, ChevronRightLarge } from '@/assets/icons/chevron';
import { useMenu, usePage, useUsefulLinks } from '../../actions/public.queries';
import { ContentTranslations } from '@/core/helpers/dynamic-content';
import FooterMailsComponent from '@/core/layouts/public/components/footer-mails/footer-mails.component';

const FooterComponent = () => {
  const year = new Date().getFullYear();


  return (
    <footer className={css.footer}>
      <div className='container-fluid'>;
        <div className='pb-24'>
          <div className={css.lower}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='row py-32'>
                    <div className='col-lg-6'>
                      <p className={css.copyright}>
                        {year}






                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
