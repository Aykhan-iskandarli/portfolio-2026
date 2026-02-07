'use client';
import css from './footer.module.scss';
import HeadingComponent from '@/core/shared/heading/heading.component';
import FooterCardItemComponent from '@/core/layouts/public/components/footer-card-item/footer-card-item.component';
import FooterMenuComponent from '@/core/layouts/public/components/footer-menu/footer-menu.component';
import FooterContactsComponent from '@/core/layouts/public/components/footer-contacts/footer-contacts.component';
import FooterSocialsComponent from '@/core/layouts/public/components/footer-socials/footer-socials.component';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRef} from 'react';
import {ChevronLeftLarge, ChevronRightLarge} from '@/assets/icons/chevron';
import {useMenu, usePage, useUsefulLinks} from '../../actions/public.queries';
import {ContentTranslations} from '@/core/helpers/dynamic-content';
import FooterMailsComponent from '@/core/layouts/public/components/footer-mails/footer-mails.component';

const FooterComponent = () => {
    const year = new Date().getFullYear();
    const {data: usefulLinks} = useUsefulLinks();
    const {data: pages} = usePage(20);
    const {data: menus} = useMenu();


    const text = ContentTranslations(
        pages?.dynamicContents,
        'web.home.footer-title'
    );

    const usefulLinksTitle = ContentTranslations(
        pages?.dynamicContents,
        'common.footer.useful-links'
    );


    const footerPrivacy = ContentTranslations(
        pages?.dynamicContents,
        'web.common.privacy'
    );

    const footerPrivacyRight = ContentTranslations(
        pages?.dynamicContents,
        'web.common.privacy-right'
    );

    const footerContactLoc = ContentTranslations(
        pages?.dynamicContents,
        'web.common.contact-loc'
    );

    const footerContactPhone = ContentTranslations(
        pages?.dynamicContents,
        'web.common.contact-phone'
    );


    const contacts = [
        {
            id: 1,
            icon: footerContactLoc?.dynamicContentFile?.fileUrl,
            text: footerContactLoc?.content,
            altText: footerContactLoc?.dynamicContentFile?.altText
        },
        {
            id: 2,
            icon: footerContactPhone?.dynamicContentFile?.fileUrl,
            text: footerContactPhone?.content,
            altText: footerContactPhone?.dynamicContentFile?.altText
        },
    ];

    const swiperRef = useRef<any>(null);
    return (
        <footer className={css.footer}>
            <div className='container-fluid'>
                <div className='pb-24'>
                    <div className={css.upper}>
                        <div className='container'>
                            <div className='row'>
                                {/*<div className='col-12'>*/}
                                {/*    <HeadingComponent title={usefulLinksTitle?.content} white>*/}
                                {/*        */}
                                {/*    </HeadingComponent>*/}
                                {/*</div>*/}
                                <div className='col-12 p-0'>
                                    <div className={css.slider}>
                                      {usefulLinks && usefulLinks.length> 3 &&
                                          <Swiper
                                            spaceBetween={5}
                                            slidesPerView={3}
                                            breakpoints={{
                                                991: {
                                                    slidesPerView: 3,
                                                },
                                                0: {
                                                    slidesPerView: 1.2,
                                                },
                                            }}
                                            loop
                                            autoplay
                                            modules={[Navigation,]}
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                        >
                                            {usefulLinks?.map((item: any) => (
                                                <SwiperSlide
                                                    key={item.id}
                                                    className={css.slider_item}
                                                >
                                                    <FooterCardItemComponent item={item}/>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                      }
                                    </div>
                                </div>
                                <div className='col-12 mt-20'>
                                    <div className='text-center d-none d-lg-block'>
                                        <div
                                            className={css.arrow}
                                            onClick={() => swiperRef.current.slidePrev()}
                                        >
                                            <ChevronLeftLarge/>
                                        </div>
                                        <div
                                            className={css.arrow}
                                            onClick={() => swiperRef.current.slideNext()}
                                        >
                                            <ChevronRightLarge/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.lower}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div className={css.heading}>
                                        <div
                                            dangerouslySetInnerHTML={{__html: text?.content}}
                                        />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className={css.content}>
                                        <FooterMenuComponent menu={menus}/>
                                        <FooterContactsComponent items={contacts}/>
                                        <div className='d-none d-lg-block'>
                                            <FooterMailsComponent/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='row py-32'>
                                        <div className='col-lg-12 d-block d-lg-none'>
                                            <FooterSocialsComponent/>
                                        </div>
                                        <div className='col-lg-6'>
                                            <p className={css.copyright}>
                                                {year} {footerPrivacy?.content}
                                            </p>
                                        </div>
                                        <div className='col-lg-6 d-none d-lg-block'>
                                            <div className={css.author} dangerouslySetInnerHTML={{
                                                __html: footerPrivacyRight?.content,
                                            }}>

                                            </div>
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
