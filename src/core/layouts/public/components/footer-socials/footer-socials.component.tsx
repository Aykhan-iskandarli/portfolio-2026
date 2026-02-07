import css from './footer-socials.module.scss';
import Link from 'next/link';
import SafeImage from '@/core/shared/safe-image/safe-image.component';
import {ContentTranslations} from '@/core/helpers/dynamic-content';
import {usePage} from '@/core/layouts/public/actions/public.queries';

const FooterSocialsComponent = () => {
    const {data: pages} = usePage(20);

    const footerSocialFb = ContentTranslations(
        pages?.dynamicContents,
        'web.common.socials-fb'
    );

    const footerSocialInsta = ContentTranslations(
        pages?.dynamicContents,
        'web.common.socials-insta'
    );

    const footerSocialLinkedin = ContentTranslations(
        pages?.dynamicContents,
        'web.common.socials-linkedin'
    );

    const socials = [
        {
            id: 1,
            icon: footerSocialFb?.dynamicContentFile?.fileUrl,
            link: footerSocialFb?.content,
            alt: footerSocialFb?.dynamicContentFile?.altText,
        }, {
            id: 2,
            icon: footerSocialInsta?.dynamicContentFile?.fileUrl,
            link: footerSocialInsta?.content,
            alt: footerSocialInsta?.dynamicContentFile?.altText,
        }, {
            id: 3,
            icon: footerSocialLinkedin?.dynamicContentFile?.fileUrl,
            link: footerSocialLinkedin?.content,
            alt: footerSocialLinkedin?.dynamicContentFile?.altText,
        },
    ];

    return (
        <ul className={css.social}>
            {socials.map((item: any) => (
                <li key={item.id} className={css.social_item}>
                    <Link href={`${item.link}`} target='_blank'>
                        <SafeImage src={item.icon} alt={item.alt} fill/>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FooterSocialsComponent;
