import Link from 'next/link';
import {useMemo} from 'react';
import css from './footer-card-item.module.scss';
import {LinkIcon} from '@/assets/icons/link';
import SafeImage from '@/core/shared/safe-image/safe-image.component';

const FooterCardItemComponent = ({item}: any) => {

    const hostname = useMemo(() => {
        try {
            const parsedUrl = new URL(item.url);
            return parsedUrl.hostname;
        } catch (error) {
            return item.url;
        }
    }, [item.url]);

    return (
        <div className={css.card}>
            <div className={css.content}>
                <div className={css.heading}>
                    <div className={css.image}>
                        <SafeImage src={item.fileUrl} alt={item.fileAltText} fill/>
                    </div>

                    <div className={css.title}>
                        {item.name}
                    </div>
                </div>

                <div className='w-100'>
                    <Link href={item.url.startsWith('http') ? item.url : `https://${item.url}`} target='_blank'
                          className={css.link}>
                            <span>
                                {hostname}
                            </span>
                        <LinkIcon/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterCardItemComponent;
