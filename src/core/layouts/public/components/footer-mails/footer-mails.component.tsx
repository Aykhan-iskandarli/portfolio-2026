import css from './footer-mails.module.scss';
import {ContentTranslations} from '@/core/helpers/dynamic-content';
import {usePage} from '@/core/layouts/public/actions/public.queries';
import FooterSocialsComponent from '@/core/layouts/public/components/footer-socials/footer-socials.component';

const FooterMailsComponent = () => {
    const {data: pages} = usePage(20);
    const footerRightTitle1 = ContentTranslations(
        pages?.dynamicContents,
        'web.common-right-title-1'
    );
    const footerRightTitle2 = ContentTranslations(
        pages?.dynamicContents,
        'web.common-right-title-2'
    );

    const footerRightEmail1 = ContentTranslations(
        pages?.dynamicContents,
        'web.common-right-email-1'
    );

    const footerRightEmail2 = ContentTranslations(
        pages?.dynamicContents,
        'web.common-right-email-2'
    );

    const mails = [
        {
            id: 1,
            title: footerRightTitle1?.content,
            text: footerRightEmail1?.content
        },
        {
            id: 2,
            title: footerRightTitle2?.content,
            text: footerRightEmail2?.content
        },
    ];

    return (
        <div>
            <ul>
                {mails.map((item: any) => (
                    <li key={item.id} className={css.item}>
                        <div className={css.title}>
                            {item.title}
                        </div>
                        <div className={css.text}>
                            {item.text}
                        </div>
                    </li>
                ))}
            </ul>
            <div className='d-none d-lg-block'>
                <FooterSocialsComponent/>
            </div>
        </div>
    );
};

export default FooterMailsComponent;
