import Link from 'next/link';
import css from './vacancy-card-item.module.scss';
import SafeImage from '@/core/shared/safe-image/safe-image.component';

const ImageCardItemComponent = ({item}: any) => {

    return (
        <div className={css.card}>
            <div className={css.content}>
                <Link href={`${item.postUrl}`} target='_blank' className={css.link}>
                     Linkedin
                </Link>
                <SafeImage src={item.imageUrl} alt={item.alt} className={css.image} fill/>

            </div>
        </div>
    );
};

export default ImageCardItemComponent;
